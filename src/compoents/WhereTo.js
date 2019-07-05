import React, { Component } from "react";

export default class WhereTo extends Component {
    render() {
        return (
            <section id="WhereTo">
                <div className="row">
                    <div id="whereto-img" className="col-lg-7" />
                    <div className="col-lg-5 text-left mt-5 p-5">
                        <h1>Where To?</h1>
                        <p className="mt-5 pr-5">
                            How much does GoDrive cost in your city?
                            <br /> Calculate a fare estimate for your next
                            <br /> trip.Simply enter a pickup location and
                            <br /> destination to get started..
                        </p>
                        <form className="form-whereto">
                            <div className="form-group mr-5">
                                <input
                                    type="text"
                                    className="form-control px-3 py-3 form-control-lg"
                                    placeholder="Enter Location"
                                />
                            </div>
                            <div className="form-group mr-5">
                                <input
                                    type="text"
                                    className="form-control px-4 py-3 form-control-lg"
                                    placeholder="Enter Destination"
                                />
                            </div>
                        </form>
                        <form className="my-5">
                            <div class="btn-group bg-dark">
                                <button
                                    class="btn btn-primary m-1 px-5 py-2"
                                    type="button">
                                    Car
                                </button>
                                <button
                                    class="btn btn-primary m-1 px-5 py-2"
                                    type="button">
                                    Bike
                                </button>
                            </div>
                            <button className="btn py-3 px-5 m-2">
                                Get Estimate <i className="fas fa-arrow" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
