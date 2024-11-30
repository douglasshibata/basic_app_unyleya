import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Usuario from "./pages/Usuario";
export default function RoutesPages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Usuario />} />
                    {/* <Route path="blogs" element={<Blogs />} /> */}
                    
                </Route>
                    <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}