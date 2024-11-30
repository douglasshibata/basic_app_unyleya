import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <ul className="nav justify-content-center m-3">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Usuários</Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/products'>Produtos</Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/recipes'>Receitas</Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/posts'>Posts</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/carts'>Carrinho</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/todos'>Itens a fazer</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/quotes'>Frases</Link>
                </li>

            </ul>
            <Outlet />
        </>
    );
};

export default Layout;