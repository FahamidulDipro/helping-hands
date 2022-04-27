import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Donation from "./components/Donation/Donation";
import Events from "./components/Events/Events";
import Blog from "./components/Blog/Blog";
import NotFound from "./components/NotFound/NotFound";
import AddServices from "./components/AddServices/AddServices";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/add-services"
          element={<AddServices></AddServices>}
        ></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
