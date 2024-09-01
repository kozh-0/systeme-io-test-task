export const isDateValid = (dateStr: string) => !isNaN(new Date(dateStr).getTime());

export const capitalizeFirstLetter = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
