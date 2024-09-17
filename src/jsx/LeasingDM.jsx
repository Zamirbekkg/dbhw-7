import React from 'react';
// import { ReactComponent as Logo } from './';

const LeasingDM = () => {
    return (
    <header>
        <div className='conteiner'>
          <nav className='haeder-nav'>
            <a href="NEW-CARS">NEW CARS</a>
            <a href="NEW-CARS">PRE-OWNED CARS</a>
            <a href="NEW-CARS">FINANCE</a>
            <a href="NEW-CARS">LEASE VS BUY</a>
            <a href="NEW-CARS">CONTACT US</a>
          </nav>  
         {/* <div>
            <Logo />
         </div> */}
        </div>
       
        <div className='From'>
            <h1 className='text'>Leasing From D&M</h1>
        </div>
        <button className='btn'>FIND A CAR</button>
    </header>
    );
}

export default LeasingDM;
