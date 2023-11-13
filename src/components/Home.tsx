import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
   return (
      <HelmetProvider>
         <div>
            <Helmet>
               <title>MushMC Player Stats</title>
               <link
                  rel="shortcut icon"
                  href="/favicon.svg"
                  type="image/x-icon"
               />
            </Helmet>
            <h1>Home</h1>
         </div>
      </HelmetProvider>
   );
}

export default Home;
