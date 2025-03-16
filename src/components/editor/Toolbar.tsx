
import { Button } from "@/components/ui/button";
import { Paintbrush, Image, Type, Download, Home } from "lucide-react";

interface ToolbarProps {
  activeTool: string;
  onToolSelect: (tool: string) => void;
}

const Toolbar = ({ activeTool, onToolSelect }: ToolbarProps) => {
  const tools = [
    { id: 'brush', icon: <Paintbrush size={18} />, label: 'Brush' },
    { id: 'image', icon: <Image size={18} />, label: 'Image' },
    { id: 'text', icon: <Type size={18} />, label: 'Text' },
    { id: 'export', icon: <Download size={18} />, label: 'Export' },
  ];

  return (
    <div className="flex flex-col w-16 bg-gray-900 h-screen">
      <Button variant="ghost" className="w-full p-4 rounded-none text-white">
        <Home size={20} />
      </Button>
      
      <div className="relative mt-4">
        <div className="absolute -right-2 -top-2 bg-red-500 text-white text-xs px-1 py-0.5 rounded-sm">
          NEW
        </div>
      </div>

      <div className="flex-1 flex flex-col mt-8 space-y-4">
        {tools.map((tool) => (
          <Button
            key={tool.id}
            variant={activeTool === tool.id ? "secondary" : "ghost"}
            className={`w-full p-4 rounded-none ${activeTool === tool.id ? 'bg-gray-700' : 'text-gray-400 hover:text-white'}`}
            onClick={() => onToolSelect(tool.id)}
          >
            {tool.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
