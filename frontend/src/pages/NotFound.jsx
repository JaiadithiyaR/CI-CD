import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';

function NotFound() {
  return (
    <PageContainer as="section" className="content-card narrow center-content not-found-card">
      <Card className="not-found-copy">
        <Badge tone="soft">404</Badge>
        <h1>Page not found</h1>
        <p>The route you requested does not exist in this local application.</p>
      </Card>
      <Button as={Link} to="/">
        Return Home
      </Button>
    </PageContainer>
  );
}

export default NotFound;
