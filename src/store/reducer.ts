import { createReducer } from '@reduxjs/toolkit';
import { OrderType, QuestCardType, QuestListType } from '../types/types'
import { loadQuests, setIsBookingModalOpened, loadQuest, setCurrentQuestType, sendOrder } from './action'

type InitialStateType = {
  currentQuestType: string |undefined,
  isBookingModalOpened: boolean,
  questList: QuestListType,
  quest: QuestCardType
  error: string,
  isDataLoaded: boolean,
  order: OrderType,
}

const initialState: InitialStateType = {
  currentQuestType: 'all quests',
  isBookingModalOpened: false,
  questList: [],
  quest: {
    "id": '0',
    "title": '',
    "description": '',
    "previewImg": '',
    "coverImg": '',
    "type": '',
    "level": '',
    "peopleCount": [],
    "duration": 0
  },
  error: '',
  isDataLoaded: false,
  order: {
    name: '',
    phone: '',
    peopleCount: 0,
    isLegal: false,
  },
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentQuestType, (state, action) => {
      state.currentQuestType = action.payload;
    })
    .addCase(setIsBookingModalOpened, (state, action) => {
      state.isBookingModalOpened = action.payload;
    })
    .addCase(loadQuests, (state, action) => {
      state.questList = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(sendOrder, (state, action) => {
      state.order = action.payload;
      state.isDataLoaded = true;
    });
});

export {reducer};