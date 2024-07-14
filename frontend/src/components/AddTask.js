import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function AddTask() {
    const [taskName, setTaskName] = useState("")
    const [priorityLevel, setPriorityLevel] = useState("High");

    const handleName = (event) => {
      setTaskName(event.target.value);
    }

    const handlePriority = (event) => {
      setPriorityLevel(event.target.value);
    }

    const handleSubmit = async (event) => {
      console.log('here')
      event.preventDefault();
      try {
        const response = await fetch("http://localhost:8000/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ taskName, priorityLevel })
        });
        window.location.reload();
      } catch (error) {
        console.log(error.message);
      }
    }
  
    return (
      <div>
        <h2>Add New Task</h2>

        <form onSubmit={handleSubmit} className="update-task">
          
          <TextField
            className='task-input'
            value={taskName}
            placeholder="Type in your task here..."
            label="Task Name"
            onChange={handleName}
          />

          <fieldset>
            <legend>Priority:</legend>
            <div>
              <input
                type="radio"
                name="priority"
                id="Low"
                value="Low"
                checked={priorityLevel === "Low"}
                onChange={handlePriority}
              />
              <label for="Low">Low</label>
            </div>
            <div>
              <input
                type="radio"
                name="priority"
                id="Medium"
                value="Medium"
                checked={priorityLevel === "Medium"}
                onChange={handlePriority}
              />
              <label for="Medium">Medium</label>
            </div>
            <div>
              <input
                type="radio"
                name="priority"
                id="High"
                value="High"
                checked={priorityLevel === "High"}
                onChange={handlePriority}
              />
              <label for="High">High</label>
            </div>
          </fieldset>

          <Button
            variant="contained"
            disabled={!taskName}
            type="submit"
          >
            Add New Task
          </Button>
          
        </form>
      </div>
    );
}