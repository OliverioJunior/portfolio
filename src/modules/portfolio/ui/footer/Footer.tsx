import Link from "next/link";
import styles from "./footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://github.com/OliverioJunior"
        target="_blank"
        className={styles.socialLink}
        data-icon="git"
      >
        <FaGithub size={24} />
        GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/oliverio-junior/"
        target="_blank"
        className={styles.socialLink}
        data-icon="linkedin" // Changed from "git" to "linkedin"
      >
        <FaLinkedin size={24} />
        LinkedIn
      </Link>
    </footer>
  );
}
