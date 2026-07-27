import Button from './Button';

function ErrorMessage({ title = 'Request failed', message, actionLabel = 'Try Again', onRetry }) {
  return (
    <div className="error-state">
      <div>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      {onRetry ? (
        <Button type="button" variant="secondary" onClick={onRetry}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}

export default ErrorMessage;