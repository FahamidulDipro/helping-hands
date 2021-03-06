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
import RegisterAsVolunteer from "./components/RegisterAsVolunteer/RegisterAsVolunteer";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/add-services"
          element={
            <RequireAuth>
              <AddServices></AddServices>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/events"
          element={
            <RequireAuth>
              <Events></Events>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registerAsVolunteer"
          element={<RegisterAsVolunteer></RegisterAsVolunteer>}
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
