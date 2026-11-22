import '../styles/UsageGuide.css'

const steps = [
  { title: '상품 고르기', text: '상품 목록에서 마음에 드는 상품을 골라요.' },
  { title: '주문하기', text: '수량과 받는 곳을 적고 주문을 완료해요.' },
  { title: '배송받기', text: '판매자가 포장해서 보낸 상품을 받아요.' },
]

function UsageGuide() {
  return (
    <section className="usage-guide">
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
    </section>
  )
}

export default UsageGuide
