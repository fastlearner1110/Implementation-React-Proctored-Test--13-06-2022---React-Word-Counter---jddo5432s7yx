import React from 'react'
import '../styles/App.css';
const App = () => {


  //let [input, setInput] = useState("");
  let [wordCounter, setWordCounter] = useState(0);
  let [charCounter, setCharCounter] = useState(0);
  let [maxWord, setMaxWord] = useState(50);
  let [font,setFontSize]=useState(16);
  function changeRange(event){
        setMaxWord(event.target.value);
  }
  function changeFont(event){
      setFontSize(event.target.value);
      console.log(font);
  }
  function handleChange(event) {
    let word=event.target.value;
    //setInput(event.target.value);
    //let arr = input.split(" ");
    //console.log(arr);
    //console.log(word);
    let wordNum=0;
    for(let i=0;i<word.length;i++){
      if(word[i]===" "){
        wordNum++;
      }
    }
    setWordCounter(wordNum);
    setCharCounter(event.target.value.length);
  }

  return (
    <div id="main">
      <h2>Font Size Picker</h2>
      <input 
      min="16"
      max="32"
      type="range" 
      onChange={changeFont}
      />
      <br />
      <br />
      <h2>Word Limit input</h2>
      <input id="char-limit-input" 
      type="number" 
      value={maxWord} 
      onChange={changeRange}
      />
      <br />
      <br />
      <textarea 
      style={{fontSize:"{font}"}}
      onChange={handleChange} 
      />
      <div id="word-counter">
        Total number of words written is {wordCounter}
      </div>
      <div id="char-counter">Total number of character used {charCounter}</div>
    </div>
}


export default App;
