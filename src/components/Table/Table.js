import React from 'react';
import Button from '../Button/Button';

export default function Table({ data, headers, onClickDetail, onClickRemove, type, onClickEdit }) {
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
    const buttonsOptions = (row) => (
        <div className='d-flex flex-column'>
            <Button onClick={onClickDetail} title={'Detalhar'} icon={'fa-info-circle'} value={row.id} />
            {type !== 'quotes' ?
                <>
                    {/* <Button onClick={onClickEdit} classBtn='btn-success' icon={'fa-pencil'} title={'Editar'} value={row.id} /> */}
                    <Button onClick={onClickRemove} classBtn='btn-danger' icon={'fa-trash'} title={'Remover'} value={row.id} />
                </>
                : ''
            }
        </div>
    )
    const showImage = (row, key) => (
        <img src={row[key]} alt=""  className="img-thumbnail" />
    )
    const tableBody = () => (
        <tbody>
            {data?.length > 0 ? data.map((row, i) => (
                <tr key={i}>
                    {
                        headers.map(((key, index) => (
                            <td key={key + index}>{index === 0 ? buttonsOptions(row) : key === 'image' || key === 'thumbnail' ? showImage(row, key) : row[key]}</td>
                        )))
                    }
                </tr>
            )) : <tr></tr>
            }
        </tbody>
    )
    return (
        <div className="table-responsive container-fluid">
            <table className="table table-striped">
                {tableHeader()}
                {tableBody()}
            </table>
        </div>
    )
}