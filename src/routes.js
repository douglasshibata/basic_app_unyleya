import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalharUsuario from "./pages/DetalheUsuario";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Usuario from "./pages/Usuario";
export default function RoutesPages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Usuario />} />
                    <Route path="detalhar-usuario" element={<DetalharUsuario />} />

                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}