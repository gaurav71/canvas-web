import { ShapeType } from "../../generated/graphql"

export const actionTypes = {
  SET_DATA: 'SET_DATA',
  ADD_SHAPE: 'ADD_SHAPE',
  DELETE_SHAPE: 'DELETE_SHAPE',
  UPDATE_SHAPE: 'UPDATE_SHAPE'
} as const

const types = Object.values(actionTypes)

interface ActionType {
  type: typeof types[number];
  payload: any;
}

interface StateType {
  shapesData: ShapeType[]
}

export const initialState: StateType = {
  shapesData: []
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  const { type, payload } = action

  switch(type) {
    case actionTypes.SET_DATA: {

      return {
        ...state,
        shapesData: payload
      }
    }

    case actionTypes.ADD_SHAPE: {

      return {
        ...state,
        shapesData: [...state.shapesData, payload]
      }
    }

    case actionTypes.UPDATE_SHAPE: {
      const shapesData = state.shapesData.map((shape) => shape._id === payload._id ? {...shape, ...payload} : shape)

      return {
        ...state,
        shapesData
      }
    }

    case actionTypes.DELETE_SHAPE: {
      const shapesData = state.shapesData.filter(shape => shape._id !== payload._id)

      return {
        ...state,
        shapesData
      }
    }

    default: return state
  }

}