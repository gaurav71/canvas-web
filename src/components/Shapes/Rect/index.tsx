import React from 'react'
import { Rect } from 'react-konva'
import { ShapeType } from '../../../generated/graphql'

interface RectPropsType {
  shape: ShapeType;
  handleDragEnd: Function
}

const RectWrapper: React.FC<RectPropsType> = ({ shape: {_id, type, attributes }, handleDragEnd }) => {

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