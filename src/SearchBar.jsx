import React, {useState} from "react";

function SearchBar({onSearch}) {
    const [input, setInput] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        
        if(validateInput(input)) {
            return;
        } else {
            console.log("search will go on now");
             onSearch(input);
        }
    }   
    function validateInput(value) {
        const regExPattern = /^\s*$/;

    if (value === "" || regExPattern.test(value)) {
        return true;   
    }
    return false;      
}

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">
            </label>
            <input name="input" id="input" value={input} onChange={(e) => setInput(e.target.value)}>
            </input>
            <button type="submit">Search</button>
        </form>
      </div>  
    );
}

export default SearchBar;