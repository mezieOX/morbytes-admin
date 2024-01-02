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
  secondBtnLink: string;
  thirdBtnLink: string;
  subElementClassName?: string;
  titleClassName?: string;
  AdminNamesAndRoles?: string;
  formInputScreen?: boolean;
  cardItemsScreen?: boolean;
  data: {
    id: number;
    title?: string;
    image?: StaticImageData;
    description?: string;
  };
}
