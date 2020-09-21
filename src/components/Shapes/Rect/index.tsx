import React from 'react'
import { Rect } from 'react-konva'
import { ShapeType } from '../../../generated/graphql'
import { ShapeContextType, useShapeContext } from '../context'

interface RectPropsType {
  shape: ShapeType;
}

const RectWrapper: React.FC<RectPropsType> = ({ shape: {_id, attributes } }) => {

  const { handleDragEnd, handleDragging } = useShapeContext() as ShapeContextType

  return (
    <Rect
      id={_id}
      {...attributes}
      draggable={true}
      shadowBlur={10}
      onDragEnd={handleDragEnd as any}
      onDragMove={(evt) => handleDragging(evt)}
    />
  )
}

export default RectWrapper