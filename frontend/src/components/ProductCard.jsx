import Badge from './Badge';
import Card from './Card';

function ProductCard({ product }) {
  return (
    <Card className="product-card">
      <div className="product-image-wrap">
        <img src={product.imageSrc || product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-card-body">
        <div className="product-card-topline">
          <Badge tone="soft">{product.category}</Badge>
          <Badge tone="accent">{product.rating} / 5</Badge>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-meta">
          <span className="price">${product.price.toLocaleString()}</span>
          <Badge tone={product.stock === 'In Stock' ? 'success' : 'accent'}>{product.stock}</Badge>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
