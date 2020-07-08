import API from "../api";
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_TASKS, DELETE_TASK, ADD_TASK } from './types';

// GET LEADS
export const getTasks = () => (dispatch, getState) => {
    API
        .get('/tasks', tokenConfig(getState))
        .then((res) => {
            console.log(res)
            dispatch({
                type: GET_TASKS,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE LEAD
export const deleteTask = (id) => (dispatch, getState) => {
    API
        .delete(`/tasks/${id}`, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({ deleteLead: 'Task Deleted' }));
            dispatch({
                type: DELETE_TASK,
                payload: id,
            });
        })
        .catch((err) => console.log(err));
};

// ADD LEAD
export const addTask = (task) => (dispatch, getState) => {
    API
        .post('/tasks', task, tokenConfig(getState))
        .then((res) => {
            console.log("submit", res)
            dispatch(createMessage({ addLead: 'Task Added' }));
            dispatch({
                type: ADD_TASK,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
