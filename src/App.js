import React from "react";
import axios from "axios";
import "./styles.css";
import PatternPuzzle from "./components/PatternPuzzle"
import ColorPickPuzzle from "./components/ColorPickPuzzle";
import TapPuzzle from "./components/TapPuzzle";
import ImgPuzzle from "./components/ImgPuzzle";
import ImgShuffle from "./components/ImgShuffle";
import LanguageSelect from "./components/LanguageSelect";
import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   CircularInput,
//   CircularTrack,
//   CircularProgress,
//   CircularThumb
// } from 'react-circular-input';

export default function App() {

  // const [value, setValue] = React.useState(0.25);
  // const [state, setState] = React.useState('#fff');
  // const [count, setCount] = React.useState(0);


  return (
    <>

<div className="App">

{/* <LanguageSelect/> */}

<ImgShuffle/>

{/* <ImgPuzzle/> */}
      {/* <PatternPuzzle /> */}

      {/* <ColorPickPuzzle /> */}

      {/* <TapPuzzle /> */}


      {/* <CircularInput value={value} onChange={setValue}>
        <CircularTrack />
        <CircularProgress />
        <CircularThumb />
      </CircularInput> */}

    </div>

    </>
    
  );
}
