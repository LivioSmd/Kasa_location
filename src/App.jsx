import Routes from "./Router";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import '../src/Styles/App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
