import React from 'react'
import { useLoaderData } from "react-router-dom";

export async function loader({params}) {
    const res = await fetch(`http://localhost:4000/batches/${params.batchId}/recorded-sessions`);
    const recordedSessions = await res.json();
    return { recordedSessions }
}

function BatchPage(props) {
    const { recordedSessions } = useLoaderData();
    console.log(recordedSessions);

    return (
        <main>
            <section>
                <h2>Recorded Lives</h2>
                <ul className='recording-list'>
                    {
                        recordedSessions.map((session, index) => {

                            return (
                                <li className='recording' key={index}>
                                    <div className='recording-day'>
                                        <span className='recording-date'>12 </span>
                                        <span className='recording-month'>Oct</span>
                                    </div>
                                    <div>
                                    <h3>{session.name}</h3>
                                    <p>{session.description}</p>
                                    <ul className='tags-group'>
                                        <li className='tags'>Express</li>
                                        <li className='tags'>React</li>
                                    </ul>
                                    </div>
                                    <div className='watch-contain'>
                                    <li className='watch'>Watch Recording</li>
                                        <li className='pasword'>{session.password}</li>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </section>
        </main>
    )
}

export default BatchPage
