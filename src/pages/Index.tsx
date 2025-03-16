
import { useEffect, useState } from 'react';
import Canvas from '@/components/editor/Canvas';
import AnimationSettings from '@/components/editor/AnimationSettings';
import Toolbar from '@/components/editor/Toolbar';
import { Object as FabricObject } from 'fabric';

const Index = () => {
  const [selectedObject, setSelectedObject] = useState<FabricObject | null>(null);
  const [activeTool, setActiveTool] = useState<string>('brush');
  
  // Update document title
  useEffect(() => {
    document.title = "Paper Animator - Image Editor";
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      <Toolbar activeTool={activeTool} onToolSelect={setActiveTool} />
      
      <main className="flex-1 flex">
        <div className="flex-1 p-4 flex items-center justify-center bg-white">
          <Canvas setSelectedObject={setSelectedObject} />
        </div>
        
        <div className="w-80 h-screen overflow-y-auto bg-gray-900 text-white p-6">
          <AnimationSettings 
            onChange={(setting, value) => {
              console.log(`Setting ${setting} to ${value}`);
              // Here we would apply the settings to the canvas object
            }} 
          />
        </div>
      </main>
      
      <footer className="absolute bottom-0 w-full text-center py-2 text-xs text-gray-400 bg-transparent pointer-events-none">
        Animator.com © 2025 · Terms of Service · Privacy Policy
      </footer>
    </div>
  );
};

export default Index;
