/* eslint-disable no-negated-condition */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Menu } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import type { Dispatch, FC, MouseEvent, ReactNode, SetStateAction } from 'react';

interface SimpleMenuProps {
  children: ReactNode;
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  openElement?: ReactNode;
  side?: 'bottom' | 'left' | 'right' | 'top';
  id?: string;
}

export const SimpleMenu: FC<SimpleMenuProps> = ({
  children,
  isOpen,
  setIsOpen,
  id,
  side,
  openElement
}) => {
  const menuId = `menu-element-${String(Math.random() * 1000).replace('.', '')}`;
  const itemId = id
    ? `open-menu-element-${id}`
    : `open-menu-element-${String(Math.random() * 1000).replace('.', '')}`;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    if (setIsOpen) setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isOpen !== undefined) if (!isOpen) setAnchorEl(null);
  }, [isOpen]);

  const getAnchorOrigin = (): {
    horizontal: 'center' | 'left' | 'right';
    vertical: 'bottom' | 'center' | 'top';
  } => {
    switch (side) {
      case 'right':
        return { horizontal: 'right', vertical: 'top' };
      case 'left':
        return { horizontal: 'left', vertical: 'top' };
      case 'bottom':
        return { horizontal: 'center', vertical: 'bottom' };
      default:
        return { horizontal: 'center', vertical: 'top' };
    }
  };

  const getTransformOrigin = (): {
    horizontal: 'center' | 'left' | 'right';
    vertical: 'bottom' | 'center' | 'top';
  } => {
    switch (side) {
      case 'right':
        return { horizontal: 'left', vertical: 'top' };
      case 'left':
        return { horizontal: 'right', vertical: 'top' };
      case 'bottom':
        return { horizontal: 'center', vertical: 'top' };
      default:
        return { horizontal: 'center', vertical: 'bottom' };
    }
  };

  return (
    <div>
      {openElement ? (
        <div
          className={'flex w-full'}
          id={itemId}
          onClick={(event): void => {
            event.stopPropagation();
            handleClick(event);
          }}
        >
          {openElement}
        </div>
      ) : (
        <button
          id={itemId}
          onClick={(event): void => {
            event.stopPropagation();
            handleClick(event);
          }}
          type={'button'}
        >
          <MoreVert />
        </button>
      )}

      <div
        className={'hidden'}
        id={`${itemId}-close`}
        onClick={(event): void => {
          event.stopPropagation();
          handleClose();
        }}
      />

      <Menu
        MenuListProps={{
          'aria-labelledby': 'button',
          sx: {
            backgroundColor: 'transparent',
            padding: '0'
          }
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0px 0px 12px 2px #00000021'
          }
        }}
        anchorEl={anchorEl}
        anchorOrigin={getAnchorOrigin()}
        id={menuId}
        onClick={(event): void => {
          event.stopPropagation();
        }}
        onClose={handleClose}
        open={open}
        transformOrigin={getTransformOrigin()}
      >
        {children}
      </Menu>
    </div>
  );
};
