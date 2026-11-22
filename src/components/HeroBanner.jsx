import '../styles/HeroBanner.css'

// 버튼을 누르면 이동할 위치 이름(id).
// 다음에 상품 목록을 만들 때 <section id="product-list"> 로 붙이면 된다.
const PRODUCT_LIST_ID = 'product-list'

function HeroBanner() {
  // HashRouter 는 주소의 # 을 화면 이동에 쓰므로 <a href="#..."> 대신 직접 스크롤한다.
  const handleClick = () => {
    const target = document.getElementById(PRODUCT_LIST_ID)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-banner">
      <h2 className="hero-banner-title">이번 주 새로 들어 온 상품</h2>
      <p className="hero-banner-text">
        작은 가게들이 정성껏 준비한 새 상품을 지금 만나 보세요.
      </p>
      <button type="button" className="hero-banner-button" onClick={handleClick}>
        상품 보러 가기
      </button>
    </section>
  )
}

export default HeroBanner
