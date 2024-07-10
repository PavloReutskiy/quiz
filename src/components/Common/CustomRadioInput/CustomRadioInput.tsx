import { useTranslation } from 'react-i18next';
import { Label } from './CustomRadioInput.styled';
import CheckedIcon from '@/assets/checked.svg';
import { UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { LanguageSchema } from '../../Question1/languageSchema';
import { DefaultRadio } from '@/components/Common/DefaultRadio.styled';
import { CustomRadio } from '@/components/Common/CustomRadio.styled';

type Prop = {
  value: string;
  register: UseFormRegister<LanguageSchema>;
};

const CustomRadioInput: FC<Prop> = ({ value, register }) => {
  const { t } = useTranslation();

  return (
    <Label htmlFor={value.toLowerCase()}>
      <DefaultRadio
        {...register('language')}
        value={value}
        id={value.toLowerCase()}
      />
      <CustomRadio>
        <CheckedIcon />
      </CustomRadio>
      {t(`Question1.${value.toLowerCase()}`)}
    </Label>
  );
};

export default CustomRadioInput;
