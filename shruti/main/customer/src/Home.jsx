import React from 'react';
// import {Link, Route} from "react-router-dom";
import './slider.css';


export const Home = () => {
    console.log('**********************************************************************');
    return (

        <div>
            <nav class="navbar background">
                <ul class="nav-list">

                    <div class="logo">
                        <img src={require('./wmlogo.jpg')} alt="waste" width={40} height={90} />
                    </div>

                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>


            </nav>

            {/*  BEGIN SLIDER  */}
            <div class="page-slider margin-bottom-35">
                <div id="carousel-example-generic" class="carousel slide carousel-slider">

                    {/*  Wrapper for slides  */}
                    <div class="carousel-inner" role="listbox">
                        {/*  First slide  */}
                        <div class="item carousel-item-four active">
                            <div class="container">
                                <div class="carousel-position-four text-center">
                                    <h2 class="margin-bottom-20 animate-delay carousel-title-v3 border-bottom-title text-uppercase" data-animation="animated fadeInDown">
                                        Waste <br /><span class="color-red-v2">Management</span><br /> System
                                    </h2>
                                    <p class="carousel-subtitle-v2" data-animation="animated fadeInUp">Let's Nurture The Nature So That <br />
                                        We Can Have A Better Future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    <h2>All Products</h2>
                    <div class="owl-carousel owl-carousel5">
                        <div className='owl-stage-outer'>
                            <div class="owl-stage" >
                                <div class="owl-item">
                                    <div>
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model1.jpg" class="img-responsive" alt="Plastic Bottle" />
                                                
                                            </div>
                                            <h3><a href="shop-item.html">Plastic Bottle</a></h3>
                                            <div class="pi-price">  $2.00 per bottle</div>
                                            <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
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
                                            <h3><a href="shop-item.html">Newspaper</a></h3>
                                            <div class="pi-price">  $12 per Kg</div><br />
                                            <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item">
                                    <div>
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model6.jpg" class="img-responsive" alt="Organic Waste" />
                                          
                                            </div>
                                            <h3><a href="shop-item.html">Organic Waste</a></h3>
                                            <div class="pi-price">  $10 per Kg</div><br />
                                            <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
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
                                            <h3><a href="javascript:;">Glass Bottle</a></h3>
                                            <div class="pi-price">  $5.00 per bottle</div>
                                            <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
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
                                            <h3><a href="shop-item.html">Metal</a></h3>
                                            <div class="pi-price">  $100.00 per Kg</div><br />
                                            <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item">
                                    <div>
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model3.jpg" class="img-responsive" alt="Berry Lace Dress" />
                                               
                                            </div>
                                            <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
                                            <div class="pi-price">  $29.00</div>
                                            <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item">
                                    <div>
                                        <div class="product-item">
                                            <div class="pi-img-wrapper">
                                                <img src="/products/model7.jpg" class="img-responsive" alt="Berry Lace Dress" />
                                               
                                            </div>
                                            <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
                                            <div class="pi-price">  $29.00</div>
                                            <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
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

            {/*<!-- BEGIN POWERED --> */}
            <div class="col-md-4 col-sm-4 text-right">
                <p class="powered">Powered by: <a href="http://www.darkbears.com/">DarkBears.com</a></p>
            </div>
            {/* <!-- END POWERED --> */}
            {/* <!-- BEGIN FOOTER --> */}
            <div class="footer">
                <div class="container">
                    <div class="row">
                        {/* <!-- BEGIN COPYRIGHT --> */}
                        <div class="col-md-4 col-sm-4 padding-top-10">
                            2015 © DarkBears. ALL Rights Reserved.
                        </div>
                        {/* <!-- END COPYRIGHT -->
          <!-- BEGIN PAYMENTS --> */}
                        <div class="col-md-4 col-sm-4">
                            <ul class="list-unstyled list-inline pull-right">
                                <li><img src="/payments/western-union.jpg" alt="We accept Western Union" title="We accept Western Union" /></li>
                                <li><img src="/payments/american-express.jpg" alt="We accept American Express" title="We accept American Express" /></li>
                                <li><img src="/payments/MasterCard.jpg" alt="We accept MasterCard" title="We accept MasterCard" /></li>
                                <li><img src="/payments/PayPal.jpg" alt="We accept PayPal" title="We accept PayPal" /></li>
                                <li><img src="/payments/visa.jpg" alt="We accept Visa" title="We accept Visa" /></li>
                            </ul>
                        </div>
                        {/* <!-- END PAYMENTS -->*/}
                    </div>
                </div>
            </div>
            {/* <!-- END FOOTER --> */}
        </div>
    )
}


