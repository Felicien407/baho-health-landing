import { cn } from "../../utils/lib";

export function GlassCard({ children, className, ...props }) {
  return (
    <div className={cn("glass-card", className)} {...props}>
      {children}
    </div>
  );
}
