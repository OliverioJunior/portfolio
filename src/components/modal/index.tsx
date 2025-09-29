import React, {
  FC,
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./modal.module.css";
import { Button, ButtonSize, ButtonVariant } from "../button";

/**
 * Interface para as props do componente Modal
 */
export interface ModalProps
  extends Omit<React.ComponentProps<"dialog">, "ref" | "onClose"> {
  /** Título exibido no cabeçalho do modal */
  header: string;
  /** Se verdadeiro, o modal será aberto automaticamente */
  isOpen?: boolean;
  /** Callback chamado quando o modal é fechado */
  onClose?: (returnValue?: string) => void;
  /** Se verdadeiro, o modal pode ser fechado clicando no backdrop */
  closeOnBackdrop?: boolean;
  /** Se verdadeiro, o modal pode ser fechado pressionando Escape */
  closeOnEscape?: boolean;
  /** Texto do botão que abre o modal (opcional) */
  triggerText?: string;
  /** Se verdadeiro, não renderiza o botão de trigger */
  hideTrigger?: boolean;
  /** Classe CSS adicional para o container do modal */
  containerClassName?: string;
}

/**
 * Interface para os métodos expostos via ref
 */
export interface ModalRef {
  /** Abre o modal de forma modal */
  showModal: () => void;
  /** Abre o modal de forma não-modal */
  show: () => void;
  /** Fecha o modal com um valor de retorno opcional */
  close: (returnValue?: string) => void;
  /** Referência ao elemento dialog */
  dialogElement: HTMLDialogElement | null;
}

/**
 * Componente Modal baseado no elemento HTML5 <dialog>
 *
 * Implementa as melhores práticas de acessibilidade e usabilidade:
 * - Suporte completo ao elemento <dialog> nativo
 * - Gerenciamento automático de foco
 * - Fechamento via Escape e backdrop (configurável)
 * - Tipagem TypeScript completa
 * - Callbacks para eventos de abertura/fechamento
 *
 * @example
 * ```tsx
 * const modalRef = useRef<ModalRef>(null);
 *
 * <Modal
 *   ref={modalRef}
 *   header="Confirmar Ação"
 *   onClose={(returnValue) => console.log('Modal fechado:', returnValue)}
 * >
 *   <p>Deseja continuar?</p>
 * </Modal>
 * ```
 */
export const Modal: FC<ModalProps> = forwardRef<ModalRef, ModalProps>(
  (
    {
      header,
      children,
      isOpen = false,
      onClose,
      closeOnBackdrop = true,
      closeOnEscape = true,
      triggerText = "Abrir Modal",
      hideTrigger = false,
      containerClassName,
      className,
      ...dialogProps
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const previousActiveElement = useRef<Element | null>(null);

    /**
     * Fecha o modal com valor de retorno opcional
     */
    const handleClose = useCallback((returnValue?: string) => {
      if (dialogRef.current) {
        dialogRef.current.close(returnValue);
      }
    }, []);

    /**
     * Abre o modal de forma modal
     */
    const handleShowModal = useCallback(() => {
      if (dialogRef.current && !dialogRef.current.open) {
        // Salva o elemento ativo atual para restaurar o foco depois
        previousActiveElement.current = document.activeElement;
        dialogRef.current.showModal();
      }
    }, []);

    /**
     * Abre o modal de forma não-modal
     */
    const handleShow = useCallback(() => {
      if (dialogRef.current && !dialogRef.current.open) {
        previousActiveElement.current = document.activeElement;
        dialogRef.current.show();
      }
    }, []);

    /**
     * Manipula o clique no backdrop
     */
    const handleBackdropClick = useCallback(
      (event: React.MouseEvent<HTMLDialogElement>) => {
        if (!closeOnBackdrop) return;

        const rect = dialogRef.current?.getBoundingClientRect();
        if (rect) {
          const isClickOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

          if (isClickOutside) {
            handleClose();
          }
        }
      },
      [closeOnBackdrop, handleClose]
    );

    /**
     * Manipula eventos de teclado
     */
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape" && !closeOnEscape) {
          event.preventDefault();
        }
      },
      [closeOnEscape]
    );

    /**
     * Expõe métodos via ref
     */
    useImperativeHandle(
      ref,
      () => ({
        showModal: handleShowModal,
        show: handleShow,
        close: handleClose,
        dialogElement: dialogRef.current,
      }),
      [handleShowModal, handleShow, handleClose]
    );

    /**
     * Efeito para controlar abertura/fechamento via prop isOpen
     */
    useEffect(() => {
      if (isOpen && dialogRef.current && !dialogRef.current.open) {
        handleShowModal();
      } else if (!isOpen && dialogRef.current?.open) {
        handleClose();
      }
    }, [isOpen, handleShowModal, handleClose]);

    /**
     * Efeito para adicionar listeners de eventos
     */
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const handleCloseEvent = (event: Event) => {
        // Restaura o foco para o elemento anterior
        if (previousActiveElement.current instanceof HTMLElement) {
          previousActiveElement.current.focus();
        }

        // Chama o callback onClose se fornecido
        if (onClose) {
          const returnValue = (event.target as HTMLDialogElement).returnValue;
          onClose(returnValue);
        }
      };

      dialog.addEventListener("close", handleCloseEvent);

      return () => {
        dialog.removeEventListener("close", handleCloseEvent);
      };
    }, [onClose]);

    return (
      <>
        {/* Botão trigger (opcional) */}
        {!hideTrigger && (
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.GHOST}
            onClick={handleShowModal}
            aria-haspopup="dialog"
          >
            {triggerText}
          </Button>
        )}

        {/* Elemento dialog */}
        <dialog
          ref={dialogRef}
          className={`${styles.container} ${containerClassName || ""} ${
            className || ""
          }`}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          aria-labelledby="modal-header"
          {...dialogProps}
        >
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            {/* Cabeçalho do modal */}
            <header className={styles.header}>
              <h2 id="modal-header" className={styles.title}>
                {header}
              </h2>
              <Button
                size={ButtonSize.SMALL}
                variant={ButtonVariant.GHOST}
                onClick={() => handleClose()}
                aria-label="Fechar modal"
                className={styles.closeButton}
              >
                <IoMdClose size={16} aria-hidden="true" />
              </Button>
            </header>

            {/* Conteúdo do modal */}
            <main className={styles.body}>{children}</main>
          </div>
        </dialog>
      </>
    );
  }
);

Modal.displayName = "Modal";

// Exporta também os tipos para uso externo
