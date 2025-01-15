import { type FC } from 'react';
import { FormButton, InputController } from 'presentation/atomic-component/atom';
import { useLogin } from 'data/use-case';

interface KeywordsFormProps {
  keyword?: object;
  closeModal: () => void;
}

export const KeywordsForm: FC<KeywordsFormProps> = ({ keyword }) => {
  const {
    handleSubmit,
    onSubmit,
    control,
    formState: { isSubmitting }
  } = useLogin();

  return (
    <form className={'flex flex-col gap-5 w-full'} onSubmit={handleSubmit(onSubmit)}>
      <InputController
        autoFocus
        control={control}
        label={'E-mail'}
        name={'email'}
        placeholder={'Digite o e-mail'}
      />

      <InputController
        autoFocus
        control={control}
        label={'Senha'}
        name={'password'}
        placeholder={'Digite a senha'}
      />

      <div className={'mx-auto'}>
        <FormButton isSubmitting={isSubmitting} label={keyword ? 'Atualizar' : 'Cadastrar'} />
      </div>
    </form>
  );
};
