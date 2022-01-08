import BestBook from "../components/BestBook";
import FeatureBox from "../components/Featured-box";
import FeaturedData from "../components/Featured-data";
import Hero from "../components/Hero";
import Teastimonial from "../components/Teastimonial";

function Home(){
    const heroData ={
        title:"Endless entertainment and knowledge",
        subTitle:"Read or listen anytime, anywhere.",
        ctaText:"Read free for 30 days",
        ctaSubText:"Only ₹299/month after. Cancel anytime."
      }
      return(
          <div className="page_home">
              <Hero{...heroData}/>
              <FeatureBox/>
              <Teastimonial/>
              <BestBook/>
              <FeaturedData/>
          </div>
      )
}
export default Home;