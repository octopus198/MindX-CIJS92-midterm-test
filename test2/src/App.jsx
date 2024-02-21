import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Explore from "./components/Explore";
import NewRelease from "./components/NewRelease";
import listMovie from "./components/data";

function App() {
  const [movieList, setMovieList] = useState(listMovie)
  const [mainTitle, setMainTitle] = useState(listMovie[0])

  const onClick = (index) => {
    setMainTitle(listMovie[index])
  }
  
  return (
    <div className="main">
      <Header />
      <Explore mainTitle={mainTitle} />
      <NewRelease movieList={movieList} onClick={onClick}/>
    </div>
  );
}


export default App;
