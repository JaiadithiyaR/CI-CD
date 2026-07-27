import Button from './Button';
import Badge from './Badge';

function Hero() {
  return (
    <section className="hero-card">
      <div className="hero-content">
        <Badge tone="soft" className="eyebrow">
          Milestone 1
        </Badge>
        <h1>DeployFlow</h1>
        <p>
          An internal engineering demo application with clean React and Express architecture, prepared for future
          deployment milestones without adding infrastructure tooling yet.
        </p>
        <div className="hero-actions">
          <Button as="a" href="/#products">
            View Demo Components
          </Button>
          <Button as="a" href="/#system-status" variant="secondary">
            Check System Status
          </Button>
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-panel-item">
          <span className="stat-label">Stack</span>
          <strong>React 19 + Vite + Express</strong>
        </div>
        <div className="hero-panel-item">
          <span className="stat-label">Data Source</span>
          <strong>Local API data service</strong>
        </div>
        <div className="hero-panel-item">
          <span className="stat-label">Prepared For</span>
          <strong>Future DevOps milestones</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;
