import { useEffect, useState } from 'react';

import { resolveProductImage } from '../assets/images';
import { getProducts } from '../services/productService';

function enrichProducts(products) {
  return products.map((product) => ({
    ...product,
    imageSrc: resolveProductImage(product.image),
  }));
}

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastFetchedAt, setLastFetchedAt] = useState(null);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function loadProducts() {
      setLoading(true);
      setError('');

      try {
        const data = await getProducts();
        if (isActive) {
          setProducts(enrichProducts(data));
          setLastFetchedAt(new Date().toISOString());
        }
      } catch (requestError) {
        if (isActive) {
          setProducts([]);
          setError('Demo components are unavailable');
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isActive = false;
    };
  }, [refreshToken]);

  function refresh() {
    setRefreshToken((currentValue) => currentValue + 1);
  }

  return {
    products,
    loading,
    error,
    refresh,
    lastFetchedAt,
  };
}