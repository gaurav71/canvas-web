import React, { useEffect, useReducer, useRef, useState } from 'react'
import socketIOClient from "socket.io-client"
import { Stage, Layer } from 'react-konva'
import { useParams } from 'react-router-dom'

import { 
  ShapeInput,
  ShapeType, 
  UpdateShapeInput, 
  useCreateShapeMutation, 
  useDeleteShapeMutation, 
  useGetShapesLazyQuery, 
  useUpdateShapeMutation 
} from '../../generated/graphql'

import { socketIOurl } from '../../config'

import AntWrapper from '../AntWrapper'
import Shape from '../Shapes'

import { CanvasContext, CanvasContextType } from './context'
import { actionTypes, initialState, reducer } from './reducer'
import { Container } from './styled'

const events = {
  CONNECTED: 'CONNECTED',
  JOIN_CONVAS_ROOM: 'JOIN_CONVAS_ROOM',
  CANVAS_SHAPE_CHANGE: 'CANVAS_SHAPE_CHANGE',
  SHAPE_ADDED: 'SHAPE_ADDED',
  SHAPE_UPDATED: 'SHAPE_UPDATED',
  SHAPE_DELETED: 'SHAPE_DELETED'
} as const


interface ParamsType {
  id: string
}

interface CanvasPropsType {}

const Canvas: React.FC<CanvasPropsType> = () => {

  const [getShapesMutation, { loading: gettingShapes, data: shapesData }] = useGetShapesLazyQuery()
  const [createShapeMutation, { loading: creatingShape, data: createShapeData }] = useCreateShapeMutation()
  
  const [deleteShapeMutation] = useDeleteShapeMutation()
  const [updateShapeMutation] = useUpdateShapeMutation()

  const [state, dispatch] = useReducer(reducer, initialState)
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null)

  const { id }: ParamsType = useParams()
  const containerRef = useRef<HTMLInputElement>(null)


  useEffect(() => {
    const socketConnection = socketIOClient(`${socketIOurl}`);

    socketConnection.on(events.CONNECTED, (data: string) => {
      console.log(data)
      setSocket(socketConnection)
      socketConnection.emit(events.JOIN_CONVAS_ROOM, id)
      socketConnection.on(events.SHAPE_ADDED, shapeAdded)
      socketConnection.on(events.SHAPE_UPDATED, shapeUpdated)
      socketConnection.on(events.SHAPE_DELETED, shapeDeleted)
    });
  }, []);


  useEffect(() => {
    getShapesMutation({ variables: { canvasId: id } })
  }, [])


  useEffect(() => {
    if (shapesData?.getShapes && state.shapesData.length === 0) {
      dispatch({
        type: actionTypes.SET_DATA,
        payload: shapesData.getShapes
      })
    } 
  }, [shapesData])


  useEffect(() => {
    if (createShapeData?.createShape) {
      shapeAdded(createShapeData?.createShape)
    } 
  }, [createShapeData])


  const addShape = (shape: ShapeInput) => {

    createShapeMutation({ variables: shape })

    if (socket) {
      socket.emit(events.SHAPE_ADDED, shape)
    }
  }


  const updateShape = (_id: string, shape: UpdateShapeInput) => {

    const data = {
      attributes: {...shape.attributes},
      _id
    }

    updateShapeMutation({ variables: data })
    shapeUpdated(data)
  }


  const removeShape = (_id: string) => {

    deleteShapeMutation({ variables: { _id } })
    shapeDeleted(_id)

    if (socket) {
      socket.emit(events.SHAPE_DELETED, _id)
    }
  }


  const shapeAdded = (newShape: ShapeType) => {

    dispatch({
      type: actionTypes.ADD_SHAPE,
      payload: newShape
    })

  }


  const shapeUpdated = (updatedShape: Partial<ShapeType>) => {
    console.log({updatedShape})
    dispatch({
      type: actionTypes.UPDATE_SHAPE,
      payload: updatedShape
    })
  }

  
  const shapeDeleted = (_id: string) => {

    dispatch({
      type: actionTypes.DELETE_SHAPE,
      payload: _id
    })
  }


  const updateShapeBySocket = (_id: string, shape: UpdateShapeInput) => {

    if (socket) {

      const data = {
        shape: {...shape, _id},
        canvasId: id
      } as Partial<ShapeType>
      console.log({data})
      socket.emit(events.CANVAS_SHAPE_CHANGE, data)
    }
  }
  
  const canvasLoader = gettingShapes || !state || creatingShape

  const contextValue = {
    canvasId: id,
    canvasLoader,
    addShape, 
    updateShape, 
    removeShape, 
    updateShapeBySocket
  } as CanvasContextType

  return (
    <CanvasContext.Provider value={contextValue}>
      <AntWrapper toolbar={true} loader={canvasLoader}>

        <Container ref={containerRef}>
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>

              <CanvasContext.Provider value={contextValue}>
                {state.shapesData.map((shape) => (
                <Shape 
                  key={shape._id} 
                  shape={shape}
                />))}
              </CanvasContext.Provider>

            </Layer>
          </Stage>
        </Container>

      </AntWrapper>
    </CanvasContext.Provider>
  )
}

export default Canvas