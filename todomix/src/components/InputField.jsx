
export const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
            <input placeholder="new task" value={text} onChange={(e) => { handleInput(e.target.value) }} />
            <button onClick={handleSubmit}>Add TASK</button>
        </label>
    )
}