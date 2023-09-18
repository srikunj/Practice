import React, { useContext } from "react";
import ComC from "./ComC";
import { FirstName,LastName } from "./App";

function ComB(){
    const fname =  useContext(FirstName);
    const lname = useContext(LastName);
    return(
        <>
          <h1>
                MY name is {fname} {lname}
         </h1>
        </>
    )
}

export default ComB;