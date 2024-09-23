import { createContext, useState, useEffect } from 'react';

// Création du contexte
const CartContext = createContext();

// Fournisseur du contexte
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // État pour stocker l'utilisateur connecté
  
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  // add to cart
    const context_addToCart = (product) => {
      let productAlreadyInCart = cart.find((item) => item._id === product._id);


      if (productAlreadyInCart) {
        const newCart = cart.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
      }else{
        const newCart = [...cart, { ...product, qty: 1 }];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
      }

    };
    

    const context_removeAll = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // remove from cart
    const context_removeFromCart = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const context_addOne = (product) => {
        const newCart = cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    const context_removeOne = (product) => {
        const newCart = cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
  return (
    <CartContext.Provider value={{ cart, context_addToCart, context_removeFromCart, context_addOne, context_removeOne, context_removeAll }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
