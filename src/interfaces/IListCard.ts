import { StaticImageData } from "next/image";

export interface IListCard {
  id?: number;
  image?: StaticImageData;
  title?: string;
  className?: string;
  description?: string;
  btnTitle?: string;
  btnClassName?: string;
  secondBtn?: boolean;
  loginAs?: boolean;
  management?: boolean;
  firstBtnLink: string;
  btnTitle1: string;
  secondBtnLink: string;
  thirdBtnLink: string;
  subElementClassName?: string;
  titleClassName?: string;
  AdminNamesAndRoles?: string;
  formInputScreen?: boolean;
  cardItemsScreen?: boolean;
}

export interface IListCardData {
  id: number;
  title?: string;
  image?: StaticImageData;
  description?: string;
}

export interface IListCardArray extends Array<IListCardData> {}
