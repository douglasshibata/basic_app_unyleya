import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table/Table";


export default function ListPage({ ITEM_LIST }) {
    const url = window.location.pathname.replace('/', '');
    if (url) {
        ITEM_LIST = url;
    } else {
        ITEM_LIST = 'users'
    }
    const [itens, setItens] = useState({ [ITEM_LIST]: [], limit: 0, skip: 0, total: 0 });
    const [headers, setHeaders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/' + ITEM_LIST )
            .then((response) => response.json())
            .then((data) => {
                const keys = [''];
                const item = data[ITEM_LIST][0]
                Object.keys(item).forEach((key) => {
                    if (
                        typeof item[key] !== 'object' &&
                        !Array.isArray(item[key]) &&
                        item[key] !== null
                    ) {
                        keys.push(key)
                    }
                })
                setHeaders(keys)
                setItens(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [ITEM_LIST])
    const detailItem = (value) => {
        navigate('/detalhar', { state: { id: value, route: ITEM_LIST } });
    };
    const editItem = (value) => {
        const filterItem = itens[ITEM_LIST].find((item) => item.id === value)
        navigate('/edit', { state: { id: value, route: ITEM_LIST, filterItem } });
    };
    const removeItem = (value) => {
        const filterItem = itens[ITEM_LIST].filter((item) => item.id !== value)
        const obj = {
            total: itens.total,
            skip: itens.skip,
            limit: itens.limit,
            [ITEM_LIST]: filterItem
        }
        setItens(obj)
        fetch(`https://dummyjson.com/${ITEM_LIST}/${value}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(console.log);
    };
    return (
        <div className="container-fluid">
            <Table data={itens[ITEM_LIST]} headers={headers} onClickDetail={detailItem} onClickRemove={removeItem} type={ITEM_LIST} onClickEdit={editItem} />
        </div>
    )
}