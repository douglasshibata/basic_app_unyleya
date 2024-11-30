export default function Button({ title, onClick, value, icon, classBtn = 'btn-primary' }) {
    return (
        <button type="button" className={`btn ${classBtn} btn-sm `} title={title} onClick={() => onClick(value)}> <i className={`fa ${icon}`}></i></button>

    )
}