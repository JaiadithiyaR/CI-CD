import { useEffect, useState } from 'react';

import { getVersion } from '../services/systemService';

export function useVersion() {
  const [version, setVersion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastFetchedAt, setLastFetchedAt] = useState(null);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    let isActive = true;
    let intervalId = null;

    async function loadVersion() {
      setError('');

      try {
        const data = await getVersion();
        if (isActive) {
          setVersion(data);
          setLastFetchedAt(new Date().toISOString());
        }
      } catch (requestError) {
        if (isActive) {
          setVersion(null);
          setError('Version metadata is unavailable');
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadVersion();
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
    version,
    loading,
    error,
    refresh,
    lastFetchedAt,
  };
}