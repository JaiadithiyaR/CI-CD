import Container from './Container';
import Badge from './Badge';

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div>
          <p className="footer-title">DeployFlow</p>
          <p className="footer-copy">Milestone 1</p>
        </div>
        <div className="footer-badges">
          <Badge tone="soft">React</Badge>
          <Badge tone="soft">Express</Badge>
          <Badge tone="soft">Prepared for Docker</Badge>
          <Badge tone="soft">Prepared for Jenkins</Badge>
          <Badge tone="soft">Prepared for AWS</Badge>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
