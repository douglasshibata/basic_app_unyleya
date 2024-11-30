import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table/Table";

const ROUTE = 'products'

export default function Produto() {
    const [products, setProducts] = useState({ products: [], limit: 0, skip: 0, total: 0 });
    const [headers, setHeaders] = useState([]);
    const [id, setId] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/' + ROUTE)
            .then((response) => response.json())
            .then((data) => {
                const keys = [''];
                Object.keys(data.products[0]).forEach((key) => {
                    if (
                        typeof data.products[0][key] !== 'object' &&
                        !Array.isArray(data.products[0][key]) &&
                        data.products[0][key] !== null
                    ) {
                        keys.push(key)
                    }
                })
                setHeaders(keys)
                setProducts(data);
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
            <Table data={products.products} headers={headers} value={id} onClick={handleClick} />

        </div>
    )
}