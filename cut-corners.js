const trunc = (nb) => parseInt(nb);

const floor = (nb) => (nb < 0 && trunc(nb) !== nb ? trunc(nb) - 1 : trunc(nb));

const ceil = (nb) => (nb > 0 && trunc(nb) !== nb ? trunc(nb) + 1 : trunc(nb));

const round = (nb) =>
    nb >= 0
        ? nb - trunc(nb) >= 0.5
            ? trunc(nb) + 1
            : trunc(nb)
        : trunc(nb) - nb > 0.5
          ? trunc(nb) - 1
          : trunc(nb);

