import React from 'react';


export default function TaskDetails(props){
    function handleTaskChange(event){
        props.editItem(props.index, event.target.value);
    }
    
    function handleCheckChange(){
        props.checkItem(props.index);
    }

    function handleTaskDelete(){
        props.deleteItem(props.index)
    }

    console.log(props);
    return(
        <div>
            <input value={props.task.title} onChange={handleTaskChange} />
            <button onClick={handleTaskDelete}>Delete</button>
            <input type="checkbox" checked={props.task.checked} onClick={handleCheckChange} />
        </div>
    );
}
