import '../styles/Footer.css'

// 연락처와 이메일은 공개 저장소용 가상 값이다.
function Footer() {
  return (
    // 배경은 화면 끝까지, 안쪽 내용(.footer-inner)만 1200px
    <footer className="footer">
      {/* 3단: PC 는 가로, 휴대폰은 세로 한 줄씩 */}
      <div className="footer-inner">
        {/* ① 상호와 저작권 */}
        <div className="footer-col">
          <p className="footer-name">미니 쇼핑몰</p>
          <p className="footer-copyright">© 2026 미니 쇼핑몰. All rights reserved.</p>
        </div>

        {/* ② 고객센터 */}
        <div className="footer-col">
          <p className="footer-col-title">고객센터</p>
          <p className="footer-phone">010-0000-0000</p>
          <p>평일 10시~18시</p>
          <p>이메일 hello@example.com</p>
        </div>

        {/* ③ 이용 안내 (글자만, 링크 없음) */}
        <div className="footer-col">
          <p className="footer-col-title">이용 안내</p>
          <p>배송 안내</p>
          <p>교환·환불 안내</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
