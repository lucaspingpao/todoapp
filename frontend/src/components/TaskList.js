import { useState, useEffect } from 'react';
import Task from './Task';

export default function TaskList() {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
      const getTasks = () => {
        try {
          fetch("http://localhost:8000/tasks")
          .then(response => response.json())
          .then(data => setTasks(data))
        } catch (error) {
          console.log(error.message)
        }
      };
      getTasks();
    }, [])
  
    return (
      <div>
        <h2>Task List</h2>
        <div className="task-list">
          <div className="task">
              <div>Task</div>
              <div>Edit</div>
              <div>Priority</div>
              <div>Delete</div>
          </div>
          {tasks && tasks.map(task =>
            <Task
              id={task.taskid}
              name={task.taskname}
              priority={task.prioritylevel}
              date={task.date}
            />
          )}
        </div>
      </div>
    );
}