export const getResponsive = () => {
  let isMobile = false;
  if (window.innerWidth < 429) isMobile = true;
  return isMobile;
};
