import Router from "./Router";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
