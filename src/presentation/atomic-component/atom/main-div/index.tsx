import type { FC, ReactNode } from 'react';

interface MenuItemProps {
  children?: ReactNode;
  className?: string;
}

export const MainDiv: FC<MenuItemProps> = ({ children, className }) => (
  <div className={`flex flex-col w-full max-w-[1980px] ${className}`}>{children}</div>
);
