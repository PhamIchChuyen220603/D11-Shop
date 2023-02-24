import { createReducer, on } from "@ngrx/store";
import { ItemState } from "../states/item.state";
import * as ItemActions from '../actions/item.action';

const initialState: ItemState = {
    item: [],
    isSuccess: true,
    loading: false,
    error: '',
}

export const itemReducer = createReducer(
    initialState,
    on(ItemActions.getAllItems, (state) => {
        return {
            ...state,
            loading: true,
        }
    }),
    on(ItemActions.getAllItemsSuccess, (state, action) => {
        return{
            ...state,
            item: action.item,
            isSuccess: true,
            loading: false,
        }
    }),
    on(ItemActions.getAllItemsFailure, (state, action) => {
        return{
            ...state,
            item: [],
            loading: false,
            error: action.error,
        }
    }),
);