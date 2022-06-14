import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
    let [charLimit, setCharLimit] = useState(50);
    let [fontsize, setFontsize] = useState(16);
    let [charCount, setCharCount] = useState(0);
    let [wordCount, setWordCount] = useState(0);

    function handleChange(event) {
        let text = event.target.value;
        setCharCount(event.target.value.length);
        let wCount = 0;
        if (text.length > 0) {
            wCount = text.trim().split(" ").length;
        }
        setWordCount(wCount);
    }
    function changeCharLimit(event) {
        setCharLimit(event.target.value);
    }
    function changeFontSize(event) {
        setFontsize(event.target.value);
    }
    return (
        <div id="main">
            <input
                onChange={changeFontSize}
                value={fontsize}
                type="range"
                id="fontsize-input"
                min="16"
                max="32"
            />
            <br />
            <br />
            <input
                onChange={changeCharLimit}
                type="number"
                id="char-limit-input"
                value={charLimit}
            />
            <br />
            <br />
            <textarea
                onChange={handleChange}
                maxLength={charLimit}
                style={{ fontSize: fontsize + "px" }}
            />
            <br />
            <br />
            <div id="word-counter">
                Total number of words written {wordCount}
            </div>
            <div id="char-counter">
                Total number of character used {charCount}
            </div>
        </div>
    );
};

export default App;
