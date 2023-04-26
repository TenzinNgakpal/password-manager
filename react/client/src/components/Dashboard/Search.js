import React, {useState} from "react";
import "./Search.css";

function Search() {
    const [inputText, setInputText]=useState("");
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
      };
    const SearchHandler = () => {
        let url = 'https://www.google.com/search?q='+inputText;
        window.open(url, '_self');
    }
    return(
        <div className="SearchBox" title="Search will take you to searched Google Search">
            <input type="text" className="query" onChange={inputTextHandler} value={inputText} placeholder="Search for Site using Google" />
            <button onClick={SearchHandler} className="searchButton">
                Search
            </button>
        </div>
    )
}

export default Search;