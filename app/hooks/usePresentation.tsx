import { useLocation, useNavigate } from '@remix-run/react';

const usePresentation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const slide = Number(pathname.split('/').pop());
  const totalSlides = 20;

  const goToPrevious = () => {
    navigate(`/slide/${slide === 1 ? totalSlides : slide - 1}`);
  };

  const goToNext = () => {
    navigate(`/slide/${slide === totalSlides ? 1 : slide + 1}`);
  }

  return { goToPrevious, goToNext };
}

export default usePresentation;

