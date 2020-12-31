import React from 'react';

class Footer extends React.Component{
    render(){
        return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Get in Touch</h3>
                            <div className="contact-info">
                                <p>UC San Diego</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">More Info</h3>
                            <div className="newsletter">
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Footer;