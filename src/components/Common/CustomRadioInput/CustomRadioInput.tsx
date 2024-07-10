import { useTranslation } from 'react-i18next';
import { Label } from './CustomRadioInput.styled';
import CheckedIcon from '@/assets/checked.svg';
import { Path, UseFormRegister } from 'react-hook-form';
import { DefaultRadio } from '@/components/Common/DefaultRadio.styled';
import { CustomRadio } from '@/components/Common/CustomRadio.styled';
import { LanguageSchema } from '@/components/Question1/languageSchema';
import { AgeSchema } from '@/components/Question3/ageSchema';

type FormValues = LanguageSchema | AgeSchema;

type Props<T extends FormValues> = {
  value: string;
  dictionary: string;
  register: UseFormRegister<T>;
  height?: string;
  type: Path<T>;
};

const CustomRadioInput = <T extends FormValues>({
  value,
  dictionary,
  register,
  height,
  type,
}: Props<T>) => {
  const { t } = useTranslation();

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
