import HeroBlue from "../components/HeroBlue";
import SectionTitle from '../components/SectionTitle';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import ProductCard from '../components/ProductCard';
import VersionCard from '../components/VersionCard';
import SystemStatusCard from '../components/SystemStatusCard';
import PageContainer from '../components/PageContainer';
import { useHealth } from '../hooks/useHealth';
import { useProducts } from '../hooks/useProducts';
import { useAppMetadata } from '../context/AppMetadataContext';

function Home() {
  const { products, loading: productsLoading, error: productsError, refresh: refreshProducts, lastFetchedAt: productsLastFetchedAt } = useProducts();
  const { health, loading: healthLoading, error: healthError, refresh: refreshHealth, lastFetchedAt: healthLastFetchedAt } = useHealth();
  const { version, loading: versionLoading, error: versionError, refreshVersion } = useAppMetadata();

  return (
    <PageContainer as="div" className="page-stack home-page">
      <HeroBlue />

      <section id="system-status" className="section-block">
        <SectionTitle
          eyebrow="Live API"
          title="System Status"
          description="Live backend health, version metadata, and refresh timing for the local Express service."
        />

        <div className="cards-grid two-up">
          <SystemStatusCard
            health={health}
            loading={healthLoading}
            error={healthError}
            onRetry={refreshHealth}
            lastRefreshedAt={healthLastFetchedAt}
          />
          <VersionCard version={version} loading={versionLoading} error={versionError} onRetry={refreshVersion} />
        </div>
      </section>

      <section id="products" className="section-block">
        <SectionTitle
          eyebrow="Catalog"
          title="Demo Components"
          description="Sample component records served from the backend and rendered with local image assets."
        />

        {productsLoading ? (
          <Loader variant="grid" count={6} />
        ) : productsError ? (
          <ErrorMessage title="Demo components unavailable" message={productsError} actionLabel="Retry demo components" onRetry={refreshProducts} />
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <p className="section-footnote">Last refresh: {productsLastFetchedAt ? new Date(productsLastFetchedAt).toLocaleString() : 'Unavailable'}</p>
      </section>
    </PageContainer>
  );
}

export default Home;
