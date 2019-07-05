import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <header id="home-section" className="m-auto">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="display-2">
                            <b>Get to where you want to be.</b> It's in your
                            hand.
                        </div>
                        <form className="form-inline m-1 mt-5 " action="">
                            <div className="form-group mr-2">
                                <input
                                    type="text"
                                    className="form-control px-5 py-3 form-control-lg"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <button
                                class="btn btn-primary p-3 px-4"
                                type="submit">
                                Text Me a Link
                            </button>
                        </form>
                        <p className="mt-4">
                            We’ll send you a text with a link to download the
                            app.
                        </p>
                        <div id="buttons" className="row">
                            <div className="col-md-6">
                                <button className="btn m-1 btn-light">
                                    Google
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn m-1 btn-light">
                                    Apple
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="home-right" className="col-sm-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <img
                                    src="img/home-image.png"
                                    alt=""
                                    className="img img-fluid"
                                />
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src="img/home-image2.png"
                                    alt=""
                                    className="img img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
