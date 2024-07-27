export const debounce = <T extends (...args: any[]) => void>(
  callbackFunc: T,
  delay: number
) => {
  let timeoutId: number;
  return function (...args: T[]) {
    // Clear the previous timer
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callbackFunc(...args), delay);
  };
};

export const capitalize = (text: string) => {
  if (!text) return "";
  const word = text[0].toUpperCase() + text.slice(1);
  return word;
};
