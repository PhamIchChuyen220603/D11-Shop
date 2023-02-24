import { item } from "src/models/item.model";

export interface ItemState{
    item: item[];
    isSuccess: boolean;
    loading: boolean;
    error: string;
}