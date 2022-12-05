import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/Context/Context";
import Home from "./views/Home/Home";
import Movie from "./views/Movie/Movie";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <ContextProvider>
              <Routes>
                  <Route exac path="/" element={<Home/>}/>
                  <Route exac path="/movie/:movieId" element={<Movie/>}/>
                  <Route exac path="/:options" element={<Home/>}/>
              </Routes>
          </ContextProvider>
      </BrowserRouter>
    </div>
  );
}