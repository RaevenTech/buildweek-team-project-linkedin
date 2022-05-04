import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";

import EditProfileForm from "./components/hero/EditProfileForm";
import FetchUserInfo from "./Api/FetchUserInfo";

function App() {
    return (
        <>
            <FetchUserInfo />
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/edit-info" element={<EditProfileForm />} />
            </Routes>
        </>
    );
}

export default App;
