import '../styles/Header.css'

// 메뉴 화면은 아직 없어서, 눌러도 이동하지 않는 버튼으로 둔다.
const menus = ['상품 목록', '주문하기', '관리자']

function Header() {
  return (
    <header className="header">
      <div className="header-logo">미니 쇼핑몰</div>
      <nav>
        <ul className="header-menu">
          {menus.map((menu) => (
            <li key={menu}>
              <button type="button" className="header-menu-item">
                {menu}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
