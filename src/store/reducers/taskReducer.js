import {
  ADD_TASK,ADD_TASK_SUCCESS,ADD_TASK_FAILURE,
  UPDATE_TASK,UPDATE_TASK_SUCCESS,UPDATE_TASK_FAILURE,
  DELETE_TASK,DELETE_TASK_SUCCESS,DELETE_TASK_FAILURE
} from "../constants";

const initialState = {
  tasks: [],
  getTaskLoader: false,
  getTaskError: null
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    ///////////////////////
    
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        getTaskLoader: false,
        getTaskError: null
      };
      
      case DELETE_TASK:
        return {
          
          ...state,
          tasks: [...state.tasks.splice(0,action.payload), ...state.tasks.splice(1)],
          lastUpdateed:Date.now()
        };

    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        getTaskLoader: true,
        getTaskError: null
      };

    case ADD_TASK_FAILURE:
      return {
        ...state,
        tasks: null,
        getTaskLoader: false,
        getTaskError: "Can not Get Task"
      };

    case UPDATE_TASK:
      return {};

    case UPDATE_TASK_SUCCESS:
      return {};

    case UPDATE_TASK_FAILURE:
      return {};


    case DELETE_TASK_SUCCESS:
      return {};

    case DELETE_TASK_FAILURE:
      return {};

    default:
      return state;
  }
}
