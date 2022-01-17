import { ShirtListObj, PantsListObj } from ".";

export interface ListRes<T extends any[] = any[]> {
  max: number;
  list: T;
}

export interface ShirtRes extends ListRes<ShirtListObj[]> {}

export interface PantsRes extends ListRes<PantsListObj[]> {}
