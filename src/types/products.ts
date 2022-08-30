export interface IColorItem {
  code: string;
  id: number;
  title: string;
}

export interface IFileItem {
  extension: string;
  name: string;
  originalName: string;
  size: string;
  url: string;
}

export interface IGallery {
  file: IFileItem;
}

export interface IColor {
  color: IColorItem;
  gallery: IGallery[];
  id: number;
}

export interface IMaterial {
  code: string;
  id: number;
  productsCount: number;
  title: string;
}

export interface ISeason {
  code: string;
  id: number;
  productsCount: number;
  title: string;
}

export interface IProduct {
  id: number;
  colors: IColor[];
  materials: IMaterial[];
  price: number;
  seasons: ISeason[];
  slug: string;
  title: string;
}
