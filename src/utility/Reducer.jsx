import { type } from "./Action.type";
export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET:
      // return {
      //   ...state,
      //   basket: [...state.basket, action.item],
    // };
      
    // check if item is already in basket
      const itemInBasket = state.basket.find((item) => item.id === action.item.id);
      
      if (!itemInBasket) {
        return {
          ...state,
          basket: [...state.basket, {...action.item, amount: 1}]
        };
      } else {
        const newBasket = state.basket.map((item) => {
         return item.id === action.item.id ? {...item, amount: item.amount + 1} : item
        })
        return {
          ...state,
          basket: newBasket
        }
      }
    case type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        item => item.id === action.id
      )
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {...newBasket[index], amount: newBasket[index].amount - 1}
        } else {
          newBasket.splice(index, 1)
        }
      }
      return {
        ...state,
        basket: newBasket
      }
    default:
      return state;
  }
};

// const [state, dispatch] = useReducer(reducer, initialState);


