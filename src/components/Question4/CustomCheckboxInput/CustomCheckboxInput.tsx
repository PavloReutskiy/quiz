import { CustomCheckbox, Label } from './CustomCheckboxInput.styled';
import { DefaultCheckbox } from '@/components/Common/DefaultCheckbox.styled';
import CheckedIcon from '@/assets/checked.svg';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { FC } from 'react';

type Props = {
  value: string;
};

const CustomCheckboxInput: FC<Props> = ({ value }) => {
  const { t } = useTranslation();
  const { register } = useFormContext();
  return (
    <Label htmlFor={value}>
      <DefaultCheckbox {...register(value)} id={value} />
      <CustomCheckbox>
        <CheckedIcon />
      </CustomCheckbox>
      {t(`Question4.${value}`)}
    </Label>
  );
};

export default CustomCheckboxInput;
