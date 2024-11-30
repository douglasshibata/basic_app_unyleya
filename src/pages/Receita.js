import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table/Table";

const ROUTE = 'recipes'

export default function Receita() {
    const [recipes, setrecipes] = useState({ recipes: [], limit: 0, skip: 0, total: 0 });
    const [headers, setHeaders] = useState([]);
    const [id, setId] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/' + ROUTE)
            .then((response) => response.json())
            .then((data) => {
                const keys = [''];
                Object.keys(data.recipes[0]).forEach((key) => {
                    if (
                        typeof data.recipes[0][key] !== 'object' &&
                        !Array.isArray(data.recipes[0][key]) &&
                        data.recipes[0][key] !== null
                    ) {
                        keys.push(key)
                    }
                })
                setHeaders(keys)
                setrecipes(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])
    const handleClick = (value) => {
        setId(value)
        navigate('/detalhar', { state: { id: value, route: ROUTE } });
    };
    return (
        <div>
            <Table data={recipes.recipes} headers={headers} value={id} onClick={handleClick} />

        </div>
    )
}