import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import HGIcon from "../../assets/img/icons/hg.png";
import { calculateRatio, formatNumber } from "../../functions.ts";

type HungerGamesProps = {
   data: HungerGamesStats;
};

function HungerGames({ data }: HungerGamesProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img
                  src={HGIcon}
                  alt="Sopa"
                  style={{ position: "relative", top: "-2px" }}
               />
               <h2>Hunger Games</h2>
            </div>

            <div className={styles.accordionDesc}>
               <p>
                  Double Kit Rank:{" "}
                  <span
                     className={styles.minigameLevel}
                     style={{
                        color: `${data.doublekit_ranking.hex_color}`,
                        textShadow: "rgba(0, 0, 0, 0.3) 1px 1px 1px",
                     }}
                  >
                     {data.doublekit_ranking.name}{" "}
                     {data.doublekit_ranking.symbol}
                  </span>
               </p>
               <p>Máximo de abates: {data.max_kills || "-"}</p>
            </div>

            <button className={styles.accordionItemButton}>
               <img src={DownIcon} alt="Abrir e fechar" />
            </button>
         </div>

         <div ref={accordionPanel} className={styles.panel}>
            <table>
               <thead>
                  <tr>
                     <th>Modo</th>
                     <th>Vitórias</th>
                     <th>Derrotas</th>
                     <th>Abates</th>
                     <th>Mortes</th>
                     <th>Assistências</th>
                     <th>WLR</th>
                     <th>KDR</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Total</td>
                     <td>{formatNumber(data.wins)}</td>
                     <td>{formatNumber(data.games_played! - data.wins!)}</td>
                     <td>{formatNumber(data.kills)}</td>
                     <td>{formatNumber(data.deaths)}</td>
                     <td>{formatNumber(data.assists)}</td>
                     <td>
                        {calculateRatio(
                           data.wins,
                           data.games_played! - data.wins!
                        )}
                     </td>
                     <td>{calculateRatio(data.kills, data.deaths)}</td>
                  </tr>
                  <tr>
                     <td>Double Kit</td>
                     <td>{formatNumber(data.mode_doublekit_wins)}</td>
                     <td>
                        {formatNumber(
                           data.mode_doublekit_games_played! -
                              data.mode_doublekit_wins!
                        )}
                     </td>
                     <td>{formatNumber(data.mode_doublekit_kills)}</td>
                     <td>{formatNumber(data.mode_doublekit_deaths)}</td>
                     <td>{formatNumber(data.mode_doublekit_assists)}</td>
                     <td>
                        {calculateRatio(
                           data.mode_doublekit_wins,
                           data.mode_doublekit_games_played! -
                              data.mode_doublekit_wins!
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data.mode_doublekit_kills,
                           data.mode_doublekit_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>Minimush</td>
                     <td>{formatNumber(data.mode_minimush_wins)}</td>
                     <td>
                        {formatNumber(
                           data.mode_minimush_games_played! -
                              data.mode_minimush_wins!
                        )}
                     </td>
                     <td>{formatNumber(data.mode_minimush_kills)}</td>
                     <td>{formatNumber(data.mode_minimush_deaths)}</td>
                     <td>{formatNumber(data.mode_minimush_assists)}</td>
                     <td>
                        {calculateRatio(
                           data.mode_minimush_wins,
                           data.mode_minimush_games_played! -
                              data.mode_minimush_wins!
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data.mode_minimush_kills,
                           data.mode_minimush_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>Megamush</td>
                     <td>{formatNumber(data.mode_megamush_wins)}</td>
                     <td>
                        {formatNumber(
                           data.mode_megamush_games_played! -
                              data.mode_megamush_wins!
                        )}
                     </td>
                     <td>{formatNumber(data.mode_megamush_kills)}</td>
                     <td>{formatNumber(data.mode_megamush_deaths)}</td>
                     <td>{formatNumber(data.mode_megamush_assists)}</td>
                     <td>
                        {calculateRatio(
                           data.mode_megamush_wins,
                           data.mode_megamush_games_played! -
                              data.mode_megamush_wins!
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data.mode_megamush_kills,
                           data.mode_megamush_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>Quarter Quell</td>
                     <td>{formatNumber(data.mode_quarterquell_wins)}</td>
                     <td>
                        {formatNumber(
                           data.mode_quarterquell_games_played! -
                              data.mode_quarterquell_wins!
                        )}
                     </td>
                     <td>{formatNumber(data.mode_quarterquell_kills)}</td>
                     <td>{formatNumber(data.mode_quarterquell_deaths)}</td>
                     <td>{formatNumber(data.mode_quarterquell_assists)}</td>
                     <td>
                        {calculateRatio(
                           data.mode_quarterquell_wins,
                           data.mode_quarterquell_games_played! -
                              data.mode_quarterquell_wins!
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data.mode_quarterquell_kills,
                           data.mode_quarterquell_deaths
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default HungerGames;
