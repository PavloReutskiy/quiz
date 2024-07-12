import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import { Container } from '@/components/Common/Container.styled';
import { Button } from '@/components/Common/Button.styled';
import { clearLocalStorage } from '@/utils/clearLocalStorage';
import { downloadCSV } from '@/utils/downloadCSV';
import DownloadIcon from '@/assets/download-icon.svg';
import animationData from '@/assets/success-lottie.json';
import {
  DownloadBtn,
  Heading,
  SubHeading,
  Wrapper,
} from './ThankYouPage.styled';
import { RoutePath } from '@/router/routes';
import { routesAnimation } from '@/constants/routesAnimation';

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

  const headers: QuizHeaders = {
    language: t('Question1.heading'),
    gender: t('Question2.heading'),
    age: t('Question3.heading'),
    hate: t('Question4.headingCSV'),
    topics: t('Question5.heading'),
    email: t('Email.heading'),
  };

  const handleDownloadCSV = () => {
    downloadCSV(headers);
  };

  const handleRetakeQuiz = () => {
    clearLocalStorage();
    navigate(`/${RoutePath.QUIZ}/1`);
    i18n.changeLanguage('en');
  };

  return (
    <Container>
      <Wrapper
        variants={routesAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Heading>{t('ThankYou.heading')}</Heading>
        <SubHeading>{t('ThankYou.subHeading')}</SubHeading>
        <Lottie options={defaultOptions} height={110} width={110}></Lottie>

        <DownloadBtn onClick={handleDownloadCSV}>
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
