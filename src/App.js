import React from "react";
import Navbar from "./compoents/Navbar";
import Home from "./compoents/Home";
import Follow from "./compoents/Follow";
import DriverRider from "./compoents/DriverRider";
import WhereTo from "./compoents/WhereTo";
import Sharing from "./compoents/Sharing";
import News from "./compoents/News";
import Work from "./compoents/Work";
import Testimonial from "./compoents/Testimonial";
import Footer from "./compoents/Footer";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Follow />
            <DriverRider />
            <WhereTo />
            <Sharing />
            <News />
            <Work />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;
