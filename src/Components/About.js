import React , { useRef, useState }from "react";
import '../CSS/About.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Footer from "./Footer";


const About = () => {
    return (
        <>
            <NavBar />
            <section className="about-container">
                <div className="about-content">
                    <div className="text-content">
                        <p className="main-title">ABOUT</p>
                        <p className="breadcrumb">
                            <a href="#">HOME</a> | <a href="#">ABOUT</a>
                        </p>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="container about-images">
                    <div className="row row-cols-auto">
                        <div className="col" style={{ backgroundImage: `url(${require('../media/bg_feature2.jpg')})`, backgroundSize: 'cover' }}>
                            <div className="layout">
                            </div>
                            <div className="layout-txt">
                                <p className="feature11">LEADER</p>
                                <p className="feature12">Seafood</p>
                            </div>

                        </div>
                        <div className="col" style={{ backgroundImage: `url(${require('../media/bg_feature3.jpg')})`, backgroundSize: 'cover' }}>
                            <div className="layout">
                            </div>
                            <div className="layout-txt">
                                <p className="feature11">PARTNER</p>
                                <p className="feature12">Sustainable</p>
                            </div>
                        </div>
                        <div className="col" style={{ backgroundImage: `url(${require('../media/bg_feature1.jpg')})`, backgroundSize: 'cover' }}>
                            <div className="layout">
                            </div>
                            <div className="layout-txt">
                                <p className="feature11">PRODUCT</p>
                                <p className="feature12">World Class</p>
                            </div>
                        </div>
                        <div className="col" style={{ backgroundImage: `url(${require('../media/bg_feature4.jpg')})`, backgroundSize: 'cover' }}>
                            <div className="layout">
                            </div>
                            <div className="layout-txt">
                                <p className="feature11">QUALITY</p>
                                <p className="feature12">Control</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ourStory">
                <div className="storyContainer">
                    <div className="storyHeader">
                        <p className="p1">OUR</p>
                        <p className="p2">STORY</p>
                    </div>
                    <div className="storyBody">
                        <div className="c1" style={{ backgroundImage: `url(${require('../media/map_bg.jpg')})` }}>
                            <p className="c1Header">
                                Fish Box Founders
                            </p>
                            <p className="c1Body">
                                The Fish Box was founded by two friends Tamer & Mohamed take a Family-running business to a higher level with the attention of providing individual customers, Horeca, and the wholesale industry with high-quality seasonal local fish & sourced seafood products with a deep respect for the environment; we pride ourselves handling artisanal fishermen. We would use our years of experience and skills in delivering real performance and health benefits to our clients offering them first-quality fish they can trust and then delivered to their door weekly, fortnightly or monthly!
                            </p>
                        </div>
                        <div className="c2" style={{ backgroundImage: `url(${require('../media/team.jpg')})` }}>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container ourAdv">
                <div className="ourAdvHeader">
                    <p className="p1">about</p>
                    <p className="p2">OUR ADVANTAGES</p>
                </div>
                <div className="row row-cols-auto Justify-content-center">
                    <div className="Card" style={{ width: "17rem" }}>
                        <div className="layout">
                            <i class="fa-solid fa-link"></i>
                        </div>
                        <img src={require('../media/service-4-540x432.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text1">Responsibly Sourced</p>
                            <p className="card-text2">Responsibly-sourced seafood is the key to the modern, safe and profitable seafood industry.</p>
                        </div>
                    </div>
                    <div className="Card" style={{ width: "17rem" }}>
                    <div className="layout">
                            <i class="fa-solid fa-link"></i>
                        </div>
                        <img src={require('../media/service-3-540x432.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text1">Environment</p>
                            <p className="card-text2">The seafood industry has a concern over climate impact, and takes responsibility in any case.</p>
                        </div>
                    </div>
                    <div className="Card" style={{ width: "17rem" }}>
                    <div className="layout">
                            <i class="fa-solid fa-link"></i>
                        </div>
                        <img src={require('../media/service-2-540x432.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text1">Staff</p>
                            <p className="card-text2">Our experts work hard to maintain the quality seafood for our dear customers exclusively.</p>
                        </div>
                    </div>
                    <div className="Card" style={{ width: "17rem" }}>
                    <div className="layout">
                            <i class="fa-solid fa-link"></i>
                        </div>
                        <img src={require('../media/service-1-540x432.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text1">Marketplace</p>
                            <p className="card-text2">Your business becomes benefitial by providing the customers with the best.</p>
                        </div>
                    </div>
                </div>

            </section>


            <Footer />
        </>
    );
};

export default About;


// when screen is small
// use swiper in the last part