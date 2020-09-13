import React, { useContext } from "react"

export interface CanvasContextType {
  addShape: Function;
  updateShape: Function;
  deleteShape: Function; 
  canvasLoader: boolean;
}

export const CanvasContext = React.createContext<CanvasContextType | null>(null)

export const useCanvasContext = () => useContext(CanvasContext)