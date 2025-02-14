import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definição do tipo de um item no carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  subtotal: number;
}

// Estado inicial do carrinho
interface CartState {
  items: CartItem[];
  totalPrice: number;
  subtotalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  subtotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "subtotal">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          subtotal: action.payload.price * action.payload.quantity,
        });
      }
      cartSlice.caseReducers.calculateTotals(state);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      cartSlice.caseReducers.calculateTotals(state);
    },

    addQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.subtotal = item.price * item.quantity;
      }
      cartSlice.caseReducers.calculateTotals(state);
    },

    removeQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.subtotal = item.price * item.quantity;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
      cartSlice.caseReducers.calculateTotals(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.subtotalPrice = 0;
    },

    calculateTotals: (state) => {
      state.subtotalPrice = state.items.reduce(
        (subtotal, item) => subtotal + item.subtotal,
        0
      );
      state.totalPrice = state.subtotalPrice; // Se houver taxas ou descontos, podemos modificar aqui no futuro
    },
  },
});
// Exportando as ações e o reducer
export const { addItem, removeItem, clearCart, addQuantity, removeQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
