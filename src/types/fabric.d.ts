
declare module 'fabric' {
  export class Canvas {
    constructor(
      element: HTMLCanvasElement,
      options?: {
        width?: number;
        height?: number;
        backgroundColor?: string;
      }
    );
    
    add(object: Object): Canvas;
    remove(object: Object): Canvas;
    clear(): Canvas;
    renderAll(): void;
    dispose(): void;
    setActiveObject(object: Object): Canvas;
    getActiveObject(): Object | null;
    discardActiveObject(): Canvas;
    width: number | undefined;
    height: number | undefined;
    backgroundColor: string | undefined;
    on(event: string, handler: Function): void;
    freeDrawingBrush: {
      color: string;
      width: number;
    };
    isDrawingMode: boolean;
    toDataURL(options?: { format?: string; quality?: number }): string;
  }

  export class Object {
    set(properties: any): Object;
    get(property: string): any;
    setCoords(): void;
    canvas?: Canvas;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    scaleX?: number;
    scaleY?: number;
    opacity?: number;
    angle?: number;
    flipX?: boolean;
    flipY?: boolean;
    originX?: string;
    originY?: string;
  }

  export class Image extends Object {
    static fromURL(
      url: string, 
      callback: (image: Image) => void,
      options?: any
    ): void;
    
    // Add methods used in code
    setScaleX(value: number): Image;
    setScaleY(value: number): Image;
    set(properties: any): Image;
  }
}
