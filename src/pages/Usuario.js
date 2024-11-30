import { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import Button from "../components/Button/Button";

export default function Usuario() {
    const [users, setUsers] = useState({ users: [], limit: 0, skip: 0, total: 0 });
    const [headers, setHeaders] = useState([]);
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
    
    return (
        <div>
            <Table data={users.users} headers={headers}  options={<>
                {/* <Button title={'Editar'}></Button> */}
                </>}/>

        </div>
    )
}