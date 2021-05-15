import React from 'react'

export default function Services() {
    return (
        <section id="services">
            <div className="container">

                <header className="section-header wow fadeInUp">
                    <h3>Services</h3>
                    <p>The world is evolving fast. With an enterprise management cloud from RedHorn, you can build your business to adapt to what’s next.</p>
                </header>

                <div className="row">

                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
                        <h4 className="title"><a href="">Enterprise Resource Planning</a></h4>
                        <p className="description">Enterprise resource planning is the integrated management of main business processes, often in real time and mediated by software and technology.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-bookmarks-outline"></i></div>
                        <h4 className="title"><a href="">Mobile App Development</a></h4>
                        <p className="description">Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-paper-outline"></i></div>
                        <h4 className="title"><a href="">UI/UX Design</a></h4>
                        <p className="description">User interface engineering is the design of user interfaces for machines and software, such as computers, mobiles, and other electronic devices, with the focus on maximizing usability and the user experience.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                        <h4 className="title"><a href="">E-Commerce</a></h4>
                        <p className="description">E-commerce is the activity of electronically buying or selling of products on online services or over the Internet.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-barcode-outline"></i></div>
                        <h4 className="title"><a href="">Point of Sales</a></h4>
                        <p className="description">The point of sale (POS) or point of purchase (POP) is the time and place where a retail transaction is completed. </p>
                    </div>
                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-people-outline"></i></div>
                        <h4 className="title"><a href="">API Integrations</a></h4>
                        <p className="description">An application programming interface (API) is a messenger that processes requests and ensures seamless functioning of enterprise systems.</p>
                    </div>

                </div>

            </div>
        </section>
    )
}
