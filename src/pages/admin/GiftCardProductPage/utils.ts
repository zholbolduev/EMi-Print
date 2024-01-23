export const generateMockProducts = () => {
  const products = [];
  for (let i = 1; i <= 50; i++) {
    products.push({
      id: i,
      title: `Product ${i}`,
      price: Math.floor(Math.random() * 100) + 1,
      color: ["Red", "Blue", "Green", "Yellow", "Purple"][i % 5],
      isAvailable: i % 2 === 0,
    });
  }
  return products;
};
