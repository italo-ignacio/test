import { Link } from 'react-router-dom';
import { MainDiv } from 'presentation/atomic-component/atom';
import { X } from '@mui/icons-material';
import { constrains } from 'main/constrains';
import type { FC } from 'react';

export const Header1: FC = () => {
  return (
    <header className={'bg-secondary w-full flex justify-around py-2'}>
      <MainDiv>
        <div className={'w-full flex justify-around'}>
          <img alt={'logo'} className={'max-w-[70%] tablet:max-w-[100%]'} src={'./logo.png'} />

          <nav className={'flex gap-4 items-center'}>
            <Link
              className={'text-white font-bold text-3xl tablet:text-5xl'}
              target={'_blank'}
              to={constrains.pumpFunLink}
            >
              <img alt={'pump logo'} src={'./pump-logo.png'} width={50} />
            </Link>

            <Link
              className={'text-white font-bold text-3xl tablet:text-5xl'}
              target={'_blank'}
              to={constrains.xLink}
            >
              <X fontSize={'inherit'} />
            </Link>
          </nav>
        </div>
      </MainDiv>
    </header>
  );
};
