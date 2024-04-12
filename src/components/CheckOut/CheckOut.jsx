import React from 'react'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'
import icon from '../../assets/icons/checkout-i-icon.svg'

const CheckOut = () => {
  return (
    <div>
        <Banner
        subtitle="Home"
        subtitle2="Checkout"
        title="CHECKOUT"
      />
        <div className='checkout-section'>
          <div className='container'>
              <div className='coupon mb-5'>
                  <Link ><img src={icon} alt="" className='me-3'/> Have a Coupon? Click here to enter your code</Link>
              </div>

              <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-7'>
                  <div className='billing-detail'>
                  <h6 className='mb-4'><span>Billing</span> Details</h6>
                    <form>
                    <div class="row mb-4">
                      <div class="col">
                        <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="form6Example1">First Name</label>
                          <input type="text" id="form6Example1" class="form-control" />
                        </div>
                      </div>
                      <div class="col">
                        <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="form6Example2">Last Name</label>
                          <input type="text" id="form6Example2" class="form-control" />
                        </div>
                      </div>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example3">Company Name (Optional)</label>
                      <input type="text" id="form6Example3" class="form-control" />
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example4">Company Name (Optional)</label>
                      <input type="text" id="form6Example3" class="form-control" />
                    </div>

                    <div class="form-group mb-4">
                      <label class="form-label" for="form6Example5">Country</label>
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                  </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example6">Street Address</label>
                    <input type="text" id="form6Example5" class="form-control" />
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example7">Town / City</label>
                      <input type="text" id="form6Example6" class="form-control" />
                    </div>

                    <div class="form-group mb-4">
                      <label class="form-label" for="form6Example8">District</label>
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example9">Postcode / ZIP (optional)</label>
                      <input type="text" id="form6Example6" class="form-control" />
                    </div>
                    
                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example10">Phone (optional)</label>
                      <input type="text" id="form6Example6" class="form-control" />
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form6Example11">Email address</label>
                      <input type="email" id="form6Example6" class="form-control" />
                    </div>

                    </form>
                  </div>
                  </div>

                  <div className='col-sm-12 col-md-12 col-lg-5'>
                    <div className='your-order'>
                      <h6 className='mb-4'><span>Your</span> Order</h6>
                      <form>
                      <div className='border-bottom pb-2 d-flex justify-content-between'>
                        <div>Product</div>
                        <div>Total</div>
                      </div>
                      
                      <div className='border-bottom pb-2'>
                        <div className='d-flex justify-content-between py-2'>
                          <div>Satin gown × 1</div>
                          <div>$14</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <div>Organics Shampoo × 1</div>
                          <div>$48</div>
                        </div>
                      </div>

                      <div className='border-bottom pb-2 d-flex justify-content-between py-2'>
                        <div>Subtotal</div>
                        <div>$62</div>
                      </div>

                      <div className='border-bottom pb-2 d-flex justify-content-between py-2'>
                        <div>Shipping</div>
                        <div>Flat rate: $2.00</div>
                      </div>

                      <div className='border-bottom pb-2 d-flex justify-content-between py-2'>
                        <div>Total</div>
                        <div>$64</div>
                      </div>

                    <div className='form-check-radio ps-3'>
                      <input type='radio' name='bankTransfer' className=' me-2 '/>
                      <label className='bank-transfer'>DIRECT BANK TRANSFER</label>
                      <p className='mt-3 '>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                      <div className='mt-5'>
                        <input type='radio' name='payment' className=' me-2 '/>
                        <label className='bank-transfer'>CHECK PAYMENTS</label>
                      </div>

                      <div className='my-3'>
                        <input type='radio' name='payment' className=' me-2 '/>
                        <label className='bank-transfer'>CASH ON DELIVERY</label>
                      </div>

                      <div className='my-3'>
                        <input type='radio' name='payment' className=' me-2 '/>
                        <label className='bank-transfer'>PAYPAL EXPRESS CHECKOUT</label>
                      </div>

                      <p className='mt-5'>
                      Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link>Privacy Policy.</Link>
                      </p>
                    </div>

                      <input type='checkbox'  className=' me-2 '/>
                      <small >I Have Read And Agree To The Website Terms And Conditions *</small>

                      
                    <div className='text-center'>
                      <input type='submit' value='SUBMIT' className='submit-btn'/>
                    </div>
                      </form>
                    </div>
                  </div>
              </div>
          </div>
        </div>

    </div>
  )
}

export default CheckOut
