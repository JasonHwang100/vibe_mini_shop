import { useCallback, useEffect, useState } from 'react'
import TopBanner from '../components/TopBanner.jsx'
import Header from '../components/Header.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import ProductList from '../components/ProductList.jsx'
import UsageGuide from '../components/UsageGuide.jsx'
import Faq from '../components/Faq.jsx'
import '../styles/Home.css'

// 브라우저(localStorage)에 찜 목록을 저장할 때 쓰는 이름
const WISH_STORAGE_KEY = 'mini-shop-wish-ids'

// 처음 화면을 열 때 브라우저에 저장된 찜 목록(상품 id 배열)을 꺼낸다
// (저장된 값이 없거나 읽을 수 없으면 빈 배열 = 모두 ♡)
function loadWishIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(WISH_STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

function Home() {
  // 찜한 상품의 id 목록: Header(개수)와 상품 card(하트)가 함께 쓴다
  const [wishIds, setWishIds] = useState(loadWishIds)

  // 찜 목록이 바뀔 때마다 브라우저에 저장 → 새로고침해도 남는다
  useEffect(() => {
    try {
      localStorage.setItem(WISH_STORAGE_KEY, JSON.stringify(wishIds))
    } catch {
      // 저장이 막힌 브라우저(사생활 보호 모드 등)에서는 저장만 건너뛴다
    }
  }, [wishIds])

  // 하트를 누르면: 찜 목록에 있으면 빼고, 없으면 넣는다
  const toggleWish = useCallback((id) => {
    setWishIds((prev) =>
      prev.includes(id) ? prev.filter((wishId) => wishId !== id) : [...prev, id],
    )
  }, [])

  return (
    <>
      {/* 띠배너와 Header 를 함께 화면 위에 고정 */}
      <div className="site-top">
        <TopBanner />
        <Header wishCount={wishIds.length} />
      </div>
      <HeroBanner />
      <ProductList wishIds={wishIds} onToggleWish={toggleWish} />
      <UsageGuide />
      <Faq />
    </>
  )
}

export default Home
