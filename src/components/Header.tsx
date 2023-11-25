import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import React from "react";
import Logo from "../assets/img/logo.svg";
import SearchIcon from "../assets/img/icons/search-icon.svg";

function Header() {
   const [playerName, setPlayerName] = React.useState("");
   const navigate = useNavigate();

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (playerName.length) {
         setPlayerName("");
         navigate(`/player/${playerName}`);
      }
   }

   return (
      <header className={styles.header}>
         <div className={`${styles.headerContent} container`}>
            <div className={styles.logo}>
               <Link to={"/"}>
                  <img src={Logo} width={50} height={50} alt="Logo do site" />
               </Link>
            </div>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  pattern="[a-zA-Z0-9_]{3,}"
                  placeholder="Procurar jogador..."
                  required
                  value={playerName}
                  onChange={({ target }) => {
                     setPlayerName(target.value);
                  }}
               />
               <button className={styles.searchButton}>
                  <img src={SearchIcon} alt="Ícone de pesquisa" />
               </button>
            </form>
            <div className={styles.github}>
               <a
                  href="https://github.com/laiongabriel/mushmc-player-stats"
                  target="_blank"
               >
                  GitHub
               </a>
            </div>
         </div>
      </header>
   );
}

export default Header;
