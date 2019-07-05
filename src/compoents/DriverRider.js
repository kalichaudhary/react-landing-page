import React, { Component } from "react";
// eslint-disable-next-line t

export default class DriverRider extends Component {
    render() {
        return (
            <section id="DriverRider">
                <div className="row">
                    <div className="boxRD boxD col-md-5 ml-auto">
                        <div className="row">
                            <div className="col-sm-6 text-center">
                                <h1>Rider</h1>
                                <p className="pt-5 mt-5">
                                    Ride at any time. <br /> Find Riders around
                                    you!
                                </p>
                                <a className="mt-3" href="">
                                    Learn More
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <a className="mb-0 mt-5" href="">
                                    Sign Up for Ride
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <img
                                    src="img/driver.svg"
                                    alt=""
                                    className="imgD img-fluid ml-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="boxRD boxR col-md-5">
                        <div className="row">
                            <div className="col-sm-6">
                                <img
                                    src="img/rider.svg"
                                    alt=""
                                    className="imgR img-fluid mr-auto ml-0"
                                />
                            </div>
                            <div className="col-sm-6 text-center">
                                <h2>Driver</h2>
                                <p className="pt-5 mt-5">
                                    Drive when you want. <br />
                                    Find opportunities around you!
                                </p>
                                <a className="mt-3" href="">
                                    Learn More
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <a className="mb-0 mt-5" href="">
                                    Sign Up for Ride
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
