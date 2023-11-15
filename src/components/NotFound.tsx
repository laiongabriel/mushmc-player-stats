import { Helmet, HelmetProvider } from "react-helmet-async";

function NotFound() {
   return (
      <HelmetProvider>
         <Helmet>
            <title>Página não encontrada | MushMC Player Stats</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
         </Helmet>
         <div>
            <h1>
               Página não encontrada. Verifique o endereço e tente novamente.
            </h1>
         </div>
      </HelmetProvider>
   );
}

export default NotFound;
