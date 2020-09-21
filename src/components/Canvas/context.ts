import { createContext, useContext } from "react"
import { ShapeInput, UpdateShapeInput } from "../../generated/graphql"

export interface CanvasContextType {
  canvasId: string;
  addShape: (shape: ShapeInput) => void;
  updateShape: (_id: string, shape: UpdateShapeInput) => void;
  removeShape: (_id: string) => void;
  updateShapeBySocket: (_id: string, shape: UpdateShapeInput) => void; 
  canvasLoader: boolean;
}

export const CanvasContext = createContext<CanvasContextType | null>(null)

export const useCanvasContext = () => useContext(CanvasContext)