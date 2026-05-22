import React from 'react';
import { cn } from '@/libs/utils';

type ButtonShapes = 'pill' | 'default';
type ButtonVariants = 'primary' | 'secondary' | 'default' | 'black';

type ButtonProps = React.ComponentProps<'button'> & {
  shape: ButtonShapes;
  htmlType?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariants;
};

function getVariantClasses(variant: ButtonVariants) {
  switch (variant) {
    case 'primary':
      return 'bg-primary text-white hover:bg-primary-dark';
    case 'secondary':
      return 'bg-secondary text-white hover:bg-secondary-dark';
    case 'black':
      return 'bg-black text-white hover:bg-gray-800';
    default:
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  }
}

function getShapeClasses(shape?: ButtonShapes) {
  switch (shape) {
    case 'pill':
      return 'rounded-full';
    default:
      return 'rounded-lg';
  }
}

export const Button = ({
  children,
  className,
  shape = 'default',
  htmlType,
  variant = 'default',
  ...props
}: ButtonProps) => {
  const shapeClasses = getShapeClasses(shape);
  const variantClasses = getVariantClasses(variant);

  const baseClasses = `px-8 py-4 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-80 hover:scale-95`;

  return (
    <button
      className={cn(baseClasses, variantClasses, shapeClasses, className, 'btn-fill-up')}
      type={htmlType}
      {...props}
    >
      {children}
    </button>
  );
};
