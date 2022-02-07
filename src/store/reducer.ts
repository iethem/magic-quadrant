import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./constants";

export const initialState = JSON.parse(
  localStorage.getItem("items") || '{"data":[]}'
);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        data: [...state.data, action.item],
      };

    case UPDATE_ITEM: {
      const foundCompanyIdx = state.data.findIndex(
        (s: any) => s.id === action.item.id
      );
      const data = [...state.data];
      if (action.item.ability > 100) action.item.ability = 100;
      if (action.item.vision > 100) action.item.vision = 100;
      if (action.item.ability < 0) action.item.ability = 0;
      if (action.item.vision < 0) action.item.vision = 0;
      data[foundCompanyIdx] = action.item;

      return { ...state, data };
    }

    case DELETE_ITEM:
      return {
        data: state.data.filter((item: any) => item.id !== action.itemId),
      };

    default:
      throw new Error();
  }
};

export default reducer;
