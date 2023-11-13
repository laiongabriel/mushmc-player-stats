import React from "react";

function useFetch<T>(url: RequestInfo | URL) {
   const [data, setData] = React.useState<T | null>(null);
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState<string | null>(null);

   React.useEffect(() => {
      const controller = new AbortController();

      const fetchData = async () => {
         setLoading(true);
         try {
            const response = await fetch(url, {
               signal: controller.signal,
            });
            if (!response.ok)
               throw new Error(
                  "Requisição inválida. Verifique a entrada e tente novamente."
               );
            const json = (await response.json()) as T;
            if (!controller.signal.aborted) setData(json);
         } catch (error) {
            if (!controller.signal.aborted && error instanceof Error) {
               console.log(error);
               setError(error.message);
            }
         } finally {
            if (!controller.signal.aborted) setLoading(false);
         }
      };
      fetchData();

      return () => {
         controller.abort();
      };
   }, [url]);

   return { data, loading, error };
}

export default useFetch;
