export default function Button({ title, onClickFunction }) {
    return (
        <button type="button" className="btn btn-primary" onClick={onClickFunction}>{title}</button>

    )
}