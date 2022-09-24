import React from 'react';

function ListData(props) {
    const students = [{ name: 'Abhi', email: "abhi@gmail.com" }, 
    { name: 'Ravi', email: "abhi@gmail.com" },
    { name: 'Rahul', email: "abhi@gmail.com"}]
//const StudenList=   students.map(name=><h2>{name}</h2>)
return (
    <div>
        {
            students.map(student =>
                <div>
                    <h2>{student.name}</h2>
                    <h3> {student.email}</h3>
                </div>
            )
        }

    </div>
);
}

export default ListData;