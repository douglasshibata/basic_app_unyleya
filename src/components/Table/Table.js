import React from 'react';
import Button from '../Button/Button';

export default function Table({ data, headers, onClick, value }) {
    const tableHeader = () => (
        <thead>
            <tr>
                {headers.map(header => (
                    <th key={header} scope="col">{header.toUpperCase()}</th>
                ))
                }
            </tr>
        </thead>
    )
    const tableBody = () => (
        <tbody>
            {data.length > 0 ? data.map((row, i) => (
                <tr key={i}>
                    {
                        headers.map(((key, index) => (
                            <td key={key + index}>{index === 0 ? <Button onClick={onClick} title={'Detalhar'} value={row.id} /> : row[key]}</td>
                        )))
                    }
                </tr>
            )) : <tr></tr>
            }
        </tbody>
    )
    return (
        <div className="table-responsive">
            <table className="table">
                {tableHeader()}
                {tableBody()}
            </table>
        </div>
    )
}