import React from 'react'
import { Circle } from 'react-konva';
import { ShapeType } from '../../../generated/graphql'

interface RectPropsType {
  shape: ShapeType;
  handleDragEnd: Function
}


const CircleWrapper: React.FC<RectPropsType> = ({ shape: {_id, type, attributes }, handleDragEnd }) => {
  console.log(attributes)
  return (
    <Circle 
      id={_id}
      x={attributes.x}
      y={attributes.y}
      radius={attributes.radius}
      points={attributes.points}
      tension={0.5}
      closed
      stroke="black"
      draggable={true}
      onDragEnd={handleDragEnd as any}
    />
  )
}

export default CircleWrapper