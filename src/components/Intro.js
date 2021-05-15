import React from 'react'
import introCarousel1 from '../img/intro-carousel/1.jpg';
import introCarousel2 from '../img/intro-carousel/2.jpg';
import introCarousel3 from '../img/intro-carousel/3.jpg';
import introCarousel4 from '../img/intro-carousel/4.jpg';
import introCarousel5 from '../img/intro-carousel/5.jpg';

export default function Intro() {
    return (
        <section id="intro">
            <div className="intro-container">
                <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active" style={{backgroundImage: `url(${introCarousel1})`}}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>We are professional</h2>
                                    <p>When managers of a company select an ERP package to implement, they are “buying into” the ERP vendor’s view of a certain industry’s best practices and relying on the system to support their efforts to embrace these practices.</p>
                                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{backgroundImage: `url(${introCarousel2})`}}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Results-Oriented</h2>
                                    <p>The proposed process designs should always be designed within the logic of the ERP systems. Making the effort to understand your customer’s expectations can save a lot of friction and extra work.</p>
                                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{backgroundImage: `url(${introCarousel3})`}}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Organizational Enablement</h2>
                                    <p>Organizations with broken systems typically suffer from broken business processes and vice versa. For any organization there are just a few key processes that handle the core business.  All the other processes support the key processes on a certain aspect.</p>
                                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{backgroundImage: `url(${introCarousel4})`}}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Rapid Implementation</h2>
                                    <p>The ability to trace requirements flow from their source (originator), through the various project phases (design, prototyping, customizations, testing, piloting, and delivery) is a requirements generation best practice.</p>
                                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{backgroundImage: `url(${introCarousel5})`}}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Data Conversion</h2>
                                    <p>The cost of control obviously should not exceed the cost of inaccuracies. Testing is the only way to ensure that you have satisfied all of the requirements for accurate data.</p>
                                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>
        </section>
    )
}
