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
                <Route path="/About/" element={<About />} />
                <Route path="/*" element={<Error />} />
                <Route path="accomodation/:id" element={<Accomodation />} />
            </Routes>
        </div>
        )
}

export default Router;
