import { useState, useMemo } from 'react'
import { initialProducts } from './data/dummyProducts'
import { useDebounce } from './hooks/useDebounce'
import ProductTable from './components/ProductTable'
import ProductCard from './components/ProductCard'
import ProductForm from './components/ProductForm'
import Pagination from './components/Pagination'
import ViewToggle from './components/ViewToggle'
import './App.css'

const ITEMS_PER_PAGE = 6

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [searchQuery, setSearchQuery] = useState('')
  const [view, setView] = useState('list')
  const [currentPage, setCurrentPage] = useState(1)
  const [editingProduct, setEditingProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const debouncedSearch = useDebounce(searchQuery, 500)

  const filteredProducts = useMemo(() => {
    if (!debouncedSearch.trim()) {
      return products
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
  }, [products, debouncedSearch])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const handleViewChange = (newView) => {
    setView(newView)
    if (newView === 'card') {
      setEditingProduct(null)
      setShowForm(false)
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAddProduct = () => {
    setEditingProduct(null)
    setShowForm(true)
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  const handleFormSubmit = (productData) => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? { ...p, ...productData } : p))
      )
    } else {
      const newProduct = {
        ...productData,
        id: Date.now(),
      }
      setProducts((prev) => [...prev, newProduct])
    }
    setShowForm(false)
    setEditingProduct(null)
    setCurrentPage(1)
  }

  const handleCancelEdit = () => {
    setShowForm(false)
    setEditingProduct(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Product Dashboard</h1>
        <p className="subtitle">Manage your products efficiently</p>
      </header>

      <div className="app-content">
        <div className="controls-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products by name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          <div className="controls-right">
            <ViewToggle view={view} onViewChange={handleViewChange} />
            {view === 'list' && (
              <button onClick={handleAddProduct} className="btn btn-primary">
                Add Product
              </button>
            )}
          </div>
        </div>

        {showForm && view === 'list' && (
          <div className="form-section">
            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <ProductForm
              product={editingProduct}
              onSubmit={handleFormSubmit}
              onCancel={handleCancelEdit}
            />
          </div>
        )}

        {view === 'list' && (
          <>
            <ProductTable
              products={paginatedProducts}
              onEdit={handleEditProduct}
              editingId={editingProduct?.id}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {view === 'card' && (
          <>
            <div className="products-grid">
              {paginatedProducts.length === 0 ? (
                <div className="empty-state">No products found</div>
              ) : (
                paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default App
