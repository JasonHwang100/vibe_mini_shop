import { useState } from 'react'
import '../styles/TopBanner.css'

// 브라우저(localStorage)에 '닫은 날짜'를 기억할 때 쓰는 이름
const STORAGE_KEY = 'topBannerClosedDate'

// 오늘 날짜를 '2026-11-25' 같은 글자로 만들기 (내 컴퓨터 시간 기준)
function getToday() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

// 오늘 이미 닫았는지 확인하기
// (개인정보 보호 모드 등에서 localStorage 를 못 쓰면 그냥 보여 준다)
function isClosedToday() {
  try {
    return localStorage.getItem(STORAGE_KEY) === getToday()
  } catch {
    return false
  }
}

function TopBanner() {
  // 띠배너가 보이는지 (처음에는 보임, 단 오늘 닫았으면 숨김)
  const [isVisible, setIsVisible] = useState(() => !isClosedToday())

  const closeBanner = () => {
    setIsVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, getToday())
    } catch {
      // 저장을 못 해도 지금 화면에서는 닫힌다
    }
  }

  // 숨김 상태면 아무것도 그리지 않아서 header 가 맨 위로 붙는다
  if (!isVisible) return null

  return (
    <div className="top-banner">
      <p className="top-banner-text">첫 주문 10% 할인</p>
      <button
        type="button"
        className="top-banner-close"
        aria-label="띠배너 닫기"
        onClick={closeBanner}
      >
        ×
      </button>
    </div>
  )
}

export default TopBanner
