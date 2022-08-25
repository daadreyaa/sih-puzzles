import React from "react";
import ReactLanguageSelect from 'react-languages-select';
import { useState } from "react";
import 'react-languages-select/css/react-languages-select.css';
// import 'react-languages-select/scss/react-languages-select.scss';




const LanguageSelect = () => {

    // var selectedChars = []
    
    var en = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
    en = shuffle(en)
    // \,"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]
    const ta =['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப']
    // , 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன']
    const hi = ["आ", "इ", "ऋ", "ए", "क", "ख", "छ", "ज", "झ"]
    // ['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன']
    const [selectedLang, setLang] = useState('');
    const [letters, setLetters] = useState(en);
    const [solution, setSolution] = useState([]);

    function onSelectLanguage(languageCode) {
        setSolution([])
        setLang(languageCode);
        console.log(languageCode);
        if (languageCode === "en") {
            setLetters(shuffle(en));
            console.log(letters);
        }
        if (languageCode === "ta") {
            setLetters(shuffle(ta));
            console.log(letters);
        }
        if (languageCode === "hi") {
            setLetters(shuffle(hi));
            console.log(letters);
        }

    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    return (
        <>
<div className="container puzzle-box">
            {/* <h1>Language Puzzle</h1> */}
            <h4>Chose a combination of letters in your preferred language</h4>
            <ReactLanguageSelect
                defaultLanguage="en"
                names={"international"}
                searchable={false}
                // searchPlaceholder="Search for a language"
                onSelect={onSelectLanguage}
                languages={["en", "ta", "hi"]}
            />

            {/* <h6>The selected language is <h4> {selectedLang} </h4> </h6> */}
            <div className="container"><div className="grid">

               {letters.map(a => (<button className="btn btn-outline-primary cell" onClick={()=>setSolution([...solution,a])} >{a}</button>)) }
            </div></div>
            
<div className="container">
<h3>{solution.join("")}</h3>
</div>

<button className="btn btn-primary" onClick={console.log("The data is : " + solution.join(""))}>Confirm</button>

</div>
        </>

    );
}

export default LanguageSelect;