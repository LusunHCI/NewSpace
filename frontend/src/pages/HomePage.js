import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../img/news-450x350-1.jpg'
import pic2 from '../img/news-450x350-2.jpg'
import smallpic1 from '../img/news-350x223-1.jpg'
import smallpic2 from '../img/news-350x223-2.jpg'
import smallpic3 from '../img/news-350x223-3.jpg'
import smallpic4 from '../img/news-350x223-4.jpg'
import smallpic5 from '../img/news-350x223-5.jpg'


const HomePage = () => (
    <>
        <div className="top-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 tn-left">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src={pic1} alt={pic1}/>
                                    <div className="tn-title">
                                        <Link to="/Coronavius">Coronavius-News1</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src={pic2} alt={pic2}/>
                                    <div className="tn-title">
                                        <Link to="/Coronavius">Coronavius-News1</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 tn-right">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src={smallpic1} alt={smallpic1}/>
                                    <div className="tn-title">
                                        <Link to="/Coronavius">Coronavius-News1</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src={smallpic2} alt={smallpic2}/>
                                    <div className="tn-title">
                                        <Link to="/Coronavius">Coronavius-News1</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src={smallpic3} alt={smallpic3}/>
                                    <div className="tn-title">
                                        <Link to="/Coronavius">Coronavius-News1</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src={smallpic4} alt={smallpic4}/>
                                    <div className="tn-title">
                                        <Link to="/Coronavius">Coronavius-News1</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="cat-news">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2>Coronavius</h2>
                        <div class="row cn-slider">
                            <div class="col-md-6">
                                <div class="cn-img">
                                    <img src={smallpic1} alt={smallpic1} />
                                    <div class="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cn-img">
                                    <img src={smallpic2} alt={smallpic2}/>
                                    <div class="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technology</h2>
                        <div class="row cn-slider">
                            <div class="col-md-6">
                                <div class="cn-img">
                                    <img src={smallpic3} alt={smallpic3} />
                                    <div class="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cn-img">
                                    <img src={smallpic4} alt={smallpic4} />
                                    <div class="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="cat-news">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2>Environment</h2>
                        <div class="row cn-slider">
                            <div class="col-md-6">
                                <div class="cn-img">
                                    <img src={smallpic5} alt={smallpic5} />
                                    <div class="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cn-img">
                                    <img src={smallpic2} alt={smallpic2}/>
                                    <div class="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>International</h2>
                        <div class="row cn-slider">
                            <div class="col-md-6">
                                <div class="cn-img">
                                    <img src={smallpic1} alt={smallpic1} />
                                    <div class="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cn-img">
                                    <img src={smallpic5} alt={smallpic5} />
                                    <div class="cn-title">
                                        <a href="">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
);

export default HomePage;
