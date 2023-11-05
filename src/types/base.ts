import { PERSIAN_MONTHS } from "src/utils/dates";

export interface ContentPair<T> {
  content: string;
  data: T;
}

export interface WithId {
  id: string;
}

export type PersianMonth = (typeof PERSIAN_MONTHS)[number];

export const LEVELS = ["0", "1", "2", "3"] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_TITLES = ["تیزر", "مقدماتی", "متوسط", "پیشرفته"];

export interface IApiList<T> {
  count: number;
  values: Array<T>;
}
