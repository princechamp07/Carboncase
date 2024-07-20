import Cards from "./Cards"
import Faq from "./Faq"
import Footer from "./Footer"
import Header from "./Header"
import Section from "./Section"

const Home = () => {
  return (
    <>
  <div className="bg-gray-100">
  <Header/>
    <Section/>
    <Cards/>
    <Faq/>
    <Footer/>
  </div>
    
    
    </>
  )
}

export default Home