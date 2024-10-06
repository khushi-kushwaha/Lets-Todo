const Showtask = (props) => {
    const { task, settask } = props;

    
    const completeHandler = (e, i) => {
        settask(task.map((task, index) => index === i ?  { ...task, completed: !task.completed } : task));
    }
         
    const deletehandler = (e, i) => {
            
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
              settask(task.filter((task, index) => index !== i));
            }
          };

    let rendertask = (
        <h1 className="text-orange-500 text-3xl font-extrabold text-center mt-10">No Pending Task</h1>
    );
    if(task.length > 0) {
       rendertask = task.map((task , index) => (
           <li key = {index} className="mb-5 flex justify-between items-center border rounded-xl p-5">
           <div className="flex items-center">
           <div onClick={(e) => completeHandler(e, index)}  className={`${task.completed ? "bg-green-400" : "border border-orange-600"} mr-4 rounded-full w-[30px] h-[30px]`}></div>
               <h1 className={`${task.completed ? "line-through" : " "} text-2xl font-extrabold text-yellow-100`}>
                   {task.title}
               </h1>
           </div>
           <div className="flex gap-3 text-2xl text-yellow-100">
               <i className="ri-file-edit-line"></i>
               <i onClick={(e) => deletehandler(e, index)} className="ri-delete-bin-3-line"></i>
           </div>
       </li>
       ));
     
    };

  return (
    
        <ul className="list-none w-[25%] ">
               { rendertask}
          </ul>
   
  )
}

export default Showtask