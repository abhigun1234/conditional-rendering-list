import React from 'react';

function Students(props) {
    let students=[{name:'ravi',subject:"react js"},{name:'kavi',subject:"view js"},
    {name:'mavi',subject:"angular js"}
    ,{name:'davi',subject:" Js"}]
    return (
        <div>
             {
              students.map(stu=><div><ul><li><h2>{stu.name}</h2></li></ul>
              <h3>{stu.subject}</h3></div>)
            }
            
        </div>
    );
}

export default Students;