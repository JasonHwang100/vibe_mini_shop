import { useEffect, useState } from 'react'
import '../styles/Header.css'

// 아직 화면이 없어서, 눌러도 이동하지 않는 버튼으로 둔다.
const utilityMenus = ['로그인', '회원가입', '장바구니']
const menus = ['상품 목록', '주문하기', '관리자']

function Header() {
  // 좁은 화면에서 서랍(drawer) 메뉴가 열렸는지 여부
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  // 서랍이 열려 있는 동안: 뒤쪽 화면 스크롤을 막고, Esc 키로 닫을 수 있게 한다.
  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className="header">
      {/* 아래 영역들과 같은 폭(1080px)에 맞추는 안쪽 상자 */}
      <div className="header-inner">
        {/* 윗줄: 로고(왼쪽)와 유틸리티 메뉴(오른쪽)를 양끝에 둔다 */}
        <div className="header-top">
          <div className="header-logo">미니 쇼핑몰</div>

          <div className="header-top-right">
            <ul className="header-utility">
              {utilityMenus.map((menu) => (
                <li key={menu}>
                  <button type="button" className="header-utility-item">
                    {menu}
                  </button>
                </li>
              ))}
            </ul>

            {/* 메뉴 아이콘: 좁은 화면에서만 보인다 */}
            <button
              type="button"
              className="header-menu-toggle"
              aria-label="메뉴 열기"
              aria-expanded={isMenuOpen}
              aria-controls="header-nav"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="header-menu-toggle-bar"></span>
              <span className="header-menu-toggle-bar"></span>
              <span className="header-menu-toggle-bar"></span>
            </button>
          </div>
        </div>

        {/* 어두운 배경(overlay): 좁은 화면에서 서랍이 열릴 때 보이고, 누르면 닫힌다 */}
        <div
          className={isMenuOpen ? 'header-overlay is-open' : 'header-overlay'}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>

        {/* GNB: 넓은 화면에서는 로고 아래 가운데 / 좁은 화면에서는 오른쪽에서 밀려 나오는 서랍 */}
        <nav id="header-nav" className={isMenuOpen ? 'header-nav is-open' : 'header-nav'}>
          {/* 서랍 닫기 버튼: 좁은 화면에서만 보인다 */}
          <button
            type="button"
            className="header-drawer-close"
            aria-label="메뉴 닫기"
            onClick={closeMenu}
          >
            ✕
          </button>

          <ul className="header-menu">
            {menus.map((menu) => (
              <li key={menu}>
                <button type="button" className="header-menu-item" onClick={closeMenu}>
                  {menu}
                </button>
              </li>
            ))}
          </ul>

          {/* 서랍 안 유틸리티 메뉴: 좁은 화면에서만 보인다 (넓은 화면은 윗줄 오른쪽에 있음) */}
          <ul className="header-drawer-utility">
            {utilityMenus.map((menu) => (
              <li key={menu}>
                <button type="button" className="header-drawer-utility-item" onClick={closeMenu}>
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
