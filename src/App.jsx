import Router from "./Router";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import '../src/Styles/App.scss'

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
