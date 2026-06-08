import { Plan } from "./plan";

export type Service = {
  id: number;
  name: string;
  category: string;
  url: string;
  plans: Plan[];
};
