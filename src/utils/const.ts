export const TYPES = [
  {
    name: 'AllQuests',
    value: 'Все квесты',
  },
  {
    name: 'Adventures',
    value: 'Приключения',
  },
  {
    name: 'Horrors',
    value: 'Ужасы',
  },
  {
    name: 'Mystic',
    value: 'Мистика',
  },
  {
    name: 'Detective',
    value: 'Детектив',
  },
  {
    name: 'Scifi',
    value: 'Sci-fi',
  },
];

export enum Level {
  EASY = 'легкий',
  MEDIUM = 'средний',
  HARD = 'сложный',

}
export enum AppRoute {
  Root = '/',
  quest = '/quest/:id',
  contacts = '/contacts',
  NotFound = '*',
}

export enum APIRoute {
  questList = '/quests',
  quest = '/quests/',
  orders = '/orders',
}

export enum HttpCode {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}

export const TIMEOUT_SHOW_ERROR = 5000;