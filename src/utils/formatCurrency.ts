export const FormatCurrency = (value: string) => {
  // Remove non-digit characters
  const numericValue = value.replace(/\D/g, "");

  // Format currency with BRL mask
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(numericValue) / 100);

  return formattedValue;
};
