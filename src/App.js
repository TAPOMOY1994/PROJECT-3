import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import { Switch, Route } from "react-router-dom";
import HeaderArea from "./HeaderArea/HeaderArea";
import SignIn from "./Googlesignin/SignIn";




function App() {

  return <>
     
    <div className="App">
      <Switch>
      <Route path="/signin" component={SignIn} />
        <Route path="/LoginPage" exact={true} component={LoginPage} />
        <Route path="/HeaderArea" component={HeaderArea} />
      </Switch>
    </div>


</>;

}

export default App;
