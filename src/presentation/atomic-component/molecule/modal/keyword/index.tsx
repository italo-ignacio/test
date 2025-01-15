import { Button, IconButton } from '@mui/material';
import { EditSvg } from 'main/assets';
import { KeywordsForm } from 'presentation/atomic-component/molecule/form/keyword';
import { Modal } from 'presentation/atomic-component/atom/modal';
import { useModal } from 'data/hooks';
import type { FC } from 'react';

interface KeywordModalProps {
  keyword?: object;
}

export const KeywordModal: FC<KeywordModalProps> = ({ keyword }) => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        keyword ? (
          <IconButton
            onClick={openModal}
            sx={{
              ':hover': {
                backgroundColor: '#2b5f9e6a'
              },
              backgroundColor: '#1D427338',
              color: '#1D4273',
              height: '38px',
              width: '38px'
            }}
          >
            <img
              alt={'icon'}
              height={'50px'}
              src={EditSvg}
              style={{
                paddingLeft: '3px'
              }}
              width={'50px'}
            />
          </IconButton>
        ) : (
          <Button className={'w-full tablet:max-w-[225px]'} onClick={(): void => openModal()}>
            NOVO CADASTRO
          </Button>
        )
      }
      size={'medium'}
      title={`${keyword ? 'EDIÇÃO' : 'CADASTRO'} DE PALAVRAS-CHAVE`}
    >
      <KeywordsForm closeModal={closeModal} keyword={keyword} />
    </Modal>
  );
};
