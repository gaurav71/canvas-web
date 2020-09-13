import React from 'react'
import { ShapeType } from '../../generated/graphql'
import Circle from './Circle'
import Rect from './Rect'

interface ShapePropsType {
  updateShape: Function;
  removeShape: Function;
  shape: ShapeType;
}

const Shape: React.FC<ShapePropsType> = ({ shape, updateShape, removeShape }) => {

  console.log("shape")

  const { type } = shape

  const handleDragStart = (e: any) => {
    const id = e.target.id();
  };

  const handleDragEnd = (e: any) => {
    console.log(e)
    const id = e.target.id();
    updateShape(id, { attributes: e.target.attrs })
  };

  if (type === 'rect') {
    return <Rect handleDragEnd={handleDragEnd} shape={shape}/>
  }

  else if (type === 'circle') {
    return <Circle handleDragEnd={handleDragEnd} shape={shape} />
  }

  return (
    <>Not Found</>
  )
}

export default Shape