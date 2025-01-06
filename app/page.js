'use client';

import React, { useState } from "react";

function List() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task && description) {
      setTasks([...tasks, { task, description }]);
      setTask("");
      setDescription("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1 className="text-white bg-slate-900 text-center font-bold text-7xl py-6">
        Todo List
      </h1>
      <form className="px-12 mt-6" onSubmit={addTask}>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            className="text-2xl border-solid p-5 px-4 py-2 text-center rounded-lg w-1/4"
            placeholder="Enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            className="text-2xl border-solid p-5 px-4 py-2 text-center rounded-lg w-3/4"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-center space-x-16 bg-slate-900 p-4 rounded-lg w-full m-0">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 text-xl"
          >
            ADD TASK
          </button>
        </div>
      </form>

      <div className="px-12 mt-6">
        {tasks.length > 0 ? (
          <div className="space-y-4">
            {tasks.map((item, index) => (
              <div
                key={index}
                className="flex justify-between bg-gray-200 p-4 rounded-lg"
              >
                <div>
                  <h3 className="text-2xl font-semibold">{item.task}</h3>
                  <p className="text-xl">{item.description}</p>
                </div>
                <button
                  onClick={() => removeTask(index)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">No tasks yet!</p>
        )}
      </div>
    </>
  );
}

export default List;
