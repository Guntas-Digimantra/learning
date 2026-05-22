import BreadcrumbOne from "../common/BreadcrumbOne"
import DiscoverOffer from "../home/DiscoverOffer"
import Features from "../home/Features"
import Banner from "./About"
import DmlAdvantage from "./DmlAdvantage"


const AboutUs = () => {
   return (
      <>
            <BreadcrumbOne title="About DMLearning" sub_title="About Us" />
            <Banner />
            <DmlAdvantage />
            <DiscoverOffer />
            <Features />
      </>
   )
}

export default AboutUs
