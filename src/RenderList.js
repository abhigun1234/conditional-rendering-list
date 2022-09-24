import React from 'react';

function RenderList(props) {
    const students = [{ name: 'Abhi', email: "abhi@gmail.com" }, 
    { name: 'Ravi', email: "abhi@gmail.com" },
    { name: 'Rahul', email: "abhi@gmail.com"}]
    return (
        <div>
            {

                students.map(student=>

                    <div>
                        {/* {student.name}
                        {student.email} */}

<table>
  <tr>
    <th>Name</th>
    <th>Email</th>

  </tr>
  <tr>
    <td>{student.name}</td>
    <td>{student.email}</td>

  </tr>
  
</table>
                        </div>
                )
            }
            
        </div>
    );
}

export default RenderList;