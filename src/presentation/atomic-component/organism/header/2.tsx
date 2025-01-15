import { Link } from 'react-router-dom';
import { MainDiv } from 'presentation/atomic-component/atom';
import { X } from '@mui/icons-material';
import type { FC } from 'react';

export const Header2: FC = () => {
  return (
    <header className={'bg-secondary w-full flex justify-around'}>
      <MainDiv>
        <div className={'w-full flex justify-around'}>
          <img alt={'logo'} src={'./logo.png'} />

          <nav className={'flex items-center'}>
            <Link
              className={'text-white font-bold text-5xl'}
              target={'_blank'}
              to={'https://www.linkedin.com/company/fiesp'}
            >
              <X fontSize={'inherit'} />
            </Link>
          </nav>
        </div>
      </MainDiv>
    </header>
  );
};
