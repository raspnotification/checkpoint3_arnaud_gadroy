export const SUPER_HEROES_RECEIVED = "SUPER_HEROES_RECEIVED";

export const makeSuperHeroesReceived = response => ({
  type: SUPER_HEROES_RECEIVED,
  response
});
