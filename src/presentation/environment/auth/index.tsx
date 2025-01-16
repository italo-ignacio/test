import { SlidingContainer } from 'presentation/atomic-component/atom';
import { useWindowDimensions } from 'data/hooks';
import type { FC } from 'react';

export const AuthContent: FC = () => {
  const { height, width } = useWindowDimensions();

  const className = 'object-contain bg';
  const style = { width: width / 5 };

  return (
    <div className={'flex flex-col gap-4 w-full h-full m-auto'}>
      <SlidingContainer className={'gap-4'} height={height / 4 - 20} speed={40}>
        <img alt={'cat'} className={className} src={'./05.jpg'} style={style} />
        <img alt={'cat'} className={className} src={'./02.jpg'} style={style} />
        <img alt={'cat'} className={className} src={'./01.jpeg'} style={style} />
        <img alt={'cat'} className={className} src={'./04.jpg'} style={style} />
        <img alt={'cat'} className={className} src={'./03.png'} style={style} />
      </SlidingContainer>

      <SlidingContainer className={'gap-4'} height={height / 4 - 20} reverse speed={40}>
        <img alt={'cat'} className={className} src={'./06.webp'} style={style} />
        <img alt={'cat'} className={className} src={'./07.avif'} style={style} />
        <img alt={'cat'} className={className} src={'./08.jpeg'} style={style} />
        <img alt={'cat'} className={className} src={'./09.jpg'} style={style} />
        <img alt={'cat'} className={className} src={'./10.webp'} style={style} />
      </SlidingContainer>

      <SlidingContainer className={'gap-4'} height={height / 4 - 20} speed={40}>
        <img alt={'cat'} className={className} src={'./11.jfif'} style={style} />
        <img alt={'cat'} className={className} src={'./12.jfif'} style={style} />
        <img alt={'cat'} className={className} src={'./13.jfif'} style={style} />
        <img alt={'cat'} className={className} src={'./14.jfif'} style={style} />
        <img alt={'cat'} className={className} src={'./15.jpeg'} style={style} />
      </SlidingContainer>

      <SlidingContainer className={'gap-4'} height={height / 4 - 20} reverse speed={40}>
        <img alt={'cat'} className={className} src={'./16.jpg'} style={style} />
        <img alt={'cat'} className={className} src={'./17.avif'} style={style} />
        <img alt={'cat'} className={className} src={'./18.avif'} style={style} />
        <img alt={'cat'} className={className} src={'./19.png'} style={style} />
        <img alt={'cat'} className={className} src={'./20.avif'} style={style} />
      </SlidingContainer>
    </div>
  );
};
