const API_URL = 'https://68ca0095ceef5a150f668d31.mockapi.io/product';

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Vui lòng kiểm tra lại mạng');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};