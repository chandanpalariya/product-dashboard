export const validateProduct = (product) => {
  const errors = {}

  if (!product.name || product.name.trim() === '') {
    errors.name = 'Product name is required'
  }

  if (!product.price || product.price <= 0) {
    errors.price = 'Price must be greater than 0'
  }

  if (isNaN(product.price)) {
    errors.price = 'Price must be a valid number'
  }

  if (!product.category || product.category.trim() === '') {
    errors.category = 'Category is required'
  }

  if (product.stock !== undefined && product.stock !== null) {
    if (isNaN(product.stock) || product.stock < 0) {
      errors.stock = 'Stock must be a valid number (0 or greater)'
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

