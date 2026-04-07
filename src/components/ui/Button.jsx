import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/lib";

const variants = {
  primary:
    "bg-health-600 text-white shadow-sm hover:bg-health-700 focus-visible:ring-health-600",
  secondary:
    "border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 focus-visible:ring-slate-400",
  outline:
    "border-2 border-health-600 bg-transparent text-health-700 hover:bg-health-50 focus-visible:ring-health-600",
};

export function Button({ asChild, variant = "primary", className, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
