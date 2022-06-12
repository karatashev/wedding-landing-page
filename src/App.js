// import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import Display from "./Components/Display/Display";
// import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Banner />
        <Cards />
        <Display />
      </Layout>
    </div>
  );
}

export default App;
