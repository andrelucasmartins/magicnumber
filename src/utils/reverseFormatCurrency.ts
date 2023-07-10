const exp = /^\w{0,3}\W?\s?(\d+)[.,](\d+)?,?(\d+)?$/g;
const replacer = (f: any, group1: string, group2: string, group3: string) => {
  return group3 ? `${group1}${group2}.${group3}` : `${group1}.${group2}`;
};

export const ReverseCurrencyNumbered = (value: string) => {
  const brl = value.replace(exp, replacer);

  return parseFloat(brl);
};
