import { Section } from "./section";

export interface Page {
  pageId: string;
  slug: string;
  title: string;
  sections: Section[];
}
