import React, { useEffect, useState } from 'react';

import Task from './Task';

const Home = () => {

  const initialArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];  // Initial empty array to hold tasks

  const [tasks, setTasks] = useState(initialArray);  // State to hold the list of tasks(using like array)
  const [title, setTitle] = useState('');  // State to hold the title of a new task
  const [description, setDescription] = useState('');  // State to hold the description of a new task




  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, { title, description }]);  // Add a new task to the list of tasks (using like array)
    setTitle('');  // Clear the title input field
    setDescription('');  // Clear the description input field
  };



  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((val, i) => {
      return i !== index;  // Return true for all tasks except the one at the specified index
    });  // Create a new array without the task at the specified index

    console.log(filteredTasks);
    setTasks(filteredTasks);  // Update the state with the new array of tasks
  }


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Save the list of tasks to local storage whenever it changes
  }, [tasks]);

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
        <Task
          key={index} 
          title={item.title} 
          description={item.description} 
          deleteTask={deleteTask} 
          index={index} />
      ))}
    </div>
  );
};

export default Home;