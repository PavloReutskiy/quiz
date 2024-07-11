import { DefaultCheckbox } from '@/components/Common/DefaultCheckbox.styled';
import { useTopicsByAge } from '@/hooks/useTopicsByAge';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Emoji } from '@/components/Common/Emoji.styled';
import { Label } from './BubbleCheckbox.styled';

type Props = {
  value: string;
};

const BubbleCheckbox: FC<Props> = ({ value }) => {
  const options = useTopicsByAge();
  const { t } = useTranslation();
  const { register } = useFormContext();

  return (
    <Label htmlFor={value}>
      <DefaultCheckbox {...register(value)} id={value} />
      <Emoji size="25" margin="5">
        {options[value][1]}
      </Emoji>
      <span>{t(`Question5.${value}`)}</span>
    </Label>
  );
};

export default BubbleCheckbox;
