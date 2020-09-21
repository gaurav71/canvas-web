import React, { useState } from 'react'

import { ShapeType } from '../../generated/graphql'

import { CanvasContextType, useCanvasContext } from '../Canvas/context'

import { ShapeContext, ShapeContextType } from './context'

import Rect from './Rect'
import Circle from './Circle'

interface ShapePropsType {
  shape: ShapeType;
}

const Shape: React.FC<ShapePropsType> = ({ shape }) => {
  
  const [isDragging, setIsDragging] = useState(false)
  const { updateShape, updateShapeBySocket } = useCanvasContext() as CanvasContextType
  const { type } = shape
  
  const handleDragStart = (e: any) => {
    const id = e.target.id();
    setIsDragging(true)
  }

  const handleDragging = (e: any) => {
    updateShapeBySocket(e.target.id(), e.target.attrs)
  }

  const handleDragEnd = (e: any) => {
    const id = e.target.id();
    setIsDragging(false)
    updateShape(id, { attributes: e.target.attrs })
  }

  const shapeContext: ShapeContextType = {
    handleDragStart,
    handleDragEnd,
    isDragging,
    setIsDragging,
    handleDragging
  }

  let renderShape = null 

  switch(type) {
    case 'rect': renderShape = <Rect shape={shape}/>; break;
    case 'circle': renderShape = <Circle shape={shape}/>; break;
  }

  return (
    <ShapeContext.Provider value={shapeContext}>
      {renderShape}
    </ShapeContext.Provider>
  )
}

export default Shape