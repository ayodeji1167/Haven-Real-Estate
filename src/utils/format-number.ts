export const conveneNumber = (number: any) => {
  if (!number) {
    return 0;
  }
  return number;
};

export function numberWithCommas(x: any) {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export default conveneNumber;

export function formattedValue(inputValue: any) {
  const nairaSymbol = '₦';
  if (!inputValue) return '';
  const numericValue = String(inputValue).replace(/[^\d]/g, '');
  const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${nairaSymbol}${formattedValue}`;
}
