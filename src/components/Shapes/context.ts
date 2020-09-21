import React, { createContext, useContext } from "react";

export interface ShapeContextType {
  handleDragStart: Function;
  handleDragEnd: Function;
  handleDragging: Function;
  isDragging: boolean;
  setIsDragging: Function;
}

export const ShapeContext = React.createContext<ShapeContextType | null>(null)

export const useShapeContext = () => useContext(ShapeContext)
