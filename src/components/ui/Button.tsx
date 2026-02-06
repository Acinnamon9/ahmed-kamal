import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out cursor-pointer active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-white font-bold shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-primary/30 active:scale-95",
        secondary:
          "bg-white text-brand-depth border border-brand-depth/10 shadow-sm hover:bg-brand-muted hover:border-brand-depth/20",
        outline:
          "bg-transparent border border-brand-depth/20 text-brand-depth hover:bg-brand-depth hover:text-white",
        black: "bg-black text-white hover:bg-gray-900",
        ghost:
          "text-brand-muted-foreground hover:text-brand-foreground hover:bg-brand-muted/50",
        link: "text-brand-link hover:text-brand-depth underline-offset-4 hover:underline p-0 h-auto font-bold",
        glass:
          "bg-(--foreground)/5 backdrop-blur-md border border-(--foreground)/10 text-(--foreground) hover:bg-(--foreground)/10",
        "glass-primary":
          "bg-brand-primary/20 backdrop-blur-xl text-white border border-brand-primary/30 shadow-2xl shadow-brand-primary/20 hover:bg-brand-primary/30 hover:border-brand-primary/40",
        "glass-orange":
          "bg-brand-orange/20 backdrop-blur-xl text-white border border-brand-orange/30 shadow-2xl shadow-brand-orange/20 hover:bg-brand-orange/30 hover:border-brand-orange/40",
      },
      size: {
        sm: "px-3 py-1.5 text-xs rounded-lg",
        md: "px-4 py-2 text-sm font-bold rounded-xl",
        lg: "px-6 py-2.5 text-base font-extrabold rounded-2xl",
        xl: "px-8 py-3.5 text-lg font-black rounded-[20px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
  React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant, size, as: Component = "button", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
