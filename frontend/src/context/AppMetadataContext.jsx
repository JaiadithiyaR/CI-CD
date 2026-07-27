import { createContext, useContext, useMemo } from 'react';

import { useVersion } from '../hooks/useVersion';

const AppMetadataContext = createContext(null);

export function AppMetadataProvider({ children }) {
  const { version, loading, error, refresh, lastFetchedAt } = useVersion();

  const value = useMemo(
    () => ({
      application: version?.application || 'DeployFlow',
      version,
      loading,
      error,
      refreshVersion: refresh,
      lastFetchedAt,
    }),
    [version, loading, error, refresh, lastFetchedAt]
  );

  return <AppMetadataContext.Provider value={value}>{children}</AppMetadataContext.Provider>;
}

export function useAppMetadata() {
  const context = useContext(AppMetadataContext);

  if (!context) {
    throw new Error('useAppMetadata must be used within AppMetadataProvider');
  }

  return context;
}