import { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import Showtask from "./components/Showtask";


const App = () => {
  
    const [task, settask] = useState([ ]);
      
  return (

      <div className=" border-t-2 w-screen h-screen bg-zinc-800 flex  items-center flex-col">
          <Header task = {task} />
          {/*  */}
          <Create task = {task } settask={settask} />
          {/*  */}
          <Showtask task = {task} settask = {settask} />
      </div>
  );
};

export default App;