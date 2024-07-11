import { useTranslation } from 'react-i18next';
import { Label } from './CustomRadioInput.styled';
import CheckedIcon from '@/assets/checked.svg';
import { useFormContext } from 'react-hook-form';
import { DefaultRadio } from '@/components/Common/DefaultRadio.styled';
import { CustomRadio } from '@/components/Common/CustomRadio.styled';
import { FC } from 'react';

type Props = {
  value: string;
  dictionary: string;
  height?: string;
  type: string;
};

const CustomRadioInput: FC<Props> = ({ value, dictionary, height, type }) => {
  const { t } = useTranslation();
  const { register } = useFormContext();

  return (
    <Label htmlFor={value.toLowerCase()} height={height}>
      <DefaultRadio
        {...register(type)}
        value={value}
        id={value.toLowerCase()}
      />
      <CustomRadio>
        <CheckedIcon />
      </CustomRadio>
      {t(`${dictionary}.${value.toLowerCase()}`)}
    </Label>
  );
};

export default CustomRadioInput;
