const round = (nb) => {
   const fraction = nb % 1;
   const integer = nb - fraction

   if (nb >= 0) {
    return fraction >= 0.5 ? integer + 1 : integer;
  } else {
    return fraction <= -0.5 ? integer - 1 : integer;
  }
}