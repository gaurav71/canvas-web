import React from 'react'
import { Circle } from 'react-konva';
import { ShapeType } from '../../../generated/graphql'
import { ShapeContextType, useShapeContext } from '../context';

interface RectPropsType {
  shape: ShapeType;
}

const CircleWrapper: React.FC<RectPropsType> = ({ shape: {_id, attributes } }) => {

  const { handleDragEnd } = useShapeContext() as ShapeContextType

  return (
    <Circle 
      id={_id}
      {...attributes}
      tension={0.5}
      closed
      stroke="black"
      draggable={true}
      onDragEnd={handleDragEnd as any}
    />
  )
}

export default CircleWrapper