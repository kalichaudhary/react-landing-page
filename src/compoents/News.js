import React, { Component } from "react";

export default class News extends Component {
    render() {
        return (
            <section id="news">
                <div className="container text-center">
                    <h1>
                        <b>Beyond Ridesharing</b>
                    </h1>
                    <p className="my-5">
                        Certain requirements and features <br /> vary by
                        country, region, and city.!
                    </p>
                    <div className="row text-left">
                        <div className="col-md-6">
                            <img
                                src="img/news-img1.svg"
                                alt=""
                                className="img img-fluid m-auto"
                            />
                            <p className="my-4">
                                <b>Built for drivers, with drivers</b>
                            </p>
                            <p className="my-1 mb-3">
                                The new Driver app helps you earn smarter and
                                supports you–like a partner–at every turn.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="img/news-img2.svg"
                                alt=""
                                className="img img-fluid m-auto"
                            />
                            <p className="my-4">
                                <b>Bike Share</b>
                            </p>
                            <p className="my-1 mb-3">
                                All the Riders have been verified by us. Not
                                random people with bikes that we don’t know.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
