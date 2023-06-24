import { create } from 'zustand';
import { getUserCart } from '../../service/apiRequest';

type State = {
  firstName: string;
  lastName: string;
};

type Actions = {
  updateFirstName: (firstName: string) => void;
  updateLastName: (lastName: string) => void;
};

const useUpdate = create<State & Actions>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set({ firstName }),
  updateLastName: (lastName) => set({ lastName }),
}));

export default useUpdate;

export type CartItem = {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  product: {
    name: string;
    description: string;
    image: string;
    id: number;
    price: number;
    user: any;
  };
};

interface CartState {
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
}

export const useCart = create<CartState>((set) => ({
  cartItems: [
    {
      id: 0,
      userId: 0,
      productId: 0,
      quantity: 0,
      product: {
        name: "Nike blazer",
        price: 290,
        description: "Nike blazer...",
        image: "/images/p/p1.png",
        id: 0,
        user: null,
      },
    },
    {
      id: 0,
      userId: 0,
      productId: 0,
      quantity: 0,
      product: {
        name: "Adidas samba",
        price: 290,
        description: "Adidas samba...",
        image: "/images/p/p2.png",
        id: 0,
        user: null,
      },
    },
    {
      id: 0,
      userId: 0,
      productId: 0,
      quantity: 0,
      product: {
        name: "Converse",
        price: 290,
        description: "Converse...",
        image: "/images/p/p3.png",
        id: 0,
        user: null,
      },
    },
    // Add other initial cart items here
  ],
  setCartItems: (cartItems) => set({ cartItems }),
}));

interface CartModalState {
  isShown: boolean;
  setCartModal: (isShown: boolean) => void;
}

export const useCartModal = create<CartModalState>((set) => ({
  isShown: false,
  setCartModal: (isShown) => set({ isShown }),
}));
