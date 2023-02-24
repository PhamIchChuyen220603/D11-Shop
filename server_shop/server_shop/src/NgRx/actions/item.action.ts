import { createAction, props } from "@ngrx/store";
import { item } from "src/models/item.model";

export const getAllItems = createAction(
    '[Item] Get All Items',
);

export const getAllItemsSuccess = createAction(
    '[Item] Get All Items Success',
    props<{ item: item[]}>()
);

export const getAllItemsFailure = createAction(
    '[Item] Get All Items Failure',
    props<{ error: string }>()
);