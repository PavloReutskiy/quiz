import { Container } from '@/components/Common/Container.styled';
import { Button } from '@/components/Common/Button.styled';
import { useTranslation } from 'react-i18next';
import DownloadIcon from '@/assets/download-icon.svg';
import Lottie from 'react-lottie';
import animationData from '@/assets/success-lottie.json';
import { clearLocalStorage } from '@/utils/clearLocalStorage';
import { useNavigate } from 'react-router-dom';
import { animations } from './constants';
import {
  DownloadBtn,
  Heading,
  SubHeading,
  Wrapper,
} from './ThankYouPage.styled';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ThankYouPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    clearLocalStorage();
    navigate('/quiz/1');
    i18n.changeLanguage('en');
  };

  return (
    <Container>
      <Wrapper
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Heading>{t('ThankYou.heading')}</Heading>
        <SubHeading>{t('ThankYou.subHeading')}</SubHeading>
        <Lottie options={defaultOptions} height={110} width={110}></Lottie>

        <DownloadBtn>
          <DownloadIcon />
          <span>{t('ThankYou.download')}</span>
        </DownloadBtn>

        <Button withoutMarginTop onClick={handleRetakeQuiz} type="button">
          {t('ThankYou.retake')}
        </Button>
      </Wrapper>
    </Container>
  );
};

export default ThankYouPage;
