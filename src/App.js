import React from "react";
import { Route } from "react-router-dom";
//메인페이지 , 상세페이지 임포트
import Main from "./Main";
import Detail from "./Detail";

function App() {
  console.log('앱파일');
  
  return (
    <div className="App">
     <Route path ="/" exact>
        <Main />
     </Route>
     <Route path ="/detail/:week" exact>
        <Detail />
     </Route>
    </div>
  );
}

export default App;