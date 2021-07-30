export const getBrowser = (browser) => {
  const sUsrAg = navigator.userAgent;
  return sUsrAg.indexOf(browser) > -1;
};
