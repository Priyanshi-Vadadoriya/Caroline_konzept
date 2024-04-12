import React from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import icon from '../../assets/icons/checkout-i-icon.svg'

const Address = () => {
  return (
    <div className="address-section">
      <Banner subtitle="Home" subtitle2="Address" title="ADDRESS" />

      <div className="container">
        <div className="ckeckout mb-5">
          <Link>
            <img src={icon} alt="" className="me-3" />
            Already have an account? Log in for faster checkout
          </Link>
        </div>

        <form>
        <div className="row ">
            <h6 className='mb-4'><span>Billing</span> Details</h6>  
                <div className="col-sm-12 col-md-12 col-lg-6 mb-4 light-text">
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
                    <div className="save-continue-btn">
                        <button type="submit" className="fw-600 text-light">SAVE & CONTINUE</button>
                    </div> 
                </div>
                
                <div className="col-sm-12 col-md-12 col-lg-6 light-text">
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

                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form6Example11">Address type</label>
                        <div>
                            <input type="radio" id="form6Example6" name="address" className="me-2"/>Home
                            <input type="radio" id="form6Example6" name="address" className="me-2 ms-4"/>Office
                            <input type="radio" id="form6Example6" name="address" className="me-2 ms-4"/>Other
                        </div>

                    </div>

                </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
