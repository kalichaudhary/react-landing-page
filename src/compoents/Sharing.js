import React, { Component } from "react";

export default class Sharing extends Component {
    render() {
        return (
            <section id="sharing">
                <div className="container text-center">
                    <h1>Beyond Ridesharing</h1>
                    <p className="my-5">
                        Certain requirements and features <br /> vary by
                        country, region, and city.!
                    </p>
                    <div className="pictures row text-center">
                        <div className="share-img col-sm-3">
                            <img
                                src="img/share-img1.svg"
                                alt=""
                                className="img img-fluid"
                            />
                            <p className="my-5">
                                <strong>Delivery</strong>
                            </p>
                            <p>
                                Documents, accessories, packages and even gifts!
                                Deliver them all within your city, in a jiffy!
                            </p>
                        </div>
                        <div className="share-img col-sm-3">
                            <img
                                src="img/share-img2.svg"
                                alt=""
                                className="img img-fluid"
                            />
                            <p className="my-5">
                                <strong>Bike Share</strong>
                            </p>
                            <p>
                                All the Riders have been verified by us. Not
                                random people with bikes that we don’t know.
                            </p>
                        </div>
                        <div className="share-img col-sm-3">
                            <img
                                src="img/share-img3.svg"
                                alt=""
                                className="img img-fluid"
                            />
                            <p className="my-5">
                                <strong>Food</strong>
                            </p>
                            <p>
                                Order food from your favorite Place near you
                                with the convenience of Godrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
