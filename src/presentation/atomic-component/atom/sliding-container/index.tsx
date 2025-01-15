/* eslint-disable react/no-array-index-key */
import { Children, type FC, type ReactNode } from 'react';

interface SlidingContainerProps {
  children: ReactNode;
  className?: string;
  height: number;
  speed?: number;
}

export const SlidingContainer: FC<SlidingContainerProps> = ({
  children,
  className,
  height,
  speed = 30
}) => {
  return (
    <div className={'relative overflow-hidden w-full'} style={{ height }}>
      <div
        className={`flex absolute w-max h-full ${className}`}
        style={{
          animation: 'slide linear infinite',
          animationDuration: `${speed}s`
        }}
      >
        {Children.map(children, (child, index) => (
          <div key={`child-1-${index}`} className={`flex items-center ${className}`}>
            {child}
          </div>
        ))}

        {Children.map(children, (child, index) => (
          <div key={`child-2-${index}`} className={`flex items-center ${className}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
