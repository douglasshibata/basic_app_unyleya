import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Detalhar() {
    const [detail, setDetail] = useState({})
    const [header, setheader] = useState([])
    const location = useLocation();

    useEffect(() => {
        fetch('https://dummyjson.com/' + location.state.route + '/' + location.state.id)
            .then(res => res.json())
            .then(res => {
                const keys = [];
                Object.keys(res).forEach((key) => {
                    if (
                        typeof res[key] !== 'object' &&
                        !Array.isArray(res[key]) &&
                        res[key] !== null
                    ) {
                        keys.push(key)
                    }
                })
                setheader(keys)
                setDetail(res)
            })

    })
    return (
        <div className="container">
            {header.length > 0 ? header.map((info, index) => (
                <p key={index} >
                    <strong>{info.toUpperCase()} :  </strong>  {detail[info]}
                </p>
            )) : ''}
        </div>
    )

}