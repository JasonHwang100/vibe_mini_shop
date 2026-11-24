import '../styles/ProductCard.css'

// onClick : 카드를 눌렀을 때 부르는 함수 (상세 modal 열기)
function ProductCard({ name, price, onClick }) {
  // 키보드 사용자도 Enter / Space 로 카드를 열 수 있게 한다
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <article
      className="product-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {/* 실제 사진 대신 회색 빈 상자 */}
      <div className="product-card-image" aria-hidden="true"></div>
      <div className="product-card-body">
        <h3 className="product-card-name">{name}</h3>
        <p className="product-card-price">{price.toLocaleString('ko-KR')}원</p>
      </div>
    </article>
  )
}

export default ProductCard
