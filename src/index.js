import React from "react";
import ReactDom from "react-dom";
import  App  from "./App";
import Card from "./Cards";

ReactDom.render(
  <>
  {/* <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
       title="A Netflix Orinal Series"
        sname="DARK"
        link="https://www.netflix.com/in/title/80990668?source=35"
       />
  <Card 
      imgsrc="https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_154494" 
       title="A Netflix Orinal Series"
        sname="EXTRA CURRICULAR"
        link="https://www.netflix.com/in/title/80990668?source=35"
  />
  <Card
    imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" 
       title="A Netflix Orinal Series"
        sname="STRANGER THINGS"
        link="https://www.netflix.com/in/title/80990668?source=35"
  /> */}
  <App/>
  </>,
  document.getElementById("root")
)