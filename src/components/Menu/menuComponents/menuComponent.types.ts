// import {StationType} from '../../../store/stations'
export enum MenuContentCardEnumType {
  discover = "DISCOVER",
  settings = "SETTINGS",
  about = "ABOUT",
  countries = "COUNTRIES",
}
export interface MenuContentCardType {
  type: MenuContentCardEnumType;
  active: boolean;
  onClick?: () => void;
}

export interface MenuContentListPropTypes {
  data: any[];
  title: string;
}

export interface MenuDropdownPropType {
  country?: string;
  flag?: string;
  city?: string;
}
