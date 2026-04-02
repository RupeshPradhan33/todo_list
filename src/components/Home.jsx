import React, { useState } from 'react';

import Task from './Task';

const Home = () => {

  const [tasks, setTasks] = useState([]);  // State to hold the list of tasks(using like array)
  const [title, setTitle] = useState('');  // State to hold the title of a new task
  const [description, setDescription] = useState('');  // State to hold the description of a new task




  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, { title, description }]);  // Add a new task to the list of tasks (using like array)

  };

  return (
    <div className='container'>
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}>

        </textarea>

        <button type='submit'>ADD</button>


      </form>

      {tasks.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default Home;