import { Label } from './GenderRadioInput.styled';
import { Emoji } from '@/components/Common/Emoji.styled';
import { DefaultRadio } from '@/components/Common/DefaultRadio.styled';
import { useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Prop = {
  value: string;
  icon: string;
};

const GenderRadioInput: FC<Prop> = ({ value, icon }) => {
  const { t } = useTranslation();
  const { register } = useFormContext();

  return (
    <Label htmlFor={value.toLowerCase()}>
      <DefaultRadio
        {...register('gender')}
        value={t(`Question2.${value.toLowerCase()}`)}
        id={value.toLowerCase()}
      />
      <Emoji>{icon}</Emoji>
      <span>{t(`Question2.${value.toLowerCase()}`)}</span>
    </Label>
  );
};

export default GenderRadioInput;
