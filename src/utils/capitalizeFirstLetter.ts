export const capitalizeFirstLetter = (string: string): string => {
  if (string.length === 0) {
    return string;
  }

  const firstLetterIndex = string.search(/[A-Za-z]/);

  if (firstLetterIndex === -1) {
    return string;
  }

  const firstLetter = string[firstLetterIndex].toUpperCase(); 
  const restOfString = string.slice(firstLetterIndex + 1);

  return firstLetter + restOfString; 
}
