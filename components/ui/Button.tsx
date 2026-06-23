import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | AnchorProps;

const variants = {
  primary:
    "bg-[--primary] hover:bg-[--primary-hover] text-white shadow-md hover:shadow-[--glow] border border-transparent",
  outline:
    "border border-[--primary] text-[--primary] hover:bg-[--primary-light] bg-transparent",
  ghost:
    "border border-[--border] text-[--muted] hover:text-[--text] hover:border-[--primary] bg-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...rest
}: Props) {
  const classes = [
    "inline-flex items-center justify-center font-medium rounded-xl",
    "transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2",
    "active:scale-[0.97]",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if (href !== undefined) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
