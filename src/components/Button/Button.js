export default function Button({ title, onClick,value }) {
    return (
        <button type="button" className="btn btn-primary" onClick={() => onClick(value)}>{title}</button>

    )
}