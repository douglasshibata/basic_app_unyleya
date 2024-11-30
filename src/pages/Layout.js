import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <ul className="nav justify-content-center m-3">
              {/*   <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Listar Usuários</Link>
                    
                </li>

            </ul>
            <Outlet />
        </>
    );
};

export default Layout;