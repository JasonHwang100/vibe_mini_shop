// 상품 목록 (가상 데이터)
// 상품을 추가하거나 고칠 때는 이 파일만 바꾸면 화면의 카드가 함께 바뀐다.
// 항목 설명
// - category : 카테고리 ('생활' / '주방' / '문구' 중 하나)
// - stock    : 재고 수량 (0 이면 품절)
// - description : 상품 설명 (한두 문장)
const products = [
  {
    id: 1,
    name: '손뜨개 머그 코스터',
    price: 8000,
    category: '주방',
    stock: 25,
    description: '면사로 한 코씩 떠서 만든 코스터예요. 뜨거운 머그잔 아래 두기 좋아요.',
  },
  {
    id: 2,
    name: '수제 원목 도마',
    price: 32000,
    category: '주방',
    stock: 8,
    description: '단단한 원목을 깎고 다듬어 만든 도마예요. 음식을 담아내는 플레이트로도 쓸 수 있어요.',
  },
  {
    id: 3,
    name: '라벤더 향초',
    price: 15000,
    category: '생활',
    stock: 14,
    description: '소이 왁스에 라벤더 향을 더한 향초예요. 잠들기 전 은은하게 켜 두기 좋아요.',
  },
  {
    id: 4,
    name: '린넨 에코백',
    price: 21000,
    category: '생활',
    stock: 0,
    description: '가볍고 튼튼한 린넨 원단으로 만든 가방이에요. 장보기나 가벼운 외출에 잘 어울려요.',
  },
  {
    id: 5,
    name: '도자기 미니 화분',
    price: 12000,
    category: '생활',
    stock: 11,
    description: '손으로 빚어 구운 작은 화분이에요. 다육이나 작은 허브를 심기 좋아요.',
  },
  {
    id: 6,
    name: '가죽 카드 지갑',
    price: 28000,
    category: '생활',
    stock: 6,
    description: '부드러운 소가죽을 손바느질로 엮은 카드 지갑이에요. 카드 네다섯 장이 쏙 들어가요.',
  },
  {
    id: 7,
    name: '손제본 무지 노트',
    price: 9000,
    category: '문구',
    stock: 30,
    description: '실로 한 권씩 묶어 만든 무지 노트예요. 끝까지 쫙 펼쳐져서 쓰기 편해요.',
  },
  {
    id: 8,
    name: '원목 연필꽂이',
    price: 16000,
    category: '문구',
    stock: 12,
    description: '자투리 원목을 이어 붙여 만든 연필꽂이예요. 책상 위를 깔끔하게 정리해 줘요.',
  },
  {
    id: 9,
    name: '나무 숟가락 세트',
    price: 18000,
    category: '주방',
    stock: 9,
    description: '나무를 깎아 만든 숟가락 두 개 세트예요. 입에 닿는 느낌이 부드러워요.',
  },
]

export default products
