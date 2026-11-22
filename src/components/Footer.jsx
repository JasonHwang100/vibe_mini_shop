import '../styles/Footer.css'

// 연락처와 이메일은 공개 저장소용 가상 값이다.
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name">미니 쇼핑몰</p>
      <p className="footer-contact">
        <span className="footer-contact-item">연락처 010-0000-0000</span>
        <span className="footer-divider" aria-hidden="true">|</span>
        <span className="footer-contact-item">이메일 hello@example.com</span>
      </p>
      <p className="footer-copyright">© 2026 미니 쇼핑몰. All rights reserved.</p>
    </footer>
  )
}

export default Footer
