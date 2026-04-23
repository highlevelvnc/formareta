import Link from "next/link";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "ghost" | "ghost-light" | "accent" | "link";

type Common = {
  variant?: Variant;
  icon?: ReactNode;
  iconPosition?: "leading" | "trailing";
  className?: string;
  children: ReactNode;
};

const variantMap: Record<Variant, string> = {
  solid: "btn-solid group/link",
  ghost: "btn-ghost group/link",
  "ghost-light": "btn-ghost-light group/link",
  accent: "btn-accent group/link",
  link: "btn-link group/link",
};

type ButtonProps = Common & ComponentPropsWithoutRef<"button">;
type LinkButtonProps = Common & {
  href: string;
  external?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", icon, iconPosition = "trailing", className, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(variantMap[variant], className)} {...props}>
        <Content icon={icon} iconPosition={iconPosition}>
          {children}
        </Content>
      </button>
    );
  },
);
Button.displayName = "Button";

export function LinkButton({
  href,
  external,
  variant = "solid",
  icon,
  iconPosition = "trailing",
  className,
  children,
}: LinkButtonProps) {
  const classes = cn(variantMap[variant], className);

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        <Content icon={icon} iconPosition={iconPosition}>
          {children}
        </Content>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <Content icon={icon} iconPosition={iconPosition}>
        {children}
      </Content>
    </Link>
  );
}

function Content({
  icon,
  iconPosition,
  children,
}: {
  icon?: ReactNode;
  iconPosition: "leading" | "trailing";
  children: ReactNode;
}) {
  const resolvedIcon = icon ?? <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={1.5} />;

  return (
    <>
      {iconPosition === "leading" && resolvedIcon}
      <span>{children}</span>
      {iconPosition === "trailing" && resolvedIcon}
    </>
  );
}
