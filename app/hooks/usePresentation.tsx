import { useLocation, useNavigate } from '@remix-run/react';

const usePresentation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const slide = Number(pathname.split('/').pop());
  const totalSlides = 24;

  const goToPrevious = () => {
    navigate(`/slide/${slide === 1 ? totalSlides : `${slide <= 10 ? '0' : ''}${slide - 1}`}`);
  };

  const goToNext = () => {
    navigate(`/slide/${slide === totalSlides ? '01' :  `${slide < 9 ? '0' : ''}${slide + 1}`}`);
  }

  return { goToPrevious, goToNext };
}

export default usePresentation;

