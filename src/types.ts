export interface ServiceItem {
  name: string;
  desc: string;
}

export interface ServiceCategory {
  num: string;
  title: string;
  blurb: string;
  /** Short chips shown in the homepage preview. */
  preview: string[];
  /** Count of additional services beyond the preview chips. */
  more: number;
  /** Full service list shown on the Services page. */
  items: ServiceItem[];
}

export interface ValueProp {
  num: string;
  title: string;
  desc: string;
}

export interface CompanyValue {
  num: string;
  title: string;
  desc: string;
}

export interface OfficeLocation {
  label: string;
  city: string;
  line1: string;
  line2: string;
}

export interface JobRole {
  title: string;
  type: string;
  blurb: string;
}

export interface Benefit {
  title: string;
  desc: string;
}
