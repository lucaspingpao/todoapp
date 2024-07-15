import { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

export default function Task(props) {

    const [taskName, setTaskName] = useState(props.name);
    const [edit, setEdit] = useState(false);

    const handleEdit = (event) => {
        setTaskName(event.target.value);
    }
    
    const handleDone = async (id) => {
        setEdit(false);
        try {
            await fetch(`https://todoapp-backend-lucaspao.onrender.com/tasks/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ taskName })
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteTask = async (id) => {
        try {
            await fetch(`https://todoapp-backend-lucaspao.onrender.com/tasks/${id}`, {
                method: "DELETE"
            });
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className={"task " + props.priority}>
            {edit ?
                <TextField
                    className="edit-text"
                    variant="outlined"
                    value={taskName}
                    onChange={handleEdit}
                    size="small"
                />
                : <div>{taskName}</div>
            }
            
            {edit ?
                <IconButton onClick={() => handleDone(props.id)}>
                    <CheckIcon/>
                </IconButton>
                : 
                <IconButton onClick={() => setEdit(true)}>
                    <EditIcon/>
                </IconButton>
            }

            <div>{props.priority}</div>

            <IconButton onClick={() => deleteTask(props.id)}>
                <DeleteIcon/>
            </IconButton>
        </div>
    );
}