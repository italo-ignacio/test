import { useDebounce } from 'data/hooks/use-debounce';
import { usePagination } from 'data/hooks/use-pagination';
import { useState } from 'react';

interface useSearchProps {
  searchDebounce: string;
}

export interface useSearchReturn {
  page: number;
  search: string;
  handleChangePage: (event: unknown, newPage: number) => void;
}

const firstPage = 1;

export const useSearchPagination = (props: useSearchProps): useSearchReturn => {
  const { page, setPage, handleChangePage } = usePagination();

  const [search, setSearch] = useState(props.searchDebounce);

  useDebounce(
    () => {
      setSearch(props.searchDebounce);
      if (page !== firstPage) setPage(firstPage);
    },
    [props.searchDebounce],
    300
  );

  return { handleChangePage, page, search };
};
