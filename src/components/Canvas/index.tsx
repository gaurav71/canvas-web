import React, { useEffect, useRef, useState } from 'react'
import { Stage, Layer } from 'react-konva';
import { useParams } from 'react-router-dom';
import { ShapeType, useCreateShapeMutation, useDeleteShapeMutation, useGetShapesLazyQuery, useUpdateShapeMutation } from '../../generated/graphql';
import PageLoader from '../@common/PageLoader';
import AntWrapper from '../AntWrapper';
import Shape from '../Shapes';
import { Container } from './styled';

const Canvas = () => {

  const [getShapes, { loading: gettingShapes, error, data: shapesData }] = useGetShapesLazyQuery()
  const [createShape, { loading: creatingShape, data: createShapeData }] = useCreateShapeMutation()
  const [deleteShape] = useDeleteShapeMutation()
  const [updateShapeMutation] = useUpdateShapeMutation()
  const [state, setState] = useState<ShapeType[] | null>(null)
  const { id }: {id: string} = useParams()
  const containerRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    getShapes({ variables: { canvasId: id } })
  }, [])

  useEffect(() => {
    if (shapesData?.getShapes) {
      setState(shapesData.getShapes)
    } 
  }, [shapesData])

  useEffect(() => {
    if (createShapeData?.createShape) {
      setState((_state) => {
        if (!_state) {
          return [createShapeData.createShape]
        }
        return [..._state, createShapeData.createShape]
      })
    } 
  }, [createShapeData])

  const addShape = ({ attributes, type, text }: ShapeType) => {
    if (creatingShape) return
    createShape({ variables: { canvasId: id, attributes, type, text } })
  }

  const updateShape = (_id: string, { attributes, text }: ShapeType) => {
    updateShapeMutation({ variables: { _id, attributes, text } })
    setState((_state: any) => _state?.map((shape: ShapeType) => {
      if (_id === shape._id) {
        return {
          ...shape,
          attributes,
          text
        }
      } else {
        return shape
      }
    }))
  }

  const removeShape = (_id: string) => {
    deleteShape({ variables: { _id } })
  }

  const loader = gettingShapes || !state || creatingShape

  const width = containerRef.current ? containerRef.current.clientHeight : 0
  const height = containerRef.current ? containerRef.current.clientWidth : 0

  return (
    <AntWrapper 
      toolbar={true}
      addShape={addShape}
    >
      <Container ref={containerRef}>
        {loader ? <PageLoader /> : state &&
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {state.map((shape) => (
              <Shape 
                key={shape._id} 
                shape={shape}
                updateShape={updateShape} 
                removeShape={removeShape}
              />
            ))}
          </Layer>
        </Stage>}
      </Container>
    </AntWrapper>
  );
}

export default Canvas