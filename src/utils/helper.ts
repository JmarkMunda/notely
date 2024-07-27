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
