import { Link } from "react-router-dom";

export default function NoPage() {

    return (
        <div className="container text-center m-4 d-flex justify-content-center 
				align-items-center">
            <div className="col-md-12 text-center">
                <h1>404</h1>
                <h1>Página não encontrada</h1>
                <p>
                    A página que você deseja não foi encontrada    </p>
                <Link to={'/'} >Voltar a tela principal</Link>
            </div>
        </div>
    )
}