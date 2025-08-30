import Link from "next/link";
import styles from "./footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer} id="contactme">
      <div className={styles.contentWrapper}>
        <p className={styles.description}>
          Estou disponível para trabalhar em projetos web e mobile. Entre em
          contato comigo para discutir como posso ajudar a sua empresa a
          alcançar seus objetivos.
        </p>

        <div className={styles.medias}>
          <Link
            href="https://github.com/OliverioJunior"
            target="_blank"
            className={styles.socialLink}
            aria-label="Visite meu GitHub"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/oliverio-junior/"
            target="_blank"
            className={styles.socialLink}
            aria-label="Visite meu LinkedIn"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
            <span>LinkedIn</span>
          </Link>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Oliverio Junior. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
