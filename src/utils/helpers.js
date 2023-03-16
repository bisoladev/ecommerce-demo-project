export const formatPrice = (number) => {
  return Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "NGN",
  }).format(number / 100);
};

export const getUniqueValues = () => {};
