import React from 'react'
import { useState } from 'react';
import { Outlet, Link, useLoaderData} from "react-router-dom";



export async function loader() {
    const res = await fetch('http://localhost:4000/batches');
    const batches = await res.json();
    return {batches}
  }

function HomePage(props) {
    // const [batches, setBatches] = useState([
    //     {
    //       batch:'Angular Batch',
    //       id:'e20'
    //     },
    //     {
    //       batch:'Digital Marketing Batch',
    //       id:'e21'
    //     },
    //     {
    //       batch:'SEO Batch',
    //       id:'e22'
    //     },
    //     {
    //       batch:'Mern Stack Batch',
    //       id:'e23'
    //     },
    //     {
    //       batch:'Microsft Office Batch',
    //       id:'e24'
    //     },
    //     {
    //       batch:'E26 Batch',
    //       id:'e25'
    //     },
  
    //   ]
    // )
    const {batches} = useLoaderData();

    return (
        <main>
        <section>
        <h2>Batches</h2>
        <ul className='batchlist'>
          {
            batches.map((items,index)=>{
              return(
               <Link to={'/batches/'+items._id }>
                <li className='batch'>
                    {items.name}
                </li>
               </Link>
              )
            })
          }
        </ul>
        </section>
         
      </main>
    )
}

export default HomePage
