import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
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
      <div className="w-max  mt-10 x-4">
        <motion.div
          tabIndex={0}
          role="switch"
          aria-checked={isChecked}
          data-state={isChecked ? "checked" : "unchecked"}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          ref={ref}
          className={cn(
            "relative inline-flex ring-[4px]  ring-[#b4b7ec] h-[3.3rem] w-[7.15rem] shrink-0 items-center rounded-full  outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 drop-shadow-black/30 shadow-2xl bg-gradient-to-r from-[#ece1e6] via-[#9a9dfe] to-[#464bf1]",
            className
          )}
          animate={{
            backgroundColor: isChecked
              ? "rgb(139, 92, 246)"
              : "rgb(167, 139, 250)",
          }}
          transition={{ duration: 0.2 }}
          {...props}
        >
          <div
            className="absolute cursor-pointer left-3 right-5 rounded-full bg-white h-[1.8rem] w-[5.5rem]"
            style={{
              boxShadow:
                "inset 8px 8px 16px rgba(184, 193, 207, 0.8), inset -8px -8px 16px rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(229, 231, 235, 0.7)",
            }}
          ></div>
          <motion.span
            className="pointer-events-none relative flex items-center justify-center block size-[2.75rem] cursor-pointer rounded-full bg-slate-100 border border-slate-200"
            animate={{
              x: isChecked ? 66 : 5,
              rotate: isChecked ? 360 : 0,
              duration: 5,
              delay: 2,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
            }}
          >
            <span
              className="size-[2.3rem] rounded-full bg-slate-200 shadow-inner flex items-center justify-center border"
              style={{
                boxShadow:
                  "inset 4px 4px 5px #b8c1cf, inset -4px -4px 5px #ffffff",
              }}
            />
          </motion.span>
        </motion.div>
      </div>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
