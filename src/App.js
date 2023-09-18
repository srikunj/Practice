import ad,{sub,div,mul} from "./Calc";
import React, { createContext } from "react";
import ComA from "./ComA"

const FirstName = createContext();
const LastName = createContext();

function App(){
  return(
    <>
  {/* <ul>
    <li>sum of two no is {ad(40,4)} </li>
    <li>Sub of two no is {sub(40,4)}</li>
    <li>Div of two no is {div(40,3)}</li>
    <li>Mult of two no is {mul(40,4)}</li>
  </ul> */}

 <FirstName.Provider value="Shrikunj">
    <LastName.Provider value="Rawal">
      <ComA/>
     </LastName.Provider>
 </FirstName.Provider>
 

    </>
  )
}
export default App;
export {FirstName,LastName};
