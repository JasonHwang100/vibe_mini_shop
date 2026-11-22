import '../styles/Footer.css'

// 연락처와 이메일은 공개 저장소용 가상 값이다.
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name">미니 쇼핑몰</p>
      <p className="footer-contact">
        연락처 010-0000-0000 <span className="footer-divider">|</span> 이메일
        hello@example.com
      </p>
      <p className="footer-copyright">© 2026 미니 쇼핑몰. All rights reserved.</p>
    </footer>
  )
}

export default Footer
