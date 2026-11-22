import '../styles/Faq.css'

// 연락처와 이메일은 Footer 와 같은 가상 값이다.
const faqs = [
  {
    question: '배송은 얼마나 걸리나요?',
    answer: '주문 후 판매자가 상품을 준비해 보통 2~3일 안에 받아 보실 수 있어요.',
  },
  {
    question: '교환·환불이 되나요?',
    answer:
      '상품을 받은 날로부터 7일 안에 신청하시면 교환이나 환불이 가능해요. 직접 만든 주문 제작 상품은 어려울 수 있어요.',
  },
  {
    question: '문의는 어디로 하나요?',
    answer: '전화 010-0000-0000 또는 이메일 hello@example.com 으로 문의해 주세요.',
  },
]

function Faq() {
  return (
    <section className="faq">
      <h2 className="faq-title">자주 묻는 질문</h2>
      <dl className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.question} className="faq-item">
            <dt className="faq-question">Q. {faq.question}</dt>
            <dd className="faq-answer">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Faq
