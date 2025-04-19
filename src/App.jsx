import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/growthSwitch";
import svg from "./assets/react.svg"
function App() {
  return (
    <div className="h-screen w-screen flex gap-2 justify-center items-center bg-slate-100">
      
      <div className="text-[10rem] font-bold leading-none font-sans">gr</div> 
      <Switch />
      <div className="text-[10rem] font-bold leading-none font-sans">wth</div>
    </div>
  );
}

export default App;
