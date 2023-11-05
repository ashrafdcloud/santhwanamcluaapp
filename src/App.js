import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [batches, setBatches] = useState([
      {
        batch:'Angular Batch'
      },
      {
        batch:'Digital Marketing Batch'
      },
      {
        batch:'SEO Batch'
      },
      {
        batch:'Mern Stack Batch'
      },
      {
        batch:'Microsft Office Batch'
      },
      {
        batch:'E26 Batch'
      },



    ]
  )
  return (
 <>
    <header>
      <span>Santhwanam Club Athanikkal </span>
      <nav>
        <ul className='navlinks'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/batches/23'>Classes</a>
          </li>
          <li>
            <a href='/contact'>Contasct</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
      <h2>Batches</h2>
      <ul className='batchlist'>
        {
          batches.map((items,index)=>{
            return(
              <li className='batch'>
                  {items.batch}
              </li>
            )
          })
        }
      </ul>
      </section>
       
    </main>
    <footer></footer>
 </>
  );
}

export default App;
