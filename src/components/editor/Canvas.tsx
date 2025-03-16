import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

interface CanvasProps {
  setSelectedObject: (object: fabric.Object | null) => void;
}

const Canvas = ({ setSelectedObject }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas | null>(null); // 🔥 Ensure proper typing

  // Initialize Fabric canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 540,
      height: 540,
      backgroundColor: "#f5f5f5",
    });

    // Handle object selection to update controls
    canvas.on("selection:created", (e) => {
      setSelectedObject(e.selected ? e.selected[0] : null);
    });

    canvas.on("selection:updated", (e) => {
      setSelectedObject(e.selected ? e.selected[0] : null);
    });

    canvas.on("selection:cleared", () => {
      setSelectedObject(null);
    });

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, [setSelectedObject]);

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!fabricCanvas) return;

    const file = e.target.files?.[0];
    if (!file) return;

    // Ensure it's an image
    if (!file.type.match(/image.*/)) {
      toast.error("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (f) => {
      const data = f.target?.result;
      if (!data) return;

      // Load image onto the canvas
      fabric.Image.fromURL(data as string, (img) => {
        const canvas = fabricCanvas;
        const scale = Math.min(
          (canvas.width! - 20) / img.width!,
          (canvas.height! - 20) / img.height!
        );

        img.set({
          scaleX: scale,
          scaleY: scale,
          left: canvas.width! / 2,
          top: canvas.height! / 2,
          originX: "center",
          originY: "center",
        });

        canvas.add(img);
        canvas.renderAll();
        canvas.setActiveObject(img);
        setSelectedObject(img);
        toast.success("Image uploaded successfully");
      });
    };

    reader.readAsDataURL(file);
    e.target.value = ""; // Reset file input
  };

  // Drag events styling
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-primary");
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-primary");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-primary");

    if (!fabricCanvas) return;

    const file = e.dataTransfer.files[0];
    if (!file) return;

    // Ensure it's an image
    if (!file.type.match(/image.*/)) {
      toast.error("Please drop an image file");
      return;
    }

    const reader = new FileReader();

    reader.onload = (f) => {
      const data = f.target?.result;
      if (!data) return;

      // Load dropped image onto the canvas
      fabric.Image.fromURL(data as string, (img) => {
        const canvas = fabricCanvas;
        const scale = Math.min(
          (canvas.width! - 20) / img.width!,
          (canvas.height! - 20) / img.height!
        );

        img.set({
          scaleX: scale,
          scaleY: scale,
          left: canvas.width! / 2,
          top: canvas.height! / 2,
          originX: "center",
          originY: "center",
        });

        canvas.add(img);
        canvas.renderAll();
        canvas.setActiveObject(img);
        setSelectedObject(img);
        toast.success("Image dropped successfully");
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Canvas container */}
      <div className="relative border border-dashed border-border rounded-lg overflow-hidden shadow-lg bg-white">
        <canvas ref={canvasRef} />

        {fabricCanvas && fabricCanvas.getObjects().length === 0 && (
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
    <ImageIcon className="w-12 h-12 text-gray-400 mb-4" />
    <p className="text-gray-500 text-center">Choose a file or drag it here.</p>
  </div>
)}


        {/* Display canvas size */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          540p × 540p
        </div>
      </div>

      {/* Buttons for uploading and clearing canvas */}
      <div className="mt-4 flex items-center gap-2">
        <Button variant="outline" className="relative">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileUpload}
            accept="image/*"
          />
          <Upload className="mr-2 h-4 w-4" />
          Upload Image
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            if (fabricCanvas) {
              fabricCanvas.clear();
              fabricCanvas.backgroundColor = "#f5f5f5";
              fabricCanvas.renderAll();
              setSelectedObject(null);
              toast.success("Canvas cleared");
            }
          }}
        >
          Clear Canvas
        </Button>
      </div>
    </div>
  );
};

export default Canvas;
