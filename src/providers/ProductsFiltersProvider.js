import React, { createContext, useContext, useState } from "react";

const ProductFilterContext = createContext(null);

const defaultState = {
  sizes: [],
  colors: [],
  brands: [],
  genders: [],
  categories: [],
};

const ProductsFiltersProvider = ({ children }) => {
  const [activeFilters, setActiveFilters] = useState(defaultState);

  const applyFilter = (key, cb) => (!!activeFilters[key].length ? cb : true);

  const findByKey = (filtersKey, toMatchKey) =>
    activeFilters[filtersKey].find(
      ({ key }) => key === toMatchKey.toLowerCase()
    );

  const filters = {
    size: (size) => applyFilter("sizes", findByKey("sizes", size)),
    color: (color) => applyFilter("colors", findByKey("colors", color)),
    brand: (brand) => applyFilter("brands", findByKey("brands", brand)),
    gender: (gender) => applyFilter("genders", findByKey("genders", gender)),
    category: (category) =>
      applyFilter("categories", findByKey("categories", category)),
  };

  const handleSetFilters = (key, value) => {
    setActiveFilters((currFilters) => {
      const filterValues = currFilters[key];
      const exists = filterValues.find((v) => v.key === value.key);

      return {
        ...currFilters,
        [key]: exists
          ? filterValues.filter((fv) => fv.key !== value.key)
          : filterValues.concat(value),
      };
    });
  };

  const resetFilters = () => setActiveFilters(defaultState);

  const value = {
    activeFilters,
    filters,
    handleSetFilters,
    resetFilters,
  };

  return (
    <ProductFilterContext.Provider value={value}>
      {children}
    </ProductFilterContext.Provider>
  );
};

const useProductFilter = () => {
  const productFilterContext = useContext(ProductFilterContext);
  if (!productFilterContext) {
    throw new Error("useProductFilter must be within ProductsFiltersProvider");
  }
  return productFilterContext;
};

export { ProductFilterContext, ProductsFiltersProvider, useProductFilter };
