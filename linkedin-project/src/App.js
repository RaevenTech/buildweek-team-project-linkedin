//import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            {/*
            <Routes
                <Route path="/" element={< />} />
                <Route path="/" element={< />} />
                <Route path="/" element={< />} />
            <Route path="*" element={<h3>"Path not found"</h3>} /
            </Routes>*/}

            <Layout />
            <Footer />
        </>
    );
}

export default App;
