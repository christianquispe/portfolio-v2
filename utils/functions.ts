export const orderByDate = (prev: any, current: any): number => {
  return new Date(prev.date).valueOf() - new Date(current.date).valueOf();
};
