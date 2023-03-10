export interface ItemInterface {
  name: string;
  capital: string;
  subregion: string;
  population: number;
  area: number;
  nativeName: string;
  flag: string;
  wishlist?: boolean;
  action?: (name: string) => void;
}
