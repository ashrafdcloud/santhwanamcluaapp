import React from 'react'
import { useLoaderData } from "react-router-dom";
import EmployeeList from '../components/EmployeeList';



export async function loader() {
    const res = await fetch('http://localhost:4000/student/students');
    const studentdata = await res.json();
    return { studentdata }
}

function StudentPage(props) {
    const { studentdata } = useLoaderData();
    console.log(studentdata);

    return (
        <main>
            <section>
                <h2>Students List</h2>
                <ul className='recording-list'>
                    {
                        studentdata.map((details, index) => {

                            return (


                               
                                    <div class="card">
                                        <div class="container">
                                            <h4><b>{details.fullname}</b></h4>
                                            <p>{details.place}</p>
                                            <p>{details.name}</p>
                                            
                                        </div>
                                        </div>
                               

                                
                            )
                        })
                    }

                </ul>
                    <EmployeeList/>
            </section>
        </main>
    )
}

export default StudentPage
