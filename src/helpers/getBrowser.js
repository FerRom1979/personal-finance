export const getBrowser = (browser) => {
  const sUsrAg = navigator.userAgent;
  console.log(sUsrAg);
  return sUsrAg.indexOf(browser) > -1;
};
