import React from 'react';
import mission from '../img/about-mission.jpg';
import plan from '../img/about-plan.jpg';
import vision from '../img/about-vision.jpg';

export default function About() {
    return (
        <section id="about">
            <div className="container">

                <header className="section-header">
                    <h3>About Us</h3>
                    <p>We are a digital transformation consultancy and software development company that provides cutting edge software solutions, helping startups, companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey.</p>
                    <p>At RedHorn we have a solid team of experts in software development, implementation, process flows and technology, in order to successfully develop and implement business administrative systems for various industries. </p>
                    <p>Our knowledge in processes has allowed us to streamline and transform the operation of our clients with the highest return on investment, positioning ourselves among the most prestigious providers.</p>
                </header>

                <div className="row about-cols">
                    <div className="col-md-4 wow fadeInUp">
                        <div className="about-col">
                            <div className="img">
                                <img src={mission} alt="" className="img-fluid" />
                                <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                            </div>
                            <h2 className="title"><a href="#">Our Mission</a></h2>
                            <p> Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.</p>
                        </div>
                    </div>

                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="about-col">
                            <div className="img">
                                <img src={plan} alt="" className="img-fluid" />
                                <div className="icon"><i className="ion-ios-list-outline"></i></div>
                            </div>
                            <h2 className="title"><a href="#">Our Plan</a></h2>
                            <p> We offer a phased approach towards your business drivers and help IT organizations to align their goals towards the overall vision of the business</p>
                        </div>
                    </div>

                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="about-col">
                            <div className="img">
                                <img src={vision} alt="" className="img-fluid" />
                                <div className="icon"><i className="ion-ios-eye-outline"></i></div>
                            </div>
                            <h2 className="title"><a href="#">Our Vision</a></h2>
                            <p>We clearly understand that all customer landscapes are not of same kind. That’s why RedHorn sourcing methodology encompasses a clear solution especially crafted to address the clients' issues.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
