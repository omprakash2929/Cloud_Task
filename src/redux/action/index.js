import axios from "axios";
import { ADDNEW_TASK, DELETE_Task,UPDATE_Task,ADDNEW_User } from "./type";
import { GetAll_Task} from "./type";

const API_URL = 'http://localhost:7000';

//!---------------------- AddNew_Task--------------------
export const addNewTask = (data)=> async(dispatch) =>{
    try {
    const result=  await  axios.post(`${API_URL}/task`,{data})
        dispatch({
            type: ADDNEW_TASK ,
            payload: result.data
        })
    } catch (error) {
        console.log('Error while calling addNewTask api', error.message)
    }
}

//!--------------------- Get_all_Task -------------------------
export const getAllTask = () => async (dispatch) =>{
    try {
        const result=  await  axios.get(`${API_URL}/task`);
        dispatch({
            type: GetAll_Task ,
            payload: result.data
        })

        } catch (error) {
            console.log('Error while calling Gettask api', error.message)
        }

}

//!------------------------- Delete_Task------------------------
export const deleteTask = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/task/${id}`);

        dispatch({ type: DELETE_Task , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTask API ', error.message);
    }
}

//!------------------------ Update_Task---------------------------
export const updateTask = (id, data) => async (dispatch) => {

    try {
        const res = await axios.put(`${API_URL}/task/${id}`, { data });

        dispatch({ type: UPDATE_Task  , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

export const addNewUser = (data)=> async(dispatch) =>{
    try {
    const result=  await  axios.post(`http://localhost:7000/api/createuser`,{data})
        dispatch({
            type:ADDNEW_User ,
            payload: result.data
        })
    } catch (error) {
        console.log('Error while calling addNewTask api', error.message)
    }
}