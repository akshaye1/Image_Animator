
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface AnimationSettingsProps {
  onChange?: (setting: string, value: number) => void;
}

const AnimationSettings = ({ onChange }: AnimationSettingsProps) => {
  const handleChange = (setting: string, value: number[]) => {
    if (onChange) {
      onChange(setting, value[0]);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Animation Settings</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="size">Size</Label>
            <span className="text-sm font-medium">50</span>
          </div>
          <Slider 
            id="size"
            min={0} 
            max={100} 
            step={1} 
            value={[50]} 
            onValueChange={(value) => handleChange("size", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="edge-thickness">Edge thickness</Label>
            <span className="text-sm font-medium">35</span>
          </div>
          <Slider 
            id="edge-thickness"
            min={0} 
            max={100} 
            step={1} 
            value={[35]} 
            onValueChange={(value) => handleChange("edgeThickness", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="edge-intensity">Edge intensity</Label>
            <span className="text-sm font-medium">50</span>
          </div>
          <Slider 
            id="edge-intensity"
            min={0} 
            max={100} 
            step={1} 
            value={[50]} 
            onValueChange={(value) => handleChange("edgeIntensity", value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="edge-details">Edge details</Label>
            <span className="text-sm font-medium">50</span>
          </div>
          <Slider 
            id="edge-details"
            min={0} 
            max={100} 
            step={1} 
            value={[50]} 
            onValueChange={(value) => handleChange("edgeDetails", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="cutout-style">Cutout style</Label>
            <span className="text-sm font-medium">50</span>
          </div>
          <Slider 
            id="cutout-style"
            min={0} 
            max={100} 
            step={1} 
            value={[50]} 
            onValueChange={(value) => handleChange("cutoutStyle", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="texture-strength">Texture strength</Label>
            <span className="text-sm font-medium">30</span>
          </div>
          <Slider 
            id="texture-strength"
            min={0} 
            max={100} 
            step={1} 
            value={[30]} 
            onValueChange={(value) => handleChange("textureStrength", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="shadow-offset-x">Shadow offset X</Label>
            <span className="text-sm font-medium">50</span>
          </div>
          <Slider 
            id="shadow-offset-x"
            min={0} 
            max={100} 
            step={1} 
            value={[50]} 
            onValueChange={(value) => handleChange("shadowOffsetX", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="shadow-offset-y">Shadow offset Y</Label>
            <span className="text-sm font-medium">50</span>
          </div>
          <Slider 
            id="shadow-offset-y"
            min={0} 
            max={100} 
            step={1} 
            value={[50]} 
            onValueChange={(value) => handleChange("shadowOffsetY", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="shadow-blur">Shadow blur</Label>
            <span className="text-sm font-medium">20</span>
          </div>
          <Slider 
            id="shadow-blur"
            min={0} 
            max={100} 
            step={1} 
            value={[20]} 
            onValueChange={(value) => handleChange("shadowBlur", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="shadow-strength">Shadow strength</Label>
            <span className="text-sm font-medium">50</span>
          </div>
          <Slider 
            id="shadow-strength"
            min={0} 
            max={100} 
            step={1} 
            value={[50]} 
            onValueChange={(value) => handleChange("shadowStrength", value)}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="movement">Movement</Label>
            <span className="text-sm font-medium">50</span>
          </div>
          <Slider 
            id="movement"
            min={0} 
            max={100} 
            step={1} 
            value={[50]} 
            onValueChange={(value) => handleChange("movement", value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimationSettings;
