import React from "react";
import styles from "../styles/AccordionItem.module.scss";

function useOpenAccordion() {
   const accordionPanel = React.useRef<null | HTMLDivElement>(null);

   function handleAccordionClick({
      currentTarget,
   }: React.MouseEvent<HTMLDivElement>) {
      currentTarget.classList.toggle(styles.active);
      if (accordionPanel.current) {
         if (
            accordionPanel.current.style.maxHeight !== "0px" &&
            accordionPanel.current.style.maxHeight
         )
            accordionPanel.current.style.maxHeight = "0px";
         else {
            accordionPanel.current.style.maxHeight =
               accordionPanel.current.scrollHeight + "px";
         }
      }
   }

   return { handleAccordionClick, accordionPanel };
}

export default useOpenAccordion;
