import React from "react";
import AppComponent from "./Component/AppComponent";
import Context from "./Component/Context";
import Controlform from "./Component/Controlform";
import Dashboard from "./Component/Dashboard";
import UnControllform from "./Component/UnControllform";
import AppContextApi from "./Component/AppContextApi";

const App = () => {
  return (
    <>
      <Controlform />
      <hr />
      <UnControllform />
      <hr />
      <Context>
        <AppComponent />
      </Context>
      <AppContextApi>
        <Dashboard />
      </AppContextApi>
    </>
  );
};

export default App;
