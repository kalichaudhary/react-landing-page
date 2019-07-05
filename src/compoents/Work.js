import React, { Component } from "react";

export default class Work extends Component {
    render() {
        return (
            <section id="work">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>How is it Work!</h1>
                            <p className="my-5">
                                How much does GoDrive cost in your city?
                                Calculate a fare estimate for your next trip.
                                Simply enter a pickup location and destinationto
                                get started. The new Driver app helps you earn
                                smarter and supports you–like a partner–at every
                                turn.
                            </p>
                            <button className="btn-lg btn btn-primary my-5 px-5">
                                Explore
                            </button>
                        </div>
                        <div className="col-md-7 py-5" id="img-work" />
                    </div>
                </div>
            </section>
        );
    }
}
