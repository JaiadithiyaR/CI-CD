import Badge from './Badge';

function StatusBadge({ status, className = '' }) {
  const tone = status === 'UP' ? 'success' : status === 'DOWN' ? 'danger' : 'neutral';

  return (
    <Badge tone={tone} className={`status-badge ${className}`.trim()}>
      {status}
    </Badge>
  );
}

export default StatusBadge;