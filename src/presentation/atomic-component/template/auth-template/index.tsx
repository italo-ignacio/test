import { Footer1, Footer2, Footer3 } from 'presentation/atomic-component/organism';
import { Header1, Header2, Header3 } from 'presentation/atomic-component/organism/header';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { constrains } from 'main/constrains';
import type { FC, ReactNode } from 'react';

export const AuthTemplate: FC = () => {
  const getHeader = (): ReactNode => {
    switch (constrains.header) {
      case '1':
        return <Header1 />;
      case '2':
        return <Header2 />;
      case '3':
        return <Header3 />;

      default:
        return null;
    }
  };

  const getFooter = (): ReactNode => {
    switch (constrains.footer) {
      case '1':
        return <Footer1 />;
      case '2':
        return <Footer2 />;
      case '3':
        return <Footer3 />;

      default:
        return null;
    }
  };

  return (
    <div className={'flex flex-col w-full h-full min-h-dvh'} id={'main'}>
      <Helmet>
        <title>{constrains.siteName}</title>
      </Helmet>

      {getHeader()}

      <main className={'flex flex-col h-full bg-background min-h-dvh py-4'}>
        <Outlet />
      </main>

      {getFooter()}
    </div>
  );
};
