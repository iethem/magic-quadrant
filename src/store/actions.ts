import Item from "../common/Item";

export enum ActionTypes {
  addItem,
  updateItem,
  deleteItem,
}

export interface AddItem {
  type: ActionTypes.addItem;
  payload: Item;
}

export interface UpdateItem {
  type: ActionTypes.updateItem;
  payload: Item;
}

export interface DeleteItem {
  type: ActionTypes.deleteItem;
  payload: number;
}

export type Actions = AddItem | DeleteItem | UpdateItem;

export function addItem(payload: Item): AddItem {
  return { type: ActionTypes.addItem, payload } as AddItem;
}

export function updateItem(payload: Item): UpdateItem {
  return { type: ActionTypes.updateItem, payload } as UpdateItem;
}

export function deleteItem(payload: number): DeleteItem {
  return { type: ActionTypes.deleteItem, payload } as DeleteItem;
}
