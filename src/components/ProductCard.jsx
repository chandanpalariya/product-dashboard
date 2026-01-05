function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="card-header">
        <h3 className="card-title">{product.name}</h3>
        <span className="card-category">{product.category}</span>
      </div>
      <div className="card-body">
        <div className="card-price">${product.price.toFixed(2)}</div>
        {product.description && (
          <p className="card-description">{product.description}</p>
        )}
        <div className="card-stock">
          Stock: <span className={product.stock > 10 ? 'in-stock' : 'low-stock'}>{product.stock ?? 'N/A'}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

