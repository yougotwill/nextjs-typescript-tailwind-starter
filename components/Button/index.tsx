import { LegacyRef, ReactElement, ReactNode } from 'react';

import classNames from 'classnames';

interface Props {
  bgColor?: string;
  textColor?: string;
  size?: string;
  fontWeight?: string;
  animate?: boolean;
  hoverEffect?: boolean;
  type?: 'submit';
  reference?: LegacyRef<HTMLButtonElement>;
  classes?: string;
  children?: string | ReactNode;
  onClick?(): void;
}

export default function Button(props: Props): ReactElement {
  const {
    bgColor,
    textColor,
    fontWeight = 'normal',
    size,
    type,
    reference,
    animate = false,
    hoverEffect = true,
    classes,
    children,
    onClick,
  } = props;
  // See TailwindCSS Notes in README.md
  const bgClasses = [bgColor === 'none' && 'bg-transparent'];
  const textClasses = [textColor !== '' && textColor];
  const hoverClasses = [
    (hoverEffect || animate) && 'transition-colors duration-300',
  ];
  const sizeClasses = [size !== '' && size];
  const fontClasses = [fontWeight === 'normal' && 'font-normal'];

  return (
    <button
      className={classNames(
        bgClasses,
        textClasses,
        hoverEffect && hoverClasses,
        sizeClasses,
        fontClasses,
        classes
      )}
      type={type}
      ref={reference}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
