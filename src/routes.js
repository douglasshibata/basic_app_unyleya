import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhar from "./pages/Detalhar";
import Layout from "./pages/Layout";
import ListPage from "./pages/List";
import NoPage from "./pages/NoPage";
export default function RoutesPages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ListPage ITEM_LIST={'users'} />} />
                    <Route path="products" element={<ListPage ITEM_LIST={'products'} />} />
                    <Route path="recipes" element={<ListPage ITEM_LIST={'recipes'} />} />
                    <Route path="posts" element={<ListPage ITEM_LIST={'posts'} />} />
                    <Route path="carts" element={<ListPage ITEM_LIST={'carts'} />} />
                    <Route path="todos" element={<ListPage ITEM_LIST={'todos'} />} />
                    <Route path="quotes" element={<ListPage ITEM_LIST={'quotes'} />} />
                    <Route path="detalhar" element={<Detalhar />} />

                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}