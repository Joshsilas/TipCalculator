import './TextBox.css'

const TextBox = ({text, handleInput}) => {


    return (
        <div>
            <label className="inputText" htmlFor="input">{text}</label>
            <input className="inputBox" onInput={handleInput} type="text"/>
        </div>
    )
}

export default TextBox