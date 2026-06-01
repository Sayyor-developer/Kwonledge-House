import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1-usul: Butun brauzer oynasini tepaga ko'tarish
    window.scrollTo(0, 0);

    // 2-usul: Sening `.App` yoki `.main-layout` divlaring scroll bo'layotgan bo'lsa, ularni majburlab tepaga ko'tarish
    const appContainer = document.querySelector('.App');
    const mainLayout = document.querySelector('.main-layout');

    if (appContainer) {
      appContainer.scrollTop = 0;
    }
    if (mainLayout) {
      mainLayout.scrollTop = 0;
    }
    
    // 3-usul: HTML va Body elementlarini ham tozalab yuborish
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

  }, [pathname]); // Har safar sahifa yo'li (url) o'zgarganda ishlaydi

  return null;
};

export default ScrollToTop;