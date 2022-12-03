import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Movie from "./views/Movie/Movie";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exac path="/" element={<Home/>}/>
          <Route exac path="/movie/:movieId" element={<Movie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}