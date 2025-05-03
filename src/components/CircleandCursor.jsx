import { Circle, MousePointer2 } from "lucide-react";

const CircleandCursor = ({ circleClassName, cursorClassName, className }) => {
    return (
      <div className={`flex -mt-2 mr-1 sm:mr-2 relative items-center justify-center ${className}`}>
        <Circle className={`w-6 h-6 sm:w-8 sm:h-8 fill-black ${circleClassName}`} />
        <MousePointer2 className={`absolute top-2 left-2 stroke-1 stroke-white z-10 w-6 h-6 sm:w-10 sm:h-10 fill-black ${cursorClassName}`} />
      </div>
    );
  };

  export default CircleandCursor;