import { colors } from 'presentation/style';
import { scrollTop } from 'main/utils';
import { usePagination } from '@mui/lab';
import type { FC } from 'react';

interface PaginationProps {
  page: number;
  totalPages?: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  scrollId?: string;
}

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  scrollId,
  handleChangePage
}: PaginationProps) => {
  const { items } = usePagination({
    count: totalPages,
    defaultPage: page,
    onChange(event, newPage): void {
      handleChangePage(event, newPage);
      if (scrollId) scrollTop(scrollId);
    }
  });

  if (!totalPages || totalPages <= 1) return null;

  return (
    <div className={'flex flex-wrap gap-y-1 justify-center'}>
      {items.map(({ page: page2, type, selected, ...item }, index) => {
        let children = null;

        const getBorderRadius = (): string | undefined => {
          switch (type) {
            case 'previous':
              return '6px 0px 0px 6px';
            case 'next':
              return '0px 6px 6px 0px';
            default:
              return undefined;
          }
        };

        const getText = (): string | undefined => {
          switch (type) {
            case 'previous':
              return 'Anterior';
            case 'next':
              return 'Próxima';
            default:
              return undefined;
          }
        };

        if (type === 'start-ellipsis' || type === 'end-ellipsis')
          children = <span className={'px-1 text-lg select-none'}>…</span>;
        else if (type === 'page')
          children = (
            <span
              className={
                'flex items-center justify-center cursor-pointer bg-[#FFFFFF] border border-[#DEE2E6] h-[31px] w-[40px] text-sm select-none'
              }
              style={{
                backgroundColor: selected ? colors.primary : undefined,
                borderColor: selected ? colors.primary : undefined,
                color: selected ? colors.white : colors.primary
              }}
              {...item}
            >
              {page2}
            </span>
          );
        else
          children = (
            <span
              className={
                'flex items-center justify-center bg-[#FFFFFF] border border-[#DEE2E6] h-[31px] w-[82px] text-sm select-none'
              }
              style={{
                borderRadius: getBorderRadius(),
                color: item.disabled ? '#6C757D' : colors.primary,
                cursor: item.disabled ? undefined : 'pointer'
              }}
              {...item}
              onClick={item.disabled ? undefined : item.onClick}
            >
              {getText()}
            </span>
          );

        return <span key={String(page2) + String(index)}>{children}</span>;
      })}
    </div>
  );
};
