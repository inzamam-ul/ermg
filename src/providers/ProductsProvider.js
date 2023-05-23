import React, { createContext, useContext, useState } from 'react';

import { VIEW_MODES } from '../constants';

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState('LATEST');
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const [viewMode, setViewMode] = useState(VIEW_MODES.LIST);

  const toTileMode = () => setViewMode(VIEW_MODES.TILE);
  const toListMode = () => setViewMode(VIEW_MODES.LIST);

  const value = {
    sortBy,
    setSortBy,
    cardsPerRow,
    setCardsPerRow,
    viewMode,
    toTileMode,
    toListMode,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const productsContext = useContext(ProductsContext);
  if (!productsContext) {
    throw new Error('useProducts must be within ProductsProvider');
  }
  return productsContext;
};

export { ProductsContext, ProductsProvider, useProducts };
