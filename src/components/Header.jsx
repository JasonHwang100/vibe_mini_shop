import { useState } from 'react'
import '../styles/Header.css'

// 메뉴 화면은 아직 없어서, 눌러도 이동하지 않는 버튼으로 둔다.
const menus = ['상품 목록', '주문하기', '관리자']

function Header() {
  // 좁은 화면에서 메뉴가 펼쳐졌는지 여부
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      {/* 아래 영역들과 같은 폭(1080px)에 맞추는 안쪽 상자 */}
      <div className="header-inner">
        <div className="header-logo">미니 쇼핑몰</div>

        {/* 메뉴 아이콘: 좁은 화면에서만 보인다 */}
        <button
          type="button"
          className="header-menu-toggle"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
          aria-controls="header-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="header-menu-toggle-bar"></span>
          <span className="header-menu-toggle-bar"></span>
          <span className="header-menu-toggle-bar"></span>
        </button>

        <nav id="header-nav" className={isMenuOpen ? 'header-nav is-open' : 'header-nav'}>
          <ul className="header-menu">
            {menus.map((menu) => (
              <li key={menu}>
                <button
                  type="button"
                  className="header-menu-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
