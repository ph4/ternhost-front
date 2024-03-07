const getActiveOfferDuration = (offerDurations) => {
  return offerDurations.filter((duration) => duration.isActive === true)[0].value;
};

const setActiveOfferDuration = (offerDurations, id) => {
  if (offerDurations[id]) {
    offerDurations[id].isActive = true;

    return offerDurations;
  }
};

const resetActiveOfferDuration = (offerDurations) => {
  return offerDurations.map((duration) => (duration.isActive = false));
};

const animate = (id) => {
  const tl = gsap.timeline();

  tl.to(this.$refs.offers, {
    opacity: 0,
    y: '10%',
    duration: 0.5,
    onComplete: () => {
      this.resetActiveOfferDuration();
      this.setActiveOfferDuration(id);
    },
  }).to(this.$refs.offers, {
    opacity: 1,
    y: 0,
    duration: 0.5,
  });
};

export const UtilsOffers = {
  getActiveOfferDuration,
  setActiveOfferDuration,
  resetActiveOfferDuration,
  animate,
};
