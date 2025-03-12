import React, { forwardRef } from "react";
import "./button.styles.css";
import classnames from "classnames";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  GHOST = "ghost",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactElement;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = ButtonVariant.PRIMARY,
      size = ButtonSize.MEDIUM,
      fullWidth = false,
      isLoading = false,
      icon,
      className,
      children,
      disabled,
      asChild = false,
      ...rest
    },
    ref
  ) => {
    const buttonClasses = classnames(
      `button`,
      `button--${variant}`,
      `button--${size}`,
      {
        "button--full-width": fullWidth,
        "button--loading": isLoading,
        "button--icon-only": !children && icon,
      },
      className
    );

    const Component = asChild ? React.Fragment : "button";

    const content = (
      <>
        {isLoading && <span className="button__loader">Loading...</span>}
        {icon && !isLoading && <span className="button__icon">{icon}</span>}
        {children && <span className="button__text">{children}</span>}
      </>
    );

    return asChild ? (
      <Component>{content}</Component>
    ) : (
      <Component
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...rest}
      >
        {content}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button };
