import {useState, useEffect} from "react"
export const useProductData = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      fetch("https://68d33bc4cc7017eec5464ccd.mockapi.io/producth")
    .then((res) => res.json())
    .then((data) => {
      setProduct(data[0]);
      setLoading(false)
    });
    }
    fetchProduct();
  },[])
  return {product, loading};
}
export const getColorProperties = (colorName) => {
  const colorMap = {
    white: { code: '#ffffff', label: 'Trắng' },
    red: { code: '#F30D0D', label: 'Đỏ' },
    black: { code: '#000000', label: 'Đen' },
    blue: { code: '#234896', label: 'Xanh' }
  };
  
  return colorMap[colorName] || { code: '#cccccc', label: colorName };
};