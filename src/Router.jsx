import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Accomodation from "./pages/Accomodation/Accomodation";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import NavBar from "./components/Navbar/Navbar";

function Router() {
    return (
        <div>
            <NavBar/>
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
