function Loader({ variant = 'card', count = 1 }) {
  if (variant === 'grid') {
    return (
      <div className="product-grid skeleton-grid">
        {Array.from({ length: count }).map((_, index) => (
          <div className="card skeleton-card" key={`loader-${index}`}>
            <div className="skeleton skeleton-media" />
            <div className="skeleton-card-body">
              <div className="skeleton skeleton-line skeleton-title" />
              <div className="skeleton skeleton-line skeleton-chip" />
              <div className="skeleton skeleton-line skeleton-copy" />
              <div className="skeleton skeleton-line skeleton-copy short" />
              <div className="skeleton-footer">
                <div className="skeleton skeleton-line skeleton-price" />
                <div className="skeleton skeleton-line skeleton-pill" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="loader-card">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton skeleton-line" key={`loader-line-${index}`} />
      ))}
    </div>
  );
}

export default Loader;