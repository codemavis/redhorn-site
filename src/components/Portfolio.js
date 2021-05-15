import React from 'react'
import app1 from '../img/portfolio/app1.jpg';
import app2 from '../img/portfolio/app2.jpg';
import card1 from '../img/portfolio/card1.jpg';
import card2 from '../img/portfolio/card2.jpg';
import card3 from '../img/portfolio/card3.jpg';
import web1 from '../img/portfolio/web1.jpg';
import web2 from '../img/portfolio/web2.jpg';
import app3 from '../img/portfolio/app3.jpg';
import web3 from '../img/portfolio/web3.jpg';

import corrugation from '../img/portfolio/corrugation.jpg';
import crm from '../img/portfolio/crm.jpg';
import education from '../img/portfolio/education.jpg';
import manufac from '../img/portfolio/manufac.jpg';
import mobile from '../img/portfolio/mobile.jpg';
import packaging from '../img/portfolio/package.jpg';
import pos from '../img/portfolio/pos.jpg';
import stock from '../img/portfolio/stock.jpg';
import webstore from '../img/portfolio/webstore.jpg';

export default function Portfolio() {
    return (
        <section id="portfolio" className="section-bg" >
            <div className="container">

                <header className="section-header">
                    <h3 className="section-title">Our Verticals</h3>
                </header>

                {/* <div className="row">
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div> */}

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={stock} className="img-fluid" alt="" />
                                {/* <a href={app1} data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">Stocks</a></h4>
                                {/* <p>Inventory & warehouse management</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={web3} className="img-fluid" alt="" />
                                {/* <a href={web3} className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">Sales </a></h4>
                                {/* <p>Marketing management, sales, customer service and support</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={manufac} className="img-fluid" alt="" />
                                {/* <a href={app2} className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">Manufacturing </a></h4>
                                {/* <p>Job costing, order line, routing, project plan</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={crm} className="img-fluid" alt="" />
                                {/* <a href={card2} className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">Customer Relation</a></h4>
                                {/* <p></p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={packaging} className="img-fluid" alt="" />
                                {/* <a href={web2} className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">Packaging </a></h4>
                                {/* <p>Polythene packaging, labeling and extrusion process</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={webstore} className="img-fluid" alt="" />
                                {/* <a href={app3} className="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">E-Commerce </a></h4>
                                {/* <p>Webstore for wholesale & retail stores including online payment integration</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={education} className="img-fluid" alt="" />
                                {/* <a href={card1} className="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">Education </a></h4>
                                {/* <p>Registration, class schedules & invoicing</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={mobile} className="img-fluid" alt="" />
                                {/* <a href={card3} className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">Mobile  </a></h4>
                                {/* <p>Android & iOS app development</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src={pos} className="img-fluid" alt="" />
                                {/* <a href={web1} className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a> */}
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="#">Point of Sale</a></h4>
                                {/* <p>Cloud POS System</p> */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
