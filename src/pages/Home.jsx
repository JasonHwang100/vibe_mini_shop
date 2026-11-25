import TopBanner from '../components/TopBanner.jsx'
import Header from '../components/Header.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import ProductList from '../components/ProductList.jsx'
import UsageGuide from '../components/UsageGuide.jsx'
import Faq from '../components/Faq.jsx'
import '../styles/Home.css'

function Home() {
  return (
    <>
      {/* 띠배너와 Header 를 함께 화면 위에 고정 */}
      <div className="site-top">
        <TopBanner />
        <Header />
      </div>
      <HeroBanner />
      <ProductList />
      <UsageGuide />
      <Faq />
    </>
  )
}

export default Home
