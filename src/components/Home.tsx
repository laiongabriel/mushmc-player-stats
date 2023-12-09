import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
   return (
      <HelmetProvider>
         <Helmet>
            <title>MushMC Player Stats</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
         </Helmet>
         <div>
            <h1>Home</h1>
            <p>Em desenvolvimento</p>
         </div>
      </HelmetProvider>
   );
}

export default Home;
