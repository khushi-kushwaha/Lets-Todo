import { useState } from "react";

const Create = (props) => {
    const {task , settask } = props;

    const [title, settitle] = useState(" ")

    const Submithandler = (e) =>{
        e.preventDefault();
       const newTask = {title , completed : false}


   settask([...task, newTask]);
   settitle(" ");

  }

  return (
    
        <form  onSubmit = {Submithandler} className="w-[25%] flex justify-between px-5 my-[2%]">
              <input
                  placeholder="write your next task..."
                  className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700 "
                  type="text"
                  onChange={(e) => settitle(e.target.value)}
                  value={title}
              />
              <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600">
                  <i className="ri-add-fill"></i>
              </button>
          </form>
    
  )
}

export default Create