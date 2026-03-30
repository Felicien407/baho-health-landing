import { cn } from "../../utils/lib";

export function Button({ children, variant = "primary", className, ...props }) {
  return (
    <button className={cn("btn", variant === "secondary" ? "btn-secondary" : "btn-primary", className)} {...props}>
      {children}
    </button>
  );
}
