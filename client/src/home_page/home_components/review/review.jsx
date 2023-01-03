/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import TestiMonialsDetails from '.././reviewltem/reviewltem.jsx';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../image/user-one.png';
import './review.css';

const review = () => {
    const testiMonials = [
        {
            name: 'Redefine Flying ',
            address: 'From USD $999',
            img: './images/home/max-auto.png'
        },
        {
            name: 'Redefine Flying ',
            address: 'From USD $999',
            img: './images/home/Maintop.png'
        },
        {
            name: 'DJI Air 2',
            address: 'From USD $999',
            img: './images/home/autoli.png'
        },
        // {
        //     name: 'Kevin Canlas',
        //     description: '1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        //     address: 'USA',
        //     img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        // },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
            <h4 className="miniTitle text-center">TESTIMONIALS</h4>
                <div className="row1">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div className="item">
                                        <div class="shadow-effect">
                                            <img className="img-circle" src={userPic} />

                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                                        </div>
                                        {/* <div className="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div> */}
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default review