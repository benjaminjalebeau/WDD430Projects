import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    //Hook
    const [newItem, setNewItem] = useState("")

    //DOM manipulation Logic
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
    
        onSubmit(newItem)
    
        setNewItem("")
    }

    //Actual content for the component.
    return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" 
        />
      </div>
      <button className="btn">Add</button>

    </form>
    )
}