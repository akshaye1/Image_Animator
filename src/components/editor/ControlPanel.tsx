
import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Move, 
  Palette, 
  RotateCw, 
  Image, 
  Type, 
  Settings 
} from "lucide-react";
import { toast } from "sonner";
import { Object as FabricObject } from "fabric";

interface ControlPanelProps {
  selectedObject: FabricObject | null;
}

const ControlPanel = ({ selectedObject }: ControlPanelProps) => {
  const [opacity, setOpacity] = useState(100);
  const [angle, setAngle] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);

  // Update control values when selected object changes
  useEffect(() => {
    if (selectedObject) {
      setOpacity(selectedObject.opacity! * 100);
      setAngle(selectedObject.angle || 0);
      setScaleX(selectedObject.scaleX || 1);
      setScaleY(selectedObject.scaleY || 1);
      setFlipX(selectedObject.flipX || false);
      setFlipY(selectedObject.flipY || false);
    } else {
      // Reset values when no object is selected
      setOpacity(100);
      setAngle(0);
      setScaleX(1);
      setScaleY(1);
      setFlipX(false);
      setFlipY(false);
    }
  }, [selectedObject]);

  // Update object opacity
  const handleOpacityChange = (value: number[]) => {
    if (!selectedObject) return;
    
    const newOpacity = value[0];
    setOpacity(newOpacity);
    selectedObject.set({ opacity: newOpacity / 100 });
    selectedObject.canvas?.renderAll();
  };

  // Update object rotation
  const handleAngleChange = (value: number[]) => {
    if (!selectedObject) return;
    
    const newAngle = value[0];
    setAngle(newAngle);
    selectedObject.set({ angle: newAngle });
    selectedObject.canvas?.renderAll();
  };

  // Update object scale
  const handleScaleXChange = (value: number[]) => {
    if (!selectedObject) return;
    
    const newScaleX = value[0];
    setScaleX(newScaleX);
    selectedObject.set({ scaleX: newScaleX });
    selectedObject.canvas?.renderAll();
  };

  const handleScaleYChange = (value: number[]) => {
    if (!selectedObject) return;
    
    const newScaleY = value[0];
    setScaleY(newScaleY);
    selectedObject.set({ scaleY: newScaleY });
    selectedObject.canvas?.renderAll();
  };

  // Handle flip toggles
  const handleFlipX = (checked: boolean) => {
    if (!selectedObject) return;
    
    setFlipX(checked);
    selectedObject.set({ flipX: checked });
    selectedObject.canvas?.renderAll();
  };

  const handleFlipY = (checked: boolean) => {
    if (!selectedObject) return;
    
    setFlipY(checked);
    selectedObject.set({ flipY: checked });
    selectedObject.canvas?.renderAll();
  };

  const handleExport = () => {
    if (!selectedObject || !selectedObject.canvas) {
      toast.error("No canvas to export");
      return;
    }

    const canvas = selectedObject.canvas;
    
    try {
      const dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      
      const link = document.createElement('a');
      link.download = 'flow-export.png';
      link.href = dataUrl;
      link.click();
      
      toast.success("Image exported successfully");
    } catch (error) {
      toast.error("Failed to export image");
      console.error(error);
    }
  };

  return (
    <Card className="h-full overflow-auto">
      <CardHeader>
        <CardTitle>Edit Image</CardTitle>
        <CardDescription>
          {selectedObject 
            ? "Customize the selected object" 
            : "Select an object or upload an image to start editing"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="transform" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="transform" className="flex items-center gap-1">
              <Move className="h-4 w-4" /> Transform
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-1">
              <Palette className="h-4 w-4" /> Style
            </TabsTrigger>
            <TabsTrigger value="export" className="flex items-center gap-1">
              <Image className="h-4 w-4" /> Export
            </TabsTrigger>
          </TabsList>
          
          {/* Transform controls */}
          <TabsContent value="transform" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="rotation">Rotation ({angle}°)</Label>
                  <RotateCw className="h-4 w-4 text-muted-foreground" />
                </div>
                <Slider 
                  id="rotation"
                  min={0} 
                  max={360} 
                  step={1} 
                  value={[angle]} 
                  onValueChange={handleAngleChange} 
                  disabled={!selectedObject}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="scaleX">Scale X ({scaleX.toFixed(2)})</Label>
                </div>
                <Slider 
                  id="scaleX"
                  min={0.1} 
                  max={3} 
                  step={0.1} 
                  value={[scaleX]} 
                  onValueChange={handleScaleXChange} 
                  disabled={!selectedObject}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="scaleY">Scale Y ({scaleY.toFixed(2)})</Label>
                </div>
                <Slider 
                  id="scaleY"
                  min={0.1} 
                  max={3} 
                  step={0.1} 
                  value={[scaleY]} 
                  onValueChange={handleScaleYChange} 
                  disabled={!selectedObject}
                />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <Label htmlFor="flipX">Flip horizontally</Label>
                <Switch 
                  id="flipX" 
                  checked={flipX} 
                  onCheckedChange={handleFlipX} 
                  disabled={!selectedObject}
                />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <Label htmlFor="flipY">Flip vertically</Label>
                <Switch 
                  id="flipY" 
                  checked={flipY} 
                  onCheckedChange={handleFlipY} 
                  disabled={!selectedObject}
                />
              </div>
            </div>
          </TabsContent>
          
          {/* Appearance controls */}
          <TabsContent value="appearance" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="opacity">Opacity ({opacity}%)</Label>
                <Slider 
                  id="opacity"
                  min={0} 
                  max={100} 
                  step={1} 
                  value={[opacity]} 
                  onValueChange={handleOpacityChange} 
                  disabled={!selectedObject}
                />
              </div>
              
              {/* Add more style controls here */}
              <div className="pt-4 text-muted-foreground text-sm">
                More style options coming soon...
              </div>
            </div>
          </TabsContent>
          
          {/* Export options */}
          <TabsContent value="export" className="space-y-4">
            <div className="space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Export Name</Label>
                <Input id="name" placeholder="flow-export" />
              </div>
              <div className="pt-2">
                <button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md transition-colors"
                  onClick={handleExport}
                >
                  Export as PNG
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {!selectedObject && (
          <div className="mt-8 p-4 border border-dashed border-muted-foreground/50 rounded-lg flex flex-col items-center justify-center text-center space-y-2">
            <Settings className="h-8 w-8 text-muted-foreground/70" />
            <p className="text-muted-foreground">
              Upload or drag an image to get started with editing
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ControlPanel;
