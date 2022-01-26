const Breakpoint = {
  S: '498px',
  M: '768px',
  L: '1024px',
  XL: '1280px',
};

export const MediaQuery = {
  S_AND_DOWN: `@media screen and (max-width: ${Breakpoint.S})`,
  M_AND_DOWN: `@media screen and (max-width: ${Breakpoint.M})`,
  L_AND_DOWN: `@media screen and (max-width: ${Breakpoint.L})`,
  XL_AND_DOWN: `@media screen and (max-width: ${Breakpoint.XL})`,
};
