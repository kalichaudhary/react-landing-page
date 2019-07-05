import React, { Component } from "react";
import axios from "axios";
export default class Footer extends Component {
    state = {
        name: "",
        message: "",
        email: "",
        sent: false,
        buttonText: "Send Message"
    };
    render() {
        formSubmit = e => {
            e.preventDefault();

            this.setState({
                buttonText: "...sending"
            });

            let data = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            };

            axios
                .post("API_URI", data)
                .then(res => {
                    this.setState({ sent: true }, this.resetForm());
                })
                .catch(() => {
                    console.log("Message not sent");
                });
        };
        resetForm = () => {
            this.setState({
                name: "",
                message: "",
                email: "",
                buttonText: "Message Sent"
            });
        };
        return (
            <div>
                <footer id="main-footer" className="bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center py-4">
                                <h3>Chetan Jain</h3>
                                <p>Copyright &copy; 2019</p>
                                <button
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#contactModal">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!--Contact Modal--> */}
                <div className="modal fade text-dark" id="contactModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact Us</h5>
                                <button className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    className="contact-form"
                                    onSubmit={e => this.formSubmit(e)}>
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control message-name"
                                            onChange={e =>
                                                this.setState({
                                                    name: e.target.value
                                                })
                                            }
                                            name="name"
                                            value={this.state.name}
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Email</label>
                                        <input
                                            type="email"
                                            className="form-control message-email"
                                            onChange={e =>
                                                this.setState({
                                                    email: e.target.value
                                                })
                                            }
                                            name="email"
                                            placeholder="your@email.com"
                                            required
                                            value={this.state.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Message</label>
                                        <textarea
                                            onChange={e =>
                                                this.setState({
                                                    message: e.target.value
                                                })
                                            }
                                            name="message"
                                            type="text"
                                            placeholder="Please write your message here"
                                            value={this.state.message}
                                            required
                                            className="form-control message"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block">
                                    {this.state.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
