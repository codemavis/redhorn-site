import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    const [templateParams, setTemplateParams] = useState({
        reply_to: '',
        from_name: '',
        to_name: '',
        from_email: '',
        message_html: '',
        subject: ''
    })
    const [msgSent, setMsgSent] = useState('none');

    const sendEmail = (e) => {

        console.log('templateParams', templateParams);
        e.preventDefault();

        if (templateParams.from_name && templateParams.from_email && templateParams.message_html) {

            var service_id = "squirrel";
            var template_id = "template_bYKAoUmU";
            var user_id = "user_QH5vOWtcRBJBAATc1IR2t";
            emailjs.send(service_id, template_id, templateParams, user_id).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
            resetPage();
        }
    }

    const resetPage = () => {
        setTemplateParams({
            reply_to: '',
            from_name: '',
            to_name: '',
            from_email: '',
            message_html: '',
            subject: ''
        });

        setMsgSent('');
        setTimeout(() => {
            setMsgSent('none');
        }, 3000);
    }

    const handleChange = (e) => {

        const newTemplateParams = { ...templateParams };

        switch (e.target.name) {
            case 'user-name':
                newTemplateParams.from_name = e.target.value;
                break;

            case 'user-email':
                newTemplateParams.from_email = e.target.value;
                break;

            case 'subject':
                newTemplateParams.subject = e.target.value;
                break;

            case 'message':
                newTemplateParams.message_html = e.target.value;
                break;

            default:
                break;
        }

        newTemplateParams.to_name = 'Sujee';
        setTemplateParams(newTemplateParams);
    }


    return (
        <section id="contact" className="section-bg wow fadeInUp">
            <div className="container">

                <div className="section-header">
                    <h3>Contact Us</h3>
                    <p>There is no obligation. Lets have a chat!</p>
                </div>

                <div className="row contact-info">

                    <div className="col-md-4">
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>Address</h3>
                            <address> #38, Sri Gunalankara Rd, Kalubowila, 10350</address>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-phone">
                            <i className="ion-ios-telephone-outline"></i>
                            <h3>Phone Number</h3>
                            <p><a href="tel:+94778181704">+9477 8181704</a></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-email">
                            <i className="ion-ios-email-outline"></i>
                            <h3>Email</h3>
                            <p><a href="mailto:sathasivam.sujee@gmail.com">hello@redhorn.com</a></p>
                        </div>
                    </div>

                </div>

                <div className="form">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <form onSubmit={sendEmail} role="form" className="contactForm">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" name="user-name" className="form-control" id="user-name" placeholder="Your Name" data-rule="minlen:4" value={templateParams.from_name} data-msg="Please enter at least 4 chars" onChange={handleChange} />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" name="user-email" id="user-email" placeholder="Your Email" data-rule="email" value={templateParams.from_email} data-msg="Please enter a valid email" onChange={handleChange} />
                                <div className="validation"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" value={templateParams.subject} data-msg="Please enter at least 8 chars of subject" onChange={handleChange} />
                            <div className="validation"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" value={templateParams.message_html} placeholder="Message" onChange={handleChange}></textarea>
                            <div className="validation"></div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                    <p style={{ display: msgSent }}>
                        Message sent successfully
                    </p>
                </div>

            </div>
        </section>
    )
}
