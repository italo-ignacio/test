import { Link } from 'react-router-dom';
import { TableCell } from '@mui/material';
import { colors } from 'presentation/style';
import type { FC, ReactNode } from 'react';
import type { TableCellProps } from '@mui/material';

interface BodyCellProps extends Pick<TableCellProps, 'sx'> {
  title: ReactNode | number | string;
  className?: string;
  link?: string;
  lastRow?: boolean;
  colSpan?: number;
  backgroundColor?: string;
  align?: 'center' | 'left' | 'right';
  onClick?: () => void;
}

export const BodyCell: FC<BodyCellProps> = ({
  title,
  onClick,
  className,
  link,
  lastRow,
  backgroundColor,
  colSpan,
  sx,
  align
}) => (
  <TableCell
    align={align ?? 'left'}
    colSpan={colSpan}
    component={'th'}
    onClick={onClick}
    scope={'row'}
    sx={{
      backgroundColor,
      borderColor: lastRow ? 'transparent' : colors.gray[200],
      padding: link ? '0' : '10px 6px',
      ...sx
    }}
    title={typeof title === 'string' ? title : undefined}
    variant={'body'}
  >
    {link ? (
      <Link className={'px-1.5 min-h-[40.8125px] flex h-full items-center'} to={link}>
        <span className={className}>{title}</span>
      </Link>
    ) : (
      <span className={className}>{title}</span>
    )}
  </TableCell>
);
