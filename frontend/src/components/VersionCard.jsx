import Card from './Card';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import Badge from './Badge';

function VersionCard({ version, loading, error, onRetry }) {
  if (loading) {
    return (
      <Card className="info-card">
        <Loader count={3} />
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="info-card">
        <ErrorMessage title="Version information unavailable" message={error} actionLabel="Retry version check" onRetry={onRetry} />
      </Card>
    );
  }

  return (
    <Card className="info-card">
      <div className="info-card-header">
        <h2>Version Information</h2>
        <Badge tone="soft">{version?.build || 'development'}</Badge>
      </div>

      <dl className="info-list">
        <div>
          <dt>Application</dt>
          <dd>{version?.application || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Version</dt>
          <dd>{version?.version || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Build</dt>
          <dd>{version?.build || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Commit</dt>
          <dd>{version?.commit || 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Environment</dt>
          <dd>{version?.environment || 'Unavailable'}</dd>
        </div>
      </dl>
    </Card>
  );
}

export default VersionCard;
