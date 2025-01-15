import type { FC } from 'react';

export const Loading4: FC = () => {
  return (
    <div className={'flex flex-col items-center justify-center absolute top-0 w-full h-dvh aa'}>
      <style>
        {`
      .loader {
        width: 16em;
        height: 8em;
        position: relative;
        overflow: hidden;
      }

      .loader::before,
      .loader::after {
        content: '';
        position: absolute;
        bottom: 0;
      }

      .loader::before {
        width: inherit;
        height: 0.2em;
        background-color: hsla(0, 0%, 85%);
      }

      .loader::after {
        box-sizing: border-box;
        width: 50%;
        height: inherit;
        border: 0.2em solid hsla(0, 0%, 85%);
        border-radius: 50%;
        left: 25%;
      }

      .loader span {
        position: absolute;
        width: 5%;
        height: 10%;
        background-color: hsla(0, 0%, 80%);
        border-radius: 50%;
        bottom: 0.2em;
        left: -5%;
        animation: 2s linear infinite;
        transform-origin: 50% -3em;
        animation-name: run, rotating;
      }

      .loader span:nth-child(2) {animation-delay: 0.075s;}
      .loader span:nth-child(3) {animation-delay: 0.15s;}

      @keyframes run {
        0% {left: -5%;}
        10%, 60% {left: calc((100% - 5%) / 2);}
        70%, 100% {left: 100%;}
      }

      @keyframes rotating {
        0%, 10% {transform: rotate(0deg);}
        60%, 100% {transform: rotate(-1turn);}
      }

                    `}
      </style>

      <div className={'loader'}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
