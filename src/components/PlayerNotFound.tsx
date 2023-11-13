import { Helmet, HelmetProvider } from "react-helmet-async";

function PlayerNotFound() {
   return (
      <HelmetProvider>
         <div>
            <Helmet>
               <title>Jogador não encontrado - MushMC Player Stats</title>
               <link
                  rel="shortcut icon"
                  href="/favicon.svg"
                  type="image/x-icon"
               />
            </Helmet>
            <h1>Jogador não encontrado. Tente novamente.</h1>
         </div>
      </HelmetProvider>
   );
}

export default PlayerNotFound;
