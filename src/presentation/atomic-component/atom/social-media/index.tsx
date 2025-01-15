import { FacebookOutlined, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { FC } from 'react';

export const SocialMedia: FC = () => {
  return (
    <div className={'flex gap-2'}>
      <a href={'https://www.facebook.com/fiesp'} rel={'noreferrer'} target={'_blank'}>
        <IconButton
          sx={{
            backgroundColor: 'white !important',
            color: 'black',
            padding: '3px'
          }}
        >
          <FacebookOutlined color={'inherit'} />
        </IconButton>
      </a>

      <a href={'https://www.instagram.com/fiesp.oficial'} rel={'noreferrer'} target={'_blank'}>
        <IconButton
          sx={{
            backgroundColor: 'white !important',
            color: 'black',
            padding: '3px'
          }}
        >
          <Instagram color={'inherit'} />
        </IconButton>
      </a>

      <a href={'https://twitter.com/Fiesp'} rel={'noreferrer'} target={'_blank'}>
        <IconButton
          sx={{
            backgroundColor: 'white !important',
            color: 'black',
            padding: '3px'
          }}
        >
          <Twitter color={'inherit'} />
        </IconButton>
      </a>

      <a href={'https://www.youtube.com/user/fiesponline'} rel={'noreferrer'} target={'_blank'}>
        <IconButton
          sx={{
            backgroundColor: 'white !important',
            color: 'black',
            padding: '3px'
          }}
        >
          <YouTube color={'inherit'} />
        </IconButton>
      </a>

      <a href={'https://br.linkedin.com/company/fiesp'} rel={'noreferrer'} target={'_blank'}>
        <IconButton
          sx={{
            backgroundColor: 'white !important',
            color: 'black',
            padding: '3px'
          }}
        >
          <LinkedIn color={'inherit'} />
        </IconButton>
      </a>
    </div>
  );
};
