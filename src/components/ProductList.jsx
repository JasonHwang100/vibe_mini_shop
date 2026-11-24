import { useCallback, useState } from 'react'
import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import ProductModal from './ProductModal.jsx'
import '../styles/ProductList.css'

function ProductList() {
  // 지금 modal 로 보고 있는 상품 (null 이면 modal 닫힘)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const closeModal = useCallback(() => setSelectedProduct(null), [])

  return (
    // id="product-list" : Hero Banner 의 '상품 보러 가기' 버튼이 이동하는 위치
    <section id="product-list" className="product-list">
      <h2 className="product-list-title">상품 목록</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  )
}

export default ProductList
