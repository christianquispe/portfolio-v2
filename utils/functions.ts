import { Project } from "../interfaces/me";
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

export const mergeProjectTags = (projects: Project[]): string[] => {
  const tagsMerged: string[] = [];
  const arrtags = [...projects.map((project) => project.tags)];
  arrtags.forEach((tag) => {
    tagsMerged.push(...tag);
  });
  return tagsMerged;
};

export const clearDuplicate = <T>(arr: T[]): T[] => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};
