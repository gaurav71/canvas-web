import React from 'react'
import { Rect } from 'react-konva'
import { ShapeType } from '../../../generated/graphql'
import { ShapeContextType, useShapeContext } from '../context'

interface RectPropsType {
  shape: ShapeType;
}

const RectWrapper: React.FC<RectPropsType> = ({ shape: {_id, type, attributes } }) => {

  const { handleDragEnd } = useShapeContext() as ShapeContextType

  return (
    <Rect
      id={_id}
      x={attributes.x}
      y={attributes.y}
      width={attributes.width}
      height={attributes.height}
      fill={attributes.fill}
      draggable={true}
      shadowBlur={10}
      onDragEnd={handleDragEnd as any}
    />
  )
}

export default RectWrapper