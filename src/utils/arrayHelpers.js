const filterArray = (array, filters) => {
  return array.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (typeof filters[key] !== "function") {
        throw new Error(
          `${filters[key]} is not a function. Each filter must be a function.`
        );
      }

      return filters[key](item[key]);
    });
  });
};

export { filterArray };
