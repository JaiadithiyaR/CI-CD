import { useMemo } from 'react';

import Badge from './Badge';
import Card from './Card';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import StatusBadge from './StatusBadge';

function formatTimestamp(timestamp) {
  if (!timestamp) {
    return 'Unavailable';
  }

  return new Date(timestamp).toLocaleString();
}

function SystemStatusCard({ health, loading, error, onRetry, lastRefreshedAt }) {
  const currentTime = useMemo(() => new Date().toLocaleString(), [loading, health, error, lastRefreshedAt]);

  if (loading) {
    return (
      <Card className="info-card info-card-system">
        <Loader count={4} />
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="info-card info-card-system">
        <ErrorMessage title="System status unavailable" message={error} actionLabel="Retry status check" onRetry={onRetry} />
      </Card>
    );
  }

  const isHealthy = health?.status === 'UP';

  return (
    <Card className="info-card info-card-system">
      <div className="info-card-header">
        <h2>Backend Status</h2>
        <StatusBadge status={health?.status} />
      </div>

      <dl className="info-list">
        <div>
          <dt>Application</dt>
          <dd>{health?.application || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Environment</dt>
          <dd>{health?.environment || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Application Version</dt>
          <dd>{health?.version || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Current Build</dt>
          <dd>{health?.build || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Current Time</dt>
          <dd>{currentTime}</dd>
        </div>
        <div>
          <dt>Server Time</dt>
          <dd>{formatTimestamp(health?.timestamp)}</dd>
        </div>
        <div>
          <dt>Last API Refresh</dt>
          <dd>{formatTimestamp(lastRefreshedAt)}</dd>
        </div>
        <div>
          <dt>Node Version</dt>
          <dd>{health?.node || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Uptime</dt>
          <dd>{health?.uptime || 'Unavailable'}</dd>
        </div>
      </dl>
      <div className="card-footer-note">
        <Badge tone="soft">Auto refreshes every 30 seconds</Badge>
      </div>
    </Card>
  );
}

export default SystemStatusCard;