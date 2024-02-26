import { gsap } from 'gsap';

export const hideCart = () => {
  const tl = gsap.timeline();

  tl.to('.domain-cart', {
    y: '25%',
    opacity: 0,
    duration: 0.5,
  })
    .to('.domain-cart', {
      display: 'none',
      duration: 0,
    })
    .to('.domain-transfer', {
      display: 'block',
      y: '25%',
      opacity: 0,
      duration: 0,
    })
    .to('.domain-transfer', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.25,
    });
};
