import React, { createContext, useContext, useState, useEffect } from "react";
import useAxios from "axios-hooks";

import { ROUTES } from "../services";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // rename this to cartProducts
  const [productsCount, setProductsCount] = useState(0);

  const [{ data }] = useAxios(ROUTES.CART);

  useEffect(() => {
    if (data && data.length) {
      setProducts(data);
    }
  }, [data]);

  const value = {
    products,
    setProducts,
    productsCount,
    setProductsCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("useCart must be within CartProvider");
  }
  return cartContext;
};

export { CartContext, CartProvider, useCart };
