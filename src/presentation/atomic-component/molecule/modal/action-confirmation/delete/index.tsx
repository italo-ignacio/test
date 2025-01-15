import { Button, IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { Modal } from 'presentation/atomic-component/atom/modal';
import { useDelete } from 'data/use-case';
import { useModal } from 'data/hooks';
import type { FC, ReactNode } from 'react';

interface DeleteConfirmationModalProps {
  text: ReactNode | string;
  title: string;
  id: string;
  route: unknown;
  queryName: string;
  successMessage: string;
  deleteText?: string;
  onClose?: () => void;
  openElement?: ReactNode;
  isPatch?: boolean;
  hideCancelButton?: boolean;
}

export const DeleteConfirmationModal: FC<DeleteConfirmationModalProps> = ({
  text,
  id,
  title,
  route,
  onClose,
  deleteText,
  hideCancelButton,
  queryName,
  successMessage,
  openElement,
  isPatch
}) => {
  const { closeModal: close, openModal, isOpen } = useModal();

  const closeModal = (): void => {
    close();
    if (onClose) onClose();
  };

  const { handleDelete } = useDelete({
    closeModal,
    id,
    isPatch,
    queryName,
    route,
    successMessage
  });

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        openElement ? (
          <div className={'flex flex-col'} onClick={openModal}>
            {openElement}
          </div>
        ) : (
          <IconButton
            onClick={openModal}
            sx={{
              ':hover': {
                backgroundColor: '#f1b9a3'
              },
              backgroundColor: '#F3DBD2',
              height: '38px',
              padding: '5px',
              width: '38px'
            }}
          >
            <DeleteForever color={'error'} />
          </IconButton>
        )
      }
      size={'small'}
      title={title}
    >
      <div className={'w-full h-full flex justify-center items-center flex-col p-4 gap-8'}>
        <span className={'text-center'}>{text}</span>

        <div className={'flex flex-row gap-4 min-w-[200px] justify-between items-center'}>
          <Button autoFocus className={'w-full'} onClick={handleDelete}>
            {deleteText || 'Apagar'}
          </Button>

          {hideCancelButton ? null : (
            <Button className={'w-full'} onClick={closeModal} variant={'outlined'}>
              Cancelar
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
