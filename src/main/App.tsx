/* eslint-disable @typescript-eslint/no-explicit-any */
import 'presentation/style/tailwind.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-toastify/dist/ReactToastify.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { type FC, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { dimensions } from './config';
import { ptBR } from 'date-fns/locale';
import { queryClient } from 'infra/lib';
import { useWindowDimensions } from 'data/hooks';
import Router from './routes';

const App: FC = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    const preventZoomWithWheel = (event: any): void => {
      if (event.ctrlKey) event.preventDefault();
    };

    const preventZoomWithKeyboard = (event: any): void => {
      if (
        event.ctrlKey &&
        (event.key === '+' || event.key === '=' || event.key === '-' || event.key === '0')
      )
        event.preventDefault();
    };

    window.addEventListener('wheel', preventZoomWithWheel, { passive: false });
    window.addEventListener('keydown', preventZoomWithKeyboard);

    return () => {
      window.removeEventListener('wheel', preventZoomWithWheel);
      window.removeEventListener('keydown', preventZoomWithKeyboard);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
        <Router />
      </LocalizationProvider>

      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        limit={4}
        pauseOnHover
        position={width >= dimensions.laptop ? 'bottom-right' : 'top-right'}
        style={{
          padding: '12px'
        }}
        theme={'light'}
      />
    </QueryClientProvider>
  );
};

export default App;
