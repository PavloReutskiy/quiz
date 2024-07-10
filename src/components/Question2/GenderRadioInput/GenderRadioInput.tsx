import { Emoji, Label } from './GenderRadioInput.styled';
import { DefaultRadio } from '@/components/Common/DefaultRadio.styled';
import { UseFormRegister } from 'react-hook-form';
import { GenderSchema } from '../genderSchema';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Prop = {
  value: string;
  icon: string;
  register: UseFormRegister<GenderSchema>;
};

const GenderRadioInput: FC<Prop> = ({ value, icon, register }) => {
  const { t } = useTranslation();

  return (
    <Label htmlFor={value.toLowerCase()}>
      <DefaultRadio
        {...register('gender')}
        value={value}
        id={value.toLowerCase()}
      />
      <Emoji>{icon}</Emoji>
      <span>{t(`Question2.${value.toLowerCase()}`)}</span>
    </Label>
  );
};

export default GenderRadioInput;
