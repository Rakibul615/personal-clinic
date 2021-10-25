import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Contact from './component/Contact/Contact';
import Blog from './component/Blogs/Blogs';
import NotFound from './component/NotFound/NotFound'
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Services from './component/Services/Services';
import Doctors from './component/Doctors/Doctors';
import AuthProvider from './context/AuthProvider';
import DoctorDetails from './component/DoctorDetail.css/DoctorDetails';


function App() {
  return (
   
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services/:id">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/doctorDetail/:key">
            <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    
  );
}

export default App;
