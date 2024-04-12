import React from 'react'
import CleanFreshSection from '../../components/CleanFreshSection/CleanFreshSection'
import CustomerFavorites from '../../components/CustomerFavorites/CustomerFavorites'
import BestProductSection from '../../components/BestProducts/BestProductSection'
import PopularProductSection from '../../components/PopularProduct/PopularProductSection'
import ComboSection from '../../components/Combo/ComboSection'
import BeautyForABetterSection from '../../components/BeautyForABetterSection/BeautyForABetterSection'
import NaturalcreamSaleSection from '../../components/NaturalCreamSale/NaturalcreamSaleSection'
import TestimonioalSection from '../../components/Testimonioal/TestimonioalSection'
import SubscribeOurNewsletter from '../../components/Subscribe/SubscribeOurNewsletter'
import BrandSliderSection from '../../components/BrandSlider/BrandSliderSection'

const Home = () => {
  return (
    <div>

        {/* Clean Fresh section start */}
        <CleanFreshSection/>
        {/* Clean Fresh section staendrt */}

        {/*customer-favorites-section start */}
        <CustomerFavorites/>
        {/*customer-favorites-section end */}

        {/*best-product-section start */}
        <BestProductSection/>
        {/*best-product-section end */}

        {/*Popular-Product-Section start */}
        <PopularProductSection />
        {/*Popular-Product-Section end */}

        {/* combo-section start */}
        <ComboSection/>
        {/* combo-section end */}

        {/* beauty-for-a-better-section start  */}
        <BeautyForABetterSection/>
        {/* beauty-for-a-better-section end  */}

        {/* natural-cream-sale-section start */}
        <NaturalcreamSaleSection/>
        {/* natural-cream-sale-section end */}

        {/* testimonioal-section start */}
        <TestimonioalSection/>
        {/* testimonioal-section end */}

        {/* subscribe-our-newsletter section start */}
        <SubscribeOurNewsletter/>
        {/* subscribe-our-newsletter section end */}

        {/* brand-slider-section start */}
        <BrandSliderSection/>
        {/* brand-slider-section end */}

    </div>
  )
}

export default Home
