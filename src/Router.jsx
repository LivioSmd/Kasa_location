import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Accomodation from "./pages/accomodation/Accomodation";
import About from "./pages/about/About";
import Error from "./pages/error/Error";

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Accomodation" element={<Accomodation />} />
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </div>
    );

}


export default Router;
