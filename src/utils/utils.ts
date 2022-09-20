import { Level } from './const'


export const getLevelName = (level:string) => {
  switch(level) {
    case 'easy':
      return Level.EASY
    case 'medium':
      return Level.MEDIUM
    case 'hard':
      return Level.HARD
  }
}