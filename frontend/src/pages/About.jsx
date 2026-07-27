import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Badge from '../components/Badge';

function About() {
  return (
    <PageContainer as="section" className="content-card narrow about-card">
      <SectionTitle
        eyebrow="About"
        title="Why this project exists"
        description="DeployFlow is an internal DevOps demonstration app, not an e-commerce site. The current milestone is focused on clean local architecture and stable API contracts."
      />

      <Card className="about-copy-card">
        <p>
          The application is intentionally lightweight so future Docker, Jenkins, AWS, and deployment automation work
          can be added without reworking the foundation. The frontend stays presentation-only, while the backend owns
          data access, validation, and response shaping.
        </p>
        <p>
          This milestone standardizes naming, improves separation of concerns, and keeps the UI recognizable while
          removing store-oriented language from the product experience.
        </p>
      </Card>

      <div className="about-grid">
        <Card>
          <Badge tone="soft">Purpose</Badge>
          <h2>DevOps showcase baseline</h2>
          <p>Provide a local application that later supports containerization, orchestration, and deployment drills.</p>
        </Card>
        <Card>
          <Badge tone="soft">Architecture</Badge>
          <h2>Clean separation of concerns</h2>
          <p>Controllers coordinate requests, services hold business logic, and reusable UI primitives keep the frontend consistent.</p>
        </Card>
        <Card>
          <Badge tone="soft">Current Milestone</Badge>
          <h2>Production polish</h2>
          <p>Refined naming, shared components, response envelopes, and operational metadata without adding new features.</p>
        </Card>
        <Card>
          <Badge tone="soft">Upcoming Milestones</Badge>
          <h2>Delivery automation</h2>
          <p>Docker, Docker Compose, Jenkins, GitHub Webhooks, AWS EC2, Nginx, health checks, rollback, and blue-green deployment.</p>
        </Card>
      </div>
    </PageContainer>
  );
}

export default About;
