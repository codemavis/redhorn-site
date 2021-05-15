import React from 'react'

export default function FeaturedServices() {
    return (
        <section id="featured-services">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 box">
                        <i className="ion-ios-bookmarks-outline"></i>
                        <h4 className="title"><a href="">Be ready for what comes next</a></h4>
                        <p className="description">As your business needs change, you need to be able to pivot—fast. Our flexible foundation helps you do just that.</p>
                    </div>

                    <div className="col-lg-4 box box-bg">
                        <i className="ion-ios-stopwatch-outline"></i>
                        <h4 className="title"><a href="">Empower decisions at every level</a></h4>
                        <p className="description">With one source for financial, people, and operational data, everyone can access real-time insights to make sound decisions.</p>
                    </div>

                    <div className="col-lg-4 box">
                        <i className="ion-ios-heart-outline"></i>
                        <h4 className="title"><a href="">A technology foundation you can trust</a></h4>
                        <p className="description">We never stop innovating. And you can count on us to deliver technology that fuels your growth and keeps your data safe.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
