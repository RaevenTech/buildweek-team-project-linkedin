import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import EditProfileForm from "./components/hero/EditProfileForm";

import classes from "./App.module.css";
import NewsFeedLayout from "./components/newsFeed/NewsFeedLayout";

function App() {
    return (
        <section className={classes.body}>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/edit-info" element={<EditProfileForm />} />
                <Route path="/news-feed" element={<NewsFeedLayout />} />
            </Routes>
        </section>
    );
}

export default App;
