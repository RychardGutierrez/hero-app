export const TITLE_ASSOCIATIONS = 'APP HEROS';
export const TITLE_MARVEL = 'Marvel';
export const TITLE_DC = 'DC';
export const LOGIN = 'Login';
export const LOGOUT = 'Logout';
export const PUBLISHER_MARVEL = 'Marvel Comics';
export const PUBLISHER_DC = 'DC Comics';
export const MARVEL = 'marvel';
export const DC = 'dc';
export const SEARCH = 'Search';

export const IMAGE_PATH = require.context('../img', true);

export const getImageHero = (idHero) => IMAGE_PATH(`./${idHero}.jpg`).default;
