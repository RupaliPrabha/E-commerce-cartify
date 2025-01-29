//For Add the Item to Cart

export const addCart = (product) => {
  return {
    type: "AddItem",
    payload: product,
  };
};


//For Delete the Item to Cart

export const delCart = (product) => {
    return {
      type: "DelItem",
      payload: product,
    };
  };
