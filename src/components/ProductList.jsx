import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import '../styles/ProductList.css'

function ProductList() {
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
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList
