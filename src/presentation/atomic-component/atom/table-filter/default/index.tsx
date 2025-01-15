import { FilterAlt } from '@mui/icons-material';
import { GenericFilter } from 'presentation/atomic-component/atom/generic-filter';
import { IconButton } from '@mui/material';
import { Menu } from 'presentation/atomic-component/atom/menu';
import { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import type { FC, ReactElement } from 'react';
import type { Sort } from 'domain/protocol';

export interface TableFilterProps {
  title: string;
  onChange: (value: string) => void;
  filterName: string;
  filterValue: string;
  sort?: Sort;
  sortBy?: string | null;
  mask?: string;
  onChangeSort?: (sort: Sort) => void;
  notSorted?: boolean;
}

export const TableFilter: FC<TableFilterProps> = ({
  title,
  onChangeSort,
  onChange,
  mask,
  filterName,
  sortBy,
  sort,
  filterValue,
  notSorted
}) => {
  const [open, setOpen] = useState(false);

  const handleOrder = (): ReactElement => {
    if (sort === 'DESC' && sortBy === filterName)
      return (
        <IconButton
          onClick={(): void => {
            if (onChangeSort) onChangeSort(null);
          }}
          title={'Alterar ordem'}
        >
          <ArrowDownwardIcon className={'text-gray-500 hover:cursor-pointer'} />
        </IconButton>
      );
    if (sort === 'ASC' && sortBy === filterName)
      return (
        <IconButton
          onClick={(): void => {
            if (onChangeSort) onChangeSort('DESC');
          }}
          title={'Alterar ordem'}
        >
          <ArrowUpwardIcon className={'text-gray-500 hover:cursor-pointer'} />
        </IconButton>
      );

    return (
      <IconButton
        onClick={(): void => {
          if (onChangeSort) onChangeSort('ASC');
        }}
        title={'Alterar ordem'}
      >
        <SwapVertIcon className={'text-gray-500 hover:cursor-pointer'} />
      </IconButton>
    );
  };

  return (
    <div className={'flex justify-center gap-2 items-center w-full'}>
      <span>{title}</span>

      <div>
        <Menu
          isDown
          isOpen={open}
          openElement={
            <div className={'max-w-[40px] relative'}>
              <IconButton>
                <FilterAlt />
              </IconButton>

              {filterValue ? (
                <div
                  className={
                    'bg-primary p-1 w-5 h-5 flex justify-center items-center rounded-full text-white absolute right-[-3px] top-[-3px] z-10'
                  }
                >
                  1
                </div>
              ) : null}
            </div>
          }
          setIsOpen={setOpen}
        >
          <div className={'bg-white flex flex-col gap-6 p-4 py-6 min-h-max laptop:min-w-[300px]'}>
            <div className={'flex items-center justify-between w-full'}>
              <div className={'flex gap-3 items-center text-gray-500 font-bold'}>
                <span className={'text-base'}>ﾠ{title}</span>
                {notSorted ? null : handleOrder()}
              </div>

              <IconButton title={'Fechar'}>
                <CloseIcon
                  className={'hover:cursor-pointer text-gray-500'}
                  onClick={(): void => {
                    setOpen(false);
                  }}
                />
              </IconButton>
            </div>

            <GenericFilter
              filterValue={filterValue}
              mask={mask}
              onChange={onChange}
              setOpen={setOpen}
            />
          </div>
        </Menu>
      </div>
    </div>
  );
};
