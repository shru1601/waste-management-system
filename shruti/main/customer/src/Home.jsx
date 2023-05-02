import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import {Link, Route} from "react-router-dom";
import './slider.css';
// import About from './About';
import './cart';


export const Home = () => {
    console.log('**********************************************************************');
    return (

        <div>
            {/* <nav class="navbar background">



            </nav> */}

            <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul class="navbar-nav mr-auto"> */}
                    <ul class="nav-list">

                        <div class="logo">
                            <img src={require('./wmlogo.jpg')} alt="waste" width={40} height={90} />
                        </div>

                        <li><a href="#home">Home</a></li>
                        <li><a href="About">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {/* </ul> */}
                        
                        <li>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" id="search_field" placeholder="Search" aria-label="Search" />
                            </form>
                        </li>
                        <li>
                            <button type="button" class="btn btn-success my-2 my-sm-0" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">
                                <FontAwesomeIcon icon={faShoppingCart} /> 
                                <i class="total-count" ></i>
                            </button>
                        </li>
                        <li>
                            <button type='button' className='clear-cart'>Clear Cart</button>
                        </li>

                    </ul>
                </div>
            </nav >

            {/*  BEGIN SLIDER  */}
            < div class="page-slider margin-bottom-35" >
                <div id="carousel-example-generic" class="carousel slide carousel-slider">

                    {/*  Wrapper for slides  */}
                    <div class="carousel-inner" role="listbox">
                        {/*  First slide  */}
                        <div class="item carousel-item-four active">
                            <div class="container">
                                <div class="carousel-position-four text-center">
                                    <h2 class="margin-bottom-20 animate-delay carousel-title-v3 border-bottom-title text-uppercase" data-bs-animation="animated fadeInDown">
                                        Waste <br /><span class="color-red-v2">Management</span><br /> System
                                    </h2>
                                    <p class="carousel-subtitle-v2" data-bs-animation="animated fadeInUp">Let's Nurture The Nature So That <br />
                                        We Can Have A Better Future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/*  END SLIDER  */}

            {/* <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer> */}


            {/* <!-- BEGIN SALE PRODUCT & NEW ARRIVALS --> */}
            <div class="row margin-bottom-40">
                {/* <!-- BEGIN SALE PRODUCT --> */}
                <div class="col-md-12 sale-product">
                    {/* <h2>All Products</h2> */}
                    <div class="owl-carousel owl-carousel5">
                        <div className='owl-stage-outer'>
                            <div class="owl-stage" >
                                <div class="owl-item">
                                    <div>
                                        
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model1.jpg" class="img-responsive" alt="Plastic Bottle" />

                                            </div>
                                            <h3>Plastic Bottle</h3>
                                            <div class="pi-price">  $2.00 per bottle</div>
                                            <button type='button' data-bs-name="Plastic Bottle" data-bs-price="2" class="add2cart btn btn-default ">Add to cart</button>
                                            {/* <!-- <div class="sticker sticker-sale"></div> --> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item">
                                    <div>
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model2.jpg" class="img-responsive" alt="Newspaper" />

                                            </div>
                                            <h3>Newspaper</h3>
                                            <div class="pi-price">  $12 per Kg</div><br />
                                            <button type='button' data-bs-name="Newspaper" data-bs-price="12" class="add2cart btn btn-default ">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item">
                                    <div>
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model6.jpg" class="img-responsive" alt="Organic Waste" />

                                            </div>
                                            <h3>Organic Waste</h3>
                                            <div class="pi-price">  $10 per Kg</div><br />
                                            <button type='button' data-bs-name="Organic Waste" data-bs-price="10" class="add2cart btn btn-default ">Add to cart</button>
                                            <div class="sticker sticker-new"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item">
                                    <div>
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model4.jpg" class="img-responsive" alt="Berry Lace Dress" />

                                            </div>
                                            <h3>Glass Bottle</h3>
                                            <div class="pi-price">  $5.00 per bottle</div>
                                            <button type='button' data-bs-name="Glass Bottle" data-bs-price="5" class="add2cart btn btn-default ">Add to cart</button>
                                            {/* <!-- <div class="sticker sticker-new"></div> --> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item">
                                    <div>
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model5.jpg" class="img-responsive" alt="Berry Lace Dress" />

                                            </div>
                                            <h3>Metal</h3>
                                            <div class="pi-price">  $100.00 per Kg</div><br />
                                            <button type='button' data-bs-name="Metal" data-bs-price="100" class="add2cart btn btn-default ">Add to cart</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SALE PRODUCT --> */}
            </div>
            {/* <!-- END SALE PRODUCT & NEW ARRIVALS --> */}

            {/* <!-- Starting of cart modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            {/* <div class="modal fade" id="staticBackdrop" role='dialog'> */}
               
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Your Cart</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="show-cart table" id='show-table'>

                            </table>
                            <div class="grand-total">Total price: ₹<span class="total-cart"></span></div>
                        </div>
                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>

                            {/* <!-- <button type="button" class="btn btn-danger clear-all">Clear All</button> --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Ending of cart model --> */}


            {/*<!-- BEGIN POWERED --> */}
            
            {/* <!-- END POWERED --> */}
            {/* <!-- BEGIN FOOTER --> */}
            <div class="footer">
                {/* <div class="container"> */}
            <div class="col-md-4 col-sm-4 text-right">
                <p class="powered">Powered by: <a href="http://www.darkbears.com/">DarkBears.com</a></p>
            </div>
                    <div class="row">
                       
                        {/* <!-- BEGIN COPYRIGHT --> */}
                        <div class="col-md-4 col-sm-4 padding-top-10">
                            2015 © DarkBears. ALL Rights Reserved.
                        </div> 
                        {/* <!-- END COPYRIGHT --> */}
         {/*} <!-- BEGIN PAYMENTS --> */}
                        {/* <div class="col-md-4 col-sm-4">
                            <ul class="list-unstyled list-inline pull-right">
                                <li><img src="/payments/western-union.jpg" alt="We accept Western Union" title="We accept Western Union" /></li>
                                <li><img src="/payments/american-express.jpg" alt="We accept American Express" title="We accept American Express" /></li>
                                <li><img src="/payments/MasterCard.jpg" alt="We accept MasterCard" title="We accept MasterCard" /></li>
                                <li><img src="/payments/PayPal.jpg" alt="We accept PayPal" title="We accept PayPal" /></li>
                                <li><img src="/payments/visa.jpg" alt="We accept Visa" title="We accept Visa" /></li>
                            </ul>
                        </div> */}
                        {/* <!-- END PAYMENTS -->*/}
                     </div>
                {/* </div> */}
            </div>  
            {/* <!-- END FOOTER --> */}
        </div >
    )
}


