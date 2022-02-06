import { Item } from "../common/Item";
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./constants";

export const addItem = (item: Item) => ({ type: ADD_ITEM, item });
export const updateItem = (item: Item) => ({ type: UPDATE_ITEM, item });
export const deleteItem = (itemId: Item) => ({ type: DELETE_ITEM, itemId });
