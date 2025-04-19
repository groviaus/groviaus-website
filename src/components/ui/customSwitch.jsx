import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(checked || false);
  
  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onCheckedChange?.(newState);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="w-max border mt-16 mx-8">
      <motion.div
        tabIndex={0}
        role="switch"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : "unchecked"}
        onClick={handleToggle}
      onKeyDown={handleKeyDown}
      ref={ref}
      className={cn(
        "relative inline-flex ring-[4px] ring-offset-[1.4rem] ring-offset-[#595ef9] ring-[#8489e2] h-[4.5rem] w-[15rem] shrink-0 items-center rounded-full  outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 drop-shadow-black/30 drop-shadow-2xl",
        isChecked ? "" : "bg-input dark:bg-input/80",
        className
      )}
      animate={{
        backgroundColor: isChecked ? undefined : "var(--input)"
      }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <motion.span 
        className="pointer-events-none relative flex items-center justify-center block size-[6rem] rounded-full bg-slate-100 border border-slate-200"
        animate={{
          x: isChecked ? 155 : -10,
          rotate: isChecked ? 360 : 0,
          duration: 5, // Slowed down transition duration
          delay: 2
        }}
        transition={{
          type: "spring",
          stiffness: 200, // Reduced stiffness for a slower transition
          damping: 50 // Increased damping for a slower transition
        }}
      >
        <span className="size-[5.2rem] rounded-full bg-slate-200 shadow-inner flex items-center justify-center border" 
          style={{
            boxShadow: "inset 4px 4px 5px #b8c1cf, inset -4px -4px 5px #ffffff"
          }}
        />
      </motion.span>
    </motion.div>
    </div>
  );
});

Switch.displayName = "Switch";

export { Switch };