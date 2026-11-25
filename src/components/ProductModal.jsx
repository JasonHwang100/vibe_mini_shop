import { useEffect, useState } from 'react'
import '../styles/ProductModal.css'

// 상품 상세 정보를 보여 주는 modal
// product : 보여 줄 상품 (products.js 의 상품 하나)
// onClose : modal 을 닫을 때 부르는 함수
function ProductModal({ product, onClose }) {
  // 고른 수량 (처음에는 1)
  // modal 을 닫으면 이 컴포넌트가 사라지므로, 다시 열면 자동으로 1 부터 시작한다
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    // Esc 키를 누르면 닫기
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    // modal 이 열려 있는 동안 뒤쪽 화면 스크롤 막기
    document.body.style.overflow = 'hidden'

    // modal 이 닫히면 원래대로 되돌리기
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isSoldOut = product.stock === 0

  // - 버튼: 1 이면(또는 품절이면) 누를 수 없다
  const isMinusDisabled = isSoldOut || quantity <= 1
  // + 버튼: 재고 수량에 닿으면(또는 품절이면) 누를 수 없다
  const isPlusDisabled = isSoldOut || quantity >= product.stock

  const decrease = () => setQuantity((current) => Math.max(1, current - 1))
  const increase = () =>
    setQuantity((current) => Math.min(product.stock, current + 1))

  const totalPrice = product.price * quantity

  return (
    // 어두운 배경: 클릭하면 닫기
    <div className="product-modal-backdrop" onClick={onClose}>
      {/* modal 상자 안쪽을 클릭할 때는 닫히지 않도록 클릭이 배경으로 퍼지는 것을 막는다 */}
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        {/* 실제 사진 대신 회색 빈 상자 */}
        <div className="product-modal-image" aria-hidden="true"></div>

        <div className="product-modal-body">
          <p className="product-modal-category">{product.category}</p>
          <h2 id="product-modal-title" className="product-modal-name">
            {product.name}
          </h2>
          <p className="product-modal-price">
            {product.price.toLocaleString('ko-KR')}원
          </p>

          <p className="product-modal-stock">
            {isSoldOut ? (
              <span className="product-modal-soldout">품절</span>
            ) : (
              <>재고 {product.stock}개</>
            )}
          </p>

          <p className="product-modal-description">{product.description}</p>

          {/* 수량 선택: - 버튼, 숫자, + 버튼 (품절이면 전체 비활성) */}
          <div
            className={
              isSoldOut ? 'product-quantity is-disabled' : 'product-quantity'
            }
          >
            <div className="product-quantity-controls">
              <button
                type="button"
                className="product-quantity-button"
                aria-label="수량 줄이기"
                onClick={decrease}
                disabled={isMinusDisabled}
              >
                −
              </button>
              <span className="product-quantity-value" aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                className="product-quantity-button"
                aria-label="수량 늘리기"
                onClick={increase}
                disabled={isPlusDisabled}
              >
                +
              </button>
            </div>

            {isSoldOut ? (
              <p className="product-quantity-soldout">품절된 상품입니다.</p>
            ) : (
              <p className="product-quantity-total">
                합계 {totalPrice.toLocaleString('ko-KR')}원
              </p>
            )}
          </div>

          <button type="button" className="product-modal-close" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
