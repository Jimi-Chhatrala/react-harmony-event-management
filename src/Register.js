import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export default function Register(){

    const [todoall, settodoall] = useState([]) 
    
    // const [title, settitle] = useState('') 

    // const [completed, setcompleted] = useState(0)
    
    useEffect(() => {    
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
                settodoall(response.data)
                // settitle(response.data.title);
        });
    }, []);

    return(
        <div>
            <h1>Register</h1>
            <div className='todolistdiv'>
        <Table responsive="sm" striped="columns" borderless hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoall.map((item)=>(
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{(item.completed)?"completed":"incomplete"}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
        </div>
    );
}