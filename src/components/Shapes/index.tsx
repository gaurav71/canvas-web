import React from 'react'
import { ShapeType } from '../../generated/graphql'
import { CanvasContextType, useCanvasContext } from '../Canvas/context'
import Circle from './Circle'
import { ShapeContext, ShapeContextType } from './context'
import Rect from './Rect'

interface ShapePropsType {
  shape: ShapeType;
}

const Shape: React.FC<ShapePropsType> = ({ shape }) => {

  const { updateShape } = useCanvasContext() as CanvasContextType

  const { type } = shape

  const handleDragStart = (e: any) => {
    const id = e.target.id();
  };

  const handleDragEnd = (e: any) => {
    const id = e.target.id();
    updateShape(id, { attributes: e.target.attrs })
  };

  const shapeContext: ShapeContextType = {
    handleDragStart,
    handleDragEnd
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