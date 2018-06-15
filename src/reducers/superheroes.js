import { SUPER_HEROES_RECEIVED } from "../actions/actions";

const initialState = [
  {
    name: "Leia Organa",
    status: "alive",
    picture: "https://starwars-visualguide.com/assets/img/characters/5.jpg"
  },
  {
    name: "C-3PO",
    status: "alive",
    picture: "https://starwars-visualguide.com/assets/img/characters/2.jpg"
  },
  {
    name: "Biggs Darklighter",
    status: "dead",
    picture: "https://starwars-visualguide.com/assets/img/characters/9.jpg"
  }
];

const superheroes = (prevState = initialState, action) => {
  if (action.type === SUPER_HEROES_RECEIVED) {
    console.log(action.response.title);
    return prevState.map(heroObject => ({
      ...heroObject,
      status: "dead"
    }));
  }
  return prevState;
};

export default superheroes;
