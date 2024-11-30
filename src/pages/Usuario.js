import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table/Table";

export default function Usuario() {
    const [users, setUsers] = useState({ users: [], limit: 0, skip: 0, total: 0 });
    const [headers, setHeaders] = useState([]);
    const [id, setId] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => {
                const keys = [''];
                Object.keys(data.users[0]).forEach((key) => {
                    if (
                        typeof data.users[0][key] !== 'object' &&
                        !Array.isArray(data.users[0][key]) &&
                        data.users[0][key] !== null
                    ) {
                        keys.push(key)
                    }
                })
                setHeaders(keys)
                setUsers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])
    const handleClick = (value) => {
        setId(value)
        navigate('/detalhar-usuario', { state: { id: value } });
    };
    return (
        <div>
            <Table data={users.users} headers={headers} value={id} onClick={handleClick} />

        </div>
    )
}