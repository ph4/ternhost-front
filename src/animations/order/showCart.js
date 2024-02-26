import { gsap } from 'gsap';

export const showCart = () => {
  const tl = gsap.timeline();

  tl.to('.domain-transfer', {
    y: '25%',
    opacity: 0,
    duration: 0.5,
  })
    .to('.domain-transfer', {
      display: 'none',
      duration: 0,
    })
    .to('.domain-cart', {
      display: 'flex',
      flexDirection: 'column',
      opacity: 0,
      y: '25%',
      duration: 0,
    })
    .to('.domain-cart', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 0.25,
    });
};
