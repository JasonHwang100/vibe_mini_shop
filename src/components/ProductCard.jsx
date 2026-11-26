import '../styles/ProductCard.css'

// onClick : 카드를 눌렀을 때 부르는 함수 (상세 modal 열기)
// stock   : 재고 수량 (0 이면 '품절' badge 표시)
// isWished     : 찜했는지 여부 (true 면 ♥, false 면 ♡)
// onToggleWish : 하트를 눌렀을 때 부르는 함수
function ProductCard({ name, price, stock, isWished, onToggleWish, onClick }) {
  // 하트를 눌렀을 때: card 의 클릭으로 번지지 않게 막아서 modal 이 열리지 않게 한다
  const handleWishClick = (event) => {
    event.stopPropagation()
    onToggleWish()
  }

  // 하트에서 Enter / Space 를 눌러도 card 의 modal 열기로 번지지 않게 한다
  const handleWishKeyDown = (event) => {
    event.stopPropagation()
  }

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
      <div className="product-card-image-wrap">
        <div className="product-card-image" aria-hidden="true"></div>
        {stock === 0 && <span className="product-card-badge">품절</span>}
        {/* 찜(하트) 버튼: 사진 오른쪽 위 */}
        <button
          type="button"
          className={isWished ? 'product-card-wish is-wished' : 'product-card-wish'}
          aria-label={isWished ? `${name} 찜 해제` : `${name} 찜하기`}
          aria-pressed={isWished}
          onClick={handleWishClick}
          onKeyDown={handleWishKeyDown}
        >
          {isWished ? '♥' : '♡'}
        </button>
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{name}</h3>
        <p className="product-card-price">{price.toLocaleString('ko-KR')}원</p>
      </div>
    </article>
  )
}

export default ProductCard
