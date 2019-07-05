import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// eslint-disable-next-line
export default class Testimonial extends Component {
    render() {
        const content = [
            {
                img: "img/testimonials-img1.png",
                description:
                    "Impressed with master class support of the team and really look forward for the future. A true passionate team. Love to work with this designer in every our future project to ensure we are going to build best prototyping features.",
                img2: "img/testimonials-img3.png",
                title: "Co-founder of QatarDiaries",
                user: "Roman Ul Oman"
            },
            {
                img: "img/testimonials-img2.png",
                description:
                    "Love to work with this designer in every our future project to ensure we are going to build best prototyping features. Impressed with master class support of the team and really look forward for the future. A true passionate team.",
                img2: "img/testimonials-img3.png",
                title: "CEO of Invission Co.",
                user: "Michal Corleone Jr."
            }
        ];
        return (
            <section id="testimonial">
                <div className="container text-center">
                    <h1>Follow Your Own Path</h1>
                    <p className="my-4">
                        You will have the city at your fingertips with some
                        simple touches!
                    </p>
                    <div className="carousel container">
                        <Slider>
                            {content.map((article, index) => (
                                <div key={index}>
                                    <img
                                        src={article.img}
                                        alt=""
                                        className="img img-fluid "
                                    />
                                    <p className="my-3">
                                        {article.description}
                                    </p>
                                    <h5 className="mt-4">{article.user}</h5>
                                    <br />
                                    <p>{article.title}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}
