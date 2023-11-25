export function calculateRatio(
   value1: number | undefined,
   value2: number | undefined
) {
   if (!value1 || !value2) return "-";
   const ratio = (value1 / value2).toFixed(2);
   return ratio;
}

export function formatNumber(value: number | undefined) {
   if (!value) return "-";
   return value.toLocaleString("pt-BR");
}

export function extractSymbol(symbol: string) {
   const regex = /[^A-Za-z0-9&[\]]/;
   const match = symbol.match(regex);

   if (match) return match[0];
   else return null;
}
