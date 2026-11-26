import '../styles/UsageGuide.css'

const steps = [
  { title: '상품 고르기', text: '상품 목록에서 마음에 드는 상품을 골라요.' },
  { title: '주문하기', text: '수량과 받는 곳을 적고 주문을 완료해요.' },
  { title: '배송받기', text: '판매자가 포장해서 보낸 상품을 받아요.' },
]

function UsageGuide() {
  return (
    // 바깥(section): 배경을 화면 끝까지 / 안쪽(inner): 다른 section 과 같은 폭 1200px
    <section className="usage-guide">
      <div className="usage-guide-inner">
        <h2 className="usage-guide-title">이용 안내</h2>
        <ol className="usage-steps">
          {steps.map((step, index) => (
            <li key={step.title} className="usage-step">
              <span className="usage-step-number">{index + 1}</span>
              <h3 className="usage-step-title">{step.title}</h3>
              <p className="usage-step-text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default UsageGuide
