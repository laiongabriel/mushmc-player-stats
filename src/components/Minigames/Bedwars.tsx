import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";

type BedwarsProps = {
   data: Bedwars;
};

function Bedwars({ data }: BedwarsProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <button className={styles.accordion} onClick={handleAccordionClick}>
            <h2>Bedwars</h2>
         </button>
         <div ref={accordionPanel} className={styles.panel}>
            <p>Level: {data.level || "-"}</p>
            <table>
               <thead>
                  <tr>
                     <th>Modo</th>
                     <th>Vitórias</th>
                     <th>Derrotas</th>
                     <th>WLR</th>
                     <th>Abates</th>
                     <th>Mortes</th>
                     <th>KDR</th>
                     <th>Abates finais</th>
                     <th>Mortes finais</th>
                     <th>FKDR</th>
                     <th>Camas quebradas</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Geral</td>
                     <td>{data.wins || "-"}</td>
                     <td>{data.losses || "-"}</td>
                     <td>
                        {(data.wins &&
                           data.losses &&
                           (data.wins / data.losses).toFixed(2)) ||
                           "-"}
                     </td>
                     <td>{data.kills || "-"}</td>
                     <td>{data.deaths || "-"}</td>
                     <td>
                        {(data.kills &&
                           data.deaths &&
                           (data.kills / data.deaths).toFixed(2)) ||
                           "-"}
                     </td>
                     <td>{data.final_kills || "-"}</td>
                     <td>{data.final_deaths || "-"}</td>
                     <td>
                        {(data.final_kills &&
                           data.final_deaths &&
                           (data.final_kills / data.final_deaths).toFixed(2)) ||
                           "-"}
                     </td>
                     <td>{data.beds_broken || "-"}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Bedwars;
