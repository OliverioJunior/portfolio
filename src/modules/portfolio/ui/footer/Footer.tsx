import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            © 2025 Olivério Júnior. Todos os direitos reservados.
          </div>
          <div className={styles.links}>
            <Link
              href="#"
              className={styles.link}
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className={styles.link}
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
