import { useCallback, useState } from 'react'
import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import ProductModal from './ProductModal.jsx'
import '../styles/ProductList.css'

// 카테고리 select 의 선택지
const CATEGORIES = ['전체', '생활', '주방', '문구']

function ProductList() {
  // 지금 modal 로 보고 있는 상품 (null 이면 modal 닫힘)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // 지금 고른 카테고리 ('전체' 이면 모든 상품)
  const [category, setCategory] = useState('전체')

  const closeModal = useCallback(() => setSelectedProduct(null), [])

  // 고른 카테고리에 맞는 상품만 남기기
  const visibleProducts =
    category === '전체'
      ? products
      : products.filter((product) => product.category === category)

  return (
    // id="product-list" : Hero Banner 의 '상품 보러 가기' 버튼이 이동하는 위치
    <section id="product-list" className="product-list">
      <h2 className="product-list-title">상품 목록</h2>

      {/* 카테고리 선택 */}
      <div className="product-filter">
        <label htmlFor="category-select" className="product-filter-label">
          카테고리
        </label>
        <select
          id="category-select"
          className="product-filter-select"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {CATEGORIES.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
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
