import { useTranslation } from 'react-i18next';
import { CustomRadio, Label, StyledRadioInput } from './RadioInput.styled';
import CheckedIcon from '@/assets/checked.svg';
import { UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { LanguageSchema } from '../languageSchema';

type Prop = {
  language: string;
  register: UseFormRegister<LanguageSchema>;
};

const RadioInput: FC<Prop> = ({ language, register }) => {
  const { t } = useTranslation();

  return (
    <Label htmlFor={language.toLowerCase()}>
      <StyledRadioInput
        {...register('language')}
        value={language}
        id={language.toLowerCase()}
      />
      <CustomRadio>
        <CheckedIcon />
      </CustomRadio>
      {t(`Question1.${language.toLowerCase()}`)}
    </Label>
  );
};

export default RadioInput;
