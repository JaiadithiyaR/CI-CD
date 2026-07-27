import { useEffect, useState } from 'react';

import { getHealth } from '../services/systemService';

export function useHealth() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastFetchedAt, setLastFetchedAt] = useState(null);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    let isActive = true;
    let intervalId = null;

    async function loadHealth() {
      setError('');

      try {
        const data = await getHealth();
        if (isActive) {
          setHealth(data);
          setLastFetchedAt(new Date().toISOString());
        }
      } catch (requestError) {
        if (isActive) {
          setHealth(null);
          setError('Backend status is unavailable');
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadHealth();
    intervalId = setInterval(() => {
      if (isActive) {
        setRefreshToken((currentValue) => currentValue + 1);
      }
    }, 30000);

    return () => {
      isActive = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [refreshToken]);

  function refresh() {
    setRefreshToken((currentValue) => currentValue + 1);
  }

  return {
    health,
    loading,
    error,
    refresh,
    lastFetchedAt,
  };
}