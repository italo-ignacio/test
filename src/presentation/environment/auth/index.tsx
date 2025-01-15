import { SlidingContainer } from 'presentation/atomic-component/atom';
import type { FC } from 'react';

export const AuthContent: FC = () => {
  const className = 'h-[300px] w-[400px] object-cover';

  return (
    <div className={'flex flex-col gap-6 w-full'}>
      <SlidingContainer className={'gap-4'} height={300} speed={50}>
        <img alt={'cat'} className={className} src={'./01.jpeg'} />
        <img alt={'cat'} className={className} src={'./02.jpg'} />
        <img alt={'cat'} className={className} src={'./03.png'} />
        <img alt={'cat'} className={className} src={'./04.jpg'} />
        <img alt={'cat'} className={className} src={'./05.jpg'} />
      </SlidingContainer>

      <SlidingContainer className={'gap-4'} height={300} speed={55}>
        <img alt={'cat'} className={className} src={'./01.jpeg'} />
        <img alt={'cat'} className={className} src={'./02.jpg'} />
        <img alt={'cat'} className={className} src={'./03.png'} />
        <img alt={'cat'} className={className} src={'./04.jpg'} />
        <img alt={'cat'} className={className} src={'./05.jpg'} />
      </SlidingContainer>
    </div>
  );
};
