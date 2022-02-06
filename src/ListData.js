import React from 'react';

function ListData(props) {
    const students=[{name:'Abhi'},{name:'Ravi'},{name:'Rahul'}]
    //const StudenList=   students.map(name=><h2>{name}</h2>)
    return (
        <div>
            {
              students.map(stu=><h2>{stu.name}</h2>)
            }
            
        </div>
    );
}

export default ListData;