import Item from "../common/Item";
import State from "../common/State";
import { Actions, ActionTypes } from "./actions";

export const initialState = JSON.parse(
  localStorage.getItem("items") || '{"data":[]}'
);

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionTypes.addItem:
      return {
        data: [...state.data, action.payload],
      };

    case ActionTypes.updateItem: {
      const foundCompanyIdx = state.data.findIndex(
        (s) => s.id === action.payload.id
      );
      const data = [...state.data];
      if (action.payload.ability > 100) action.payload.ability = 100;
      if (action.payload.vision > 100) action.payload.vision = 100;
      if (action.payload.ability < 0) action.payload.ability = 0;
      if (action.payload.vision < 0) action.payload.vision = 0;
      data[foundCompanyIdx] = action.payload;

      return { ...state, data };
    }

    case ActionTypes.deleteItem:
      return {
        data: state.data.filter((item: Item) => item.id !== action.payload),
      };

    default:
      throw new Error();
  }
};

export default reducer;
