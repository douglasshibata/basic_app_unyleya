import { useLocation } from "react-router-dom";

export default function Form() {
    const location = useLocation();
    console.log(location.state)
    const keys = [];
    const item = location.state.filterItem
    Object.keys(item).forEach((key) => {
        if (
            typeof item[key] !== 'object' &&
            !Array.isArray(item[key]) &&
            item[key] !== null
        ) {
            if (key !== 'id')
                keys.push(key)
        }
    })
    return (
        <form className="container">
            <h2 className="text-center">Formulário: {location.state.route} - id - {location.state.id}</h2>
            <div className="form-group row">
                {keys.map((key, index) => (
                    <>
                        <label htmlFor={key + index} key={key + index} className="col-sm-2 col-form-label">{key}</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id={key + index} key={key + index+item} defaultValue={item[key]} />
                        </div>
                    </>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-info btn-md text-white">Salvar</button>
            </div>
        </form>
    )
}