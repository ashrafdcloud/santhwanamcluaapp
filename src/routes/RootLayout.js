import React from 'react'
import { Outlet, Link} from "react-router-dom";
import { ThemeProvider } from '../components/ThemeContext';
import Themebar from '../components/Themebar';

function RootLayout() {
    return (
      <ThemeProvider>
        <>
        <header>
          <span>Santhwanam Club Athanikkal </span>
          <nav>
            <ul className='navlinks'>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/about`}>Patinets</Link>
              </li>
              <li>
                <Link to={`/`}>Batches</Link>
              </li>
              <li>
                <Link to={`/student`}>Students</Link>
              </li>
              <li>
                <Link to={`/employee`}>Employees</Link>
              </li>
              <li>
                <Link to={`/product/products`}>Products</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className='main-continer'>
        <Outlet />
        </div>
        <Themebar/>
        <footer></footer>
     </>
     </ThemeProvider>
    )
}

export default RootLayout
