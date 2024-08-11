import HeroImage from '../assets/images/hero-img.png';
import Bubbles from '../assets/images/Bubbles.png';
import BubblesOne from '../assets/images/bubbles-1.png';

function Hero() {
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='hero-content w-50'>
            {/*CONtent*/}
            <span className='sub'>20% Discount for 1 Month Subscription</span>
            <h1 className='mt-3 fw-bold'>Laundry today or <br /> Clothless tomorrow</h1>
            <p className='py-3'>Suds Laundry service will wash, dry, and fold your laundry at an <br />
            affordable price. Pickup and drop-off options available!</p>
            <button>How it works</button>
            <div className='d-flex gap-5'>
                <div className='d-flex gap-2 lh-1'>
                    <span className='fw-bold fs-3'>18m+</span>
                    <span className=' about-text'>Happy <br /> Customers</span>
                </div>
                <div className='d-flex gap-2 lh-1'>
                    <span className='fw-bold fs-3'>10+</span>
                    <span className=' about-text'>Years of <br /> Experience</span>
                </div>
            </div>
        </div>
        <div className='hero-images'>
            {/*Image*/}

            <img className='bubbles' src={Bubbles} />
            <img className='bubbles-1' src={BubblesOne} />
            <img className='hero-img' src={HeroImage} />
        </div>
    </div>
  )
}

export default Hero