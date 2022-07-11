export const getDateByISO = (date: string) => {
  return date.substring(0, 10);
};

export const validateDate = (date: string): boolean => {
  const [y] = date.split("-");
  if (y.length !== 4) {
    return false;
  }
  return true;
};

export const orderByDate = (arr: any[]) => {
  return arr.sort(
    (prev: any, current: any): number =>
      new Date(prev.date).valueOf() - new Date(current.date).valueOf()
  );
};
