import { Footer1, Header1 } from 'presentation/atomic-component/organism';
import { Loading1 } from 'presentation/atomic-component/atom/loading/loading-1';
import type { FC } from 'react';

export const LoadingTemplate: FC = () => {
  return (
    <div className={'flex flex-col h-full min-h-dvh'} id={'main'}>
      <Header1 />

      <main className={'flex flex-col h-full min-h-[calc(100dvh-300px)] bg-[#f5f7f8]'}>
        <Loading1 />
      </main>

      <Footer1 />
    </div>
  );
};
