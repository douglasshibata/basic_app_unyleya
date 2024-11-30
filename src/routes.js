import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhar from "./pages/Detalhar";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Usuario from "./pages/Usuario";
import Produto from "./pages/Produtos";
import Receita from "./pages/Receita";
export default function RoutesPages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Usuario />} />
                    <Route path="detalhar" element={<Detalhar />} />
                    <Route path="produtos" element={<Produto />} />
                    <Route path="receitas" element={<Receita />} />

                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}