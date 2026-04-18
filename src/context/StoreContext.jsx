import { createContext, useContext, useReducer, useEffect } from 'react';

const StoreContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem('aura-cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('aura-wishlist') || '[]'),
  searchQuery: '',
  isSearchOpen: false,
  toast: null
};

function storeReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find(
        i => i.id === action.payload.id && i.size === action.payload.size
      );
      const cart = existing
        ? state.cart.map(i =>
            i.id === action.payload.id && i.size === action.payload.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];
      return { ...state, cart, toast: { message: `${action.payload.name} added to bag`, type: 'success' } };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          i => !(i.id === action.payload.id && i.size === action.payload.size)
        )
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.payload.id && i.size === action.payload.size
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i
        )
      };
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.some(i => i.id === action.payload.id);
      const wishlist = exists
        ? state.wishlist.filter(i => i.id !== action.payload.id)
        : [...state.wishlist, action.payload];
      const msg = exists ? `Removed from wishlist` : `${action.payload.name} saved`;
      return { ...state, wishlist, toast: { message: msg, type: 'info' } };
    }
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'TOGGLE_SEARCH':
      return { ...state, isSearchOpen: !state.isSearchOpen };
    case 'CLEAR_TOAST':
      return { ...state, toast: null };
    case 'CLEAR_CART':
      return { ...state, cart: [], toast: { message: 'Order placed successfully!', type: 'success' } };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
    localStorage.setItem('aura-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem('aura-wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  useEffect(() => {
    if (state.toast) {
      const timer = setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.toast]);

  const cartTotal = state.cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const cartCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <StoreContext.Provider value={{ state, dispatch, cartTotal, cartCount }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
