function ProductTable({ products, onEdit, editingId }) {
  const handleEditClick = (product) => {
    onEdit(product)
  }

  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty-state">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.category}</td>
                <td>
                  <span className={product.stock > 10 ? 'in-stock' : 'low-stock'}>
                    {product.stock ?? 'N/A'}
                  </span>
                </td>
                <td className="description-cell">
                  {product.description || '-'}
                </td>
                <td>
                  <button
                    onClick={() => handleEditClick(product)}
                    className="btn btn-sm btn-edit"
                    disabled={editingId === product.id}
                  >
                    {editingId === product.id ? 'Editing...' : 'Edit'}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable

