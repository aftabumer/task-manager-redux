
import {
    ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_FAILURE,
    UPDATE_TASK, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILURE,
    DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE,    
} from '../constants'

// export const addTa  sk = (payload) => {
//     return {
//         type: ADD_TASK,
//         payload 
//     }
// }



export class taskAction {
    /////////////////
    static addTask(payload) {
        return {
            type: ADD_TASK,
            payload
        }
    }

    static addTaskSuccess(payload) {
        return {
            type: ADD_TASK_SUCCESS,
            payload
        }
    }

    static addTaskFailure(error) {
        return {
            type: ADD_TASK_FAILURE,
            error
        }
    }
    ////////////////
    static updateTask(payload) {
        return {
            type: UPDATE_TASK,
            payload
        }
    }

    static updateTaskSuccess(payload) {
        return {
            type: UPDATE_TASK_SUCCESS,
            payload
        }
    }

    static updateTaskFailure(error) {
        return {
            type: UPDATE_TASK_FAILURE,
            error
        }
    }

    ////////////////
    static deleteTask (payload) {
        return {
            type: DELETE_TASK,
            payload
        }
    }

    static deleteTaskSuccess (payload) {
        return {
            type: DELETE_TASK_SUCCESS,
            payload
        }
    }

    static deleteTaskFailure (payload) {
        return {
            type: DELETE_TASK_FAILURE,
            payload
        }
    }
}