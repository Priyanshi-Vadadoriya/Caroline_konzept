import React from 'react'
import Heading from '../MainHeading/Heading'
import { Link } from 'react-router-dom'

const SubscribeOurNewsletter = () => {
  return (
    <div>
      <section>
        <div className='container'>
        <div className='subscribe-our-newsletter text-center'>
            <div>
            <Heading title='Subscribe Our Newsletter'/>
            <p>Southern Dolly Varden, Black prickleback devil ray brotula Black triggerfish</p>
            <div>
                <input type='email' placeholder='Your Email address' />
                <button><Link>Subscribe</Link></button>
            </div>
            </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default SubscribeOurNewsletter
