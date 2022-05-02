//import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Header";

function App() {
    return (
        <>
            <Header />
            <Layout />
            <Footer />
        </>
    );
}

export default App;
