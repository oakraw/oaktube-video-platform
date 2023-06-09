export const shortenNumber = (number: number): string => {
  const absValue = Math.abs(number);

  if (absValue >= 1e6) {
    return (number / 1e6).toFixed(1) + "M";
  } else if (absValue >= 1e3) {
    return (number / 1e3).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};
