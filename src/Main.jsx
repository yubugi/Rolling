import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import List from "./pages/List";
import Post from "./pages/Post";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="list" element={<List />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
