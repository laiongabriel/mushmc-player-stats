import styles from "../styles/Footer.module.scss";

function Footer() {
   return (
      <footer className={styles.footer}>
         Desenvolvido por{" "}
         <a href="https://github.com/laiongabriel" target="_blank">
            Laion Gabriel
         </a>
      </footer>
   );
}

export default Footer;
