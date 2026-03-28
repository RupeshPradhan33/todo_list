import React, { useState } from 'react';

const Home = () => {
  return (
    <div className='container'>
      <form >
        <input type="text" placeholder='Title' />
        <textarea placeholder='Description'></textarea>
        
        <button type='submit'>ADD</button>


      </form>

    </div>
  );
};

export default Home;