const Showtask = (props) => {
    const { task, settask } = props;
  
    const completeHandler = (e, i) => {
      settask(task.map((task, index) => index === i ? { ...task, completed: !task.completed } : task));
    };
  
    const toggleEditMode = (i) => {
      settask(task.map((task, index) => index === i ? { ...task, isEditing: !task.isEditing } : task));
    };
  
    const editedHandler = (e, i) => {
      const newTitle = e.target.value;
      settask(task.map((task, index) => index === i ? { ...task, title: newTitle } : task));
    };
  
    const deleteHandler = (e, i) => {
      if (task[i].completed || confirm("Are you sure you want to delete this task?")) {
        settask(task.filter((task, index) => index !== i));
      } else {
        alert("Task is not deleted");
      }
    };
  
    let renderTask = (
      <h1 className="text-orange-500 text-3xl font-extrabold text-center mt-10">No Pending Task</h1>
    );
  
    if (task.length > 0) {
      renderTask = task.map((task, index) => (
        <li key={index} className="mb-5 flex justify-between items-center border rounded-xl p-5">
          <div className="flex items-center">
            <div
              onClick={(e) => completeHandler(e, index)}
              className={`${task.completed ? "bg-green-400" : "border border-orange-600"} mr-4 rounded-full w-[30px] h-[30px]`}
            ></div>
            
           
            {task.isEditing ? (
              <input
                type="text"
                value={task.title}
                onChange={(e) => editedHandler(e, index)}
                className=" font-extrabold  text-2xl text-yellow-100 bg-transparent w-full border-b-2 border-yellow-100 focus:outline-none "
              />
            ) : (
              <h1 className={`${task.completed ? "line-through" : ""} text-2xl font-extrabold text-yellow-100`}>
                {task.title}
              </h1>
            )}
          </div>
          
          <div className="flex gap-3 text-2xl text-yellow-100">
            
            <i
              onClick={() => toggleEditMode(index)}
              className={task.isEditing ? "ri-save-line" : "ri-file-edit-line"}
            ></i>
            
            <i onClick={(e) => deleteHandler(e, index)} className="ri-delete-bin-3-line"></i>
          </div>
        </li>
      ));
      
    }
  
    return <ul className="list-none w-[25%]">{renderTask}</ul>;
  };
  
  export default Showtask;
  