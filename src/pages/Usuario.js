import { useEffect, useState } from "react";

export default function Usuario() {
    const [users, setUsers] = useState({ users: [], limit: 0, skip: 0, total: 0 });
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])
    return (
        <div>
            {users.users.map((user) => (
                <p key={user.id}>
                    {user.firstName}
                </p>
            ))}
        </div>
    )
}