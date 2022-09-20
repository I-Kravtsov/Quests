import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../store/';
import { store } from '../store';
import { QuestCardType, QuestListType, OrderType } from '../types/types';
import { loadQuests, loadQuest, setError, sendOrder } from './action';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../utils/const';
import {errorHandle} from '../services/error-handle';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);



export const fetchQuestsListAction = createAsyncThunk(
  'data/fetchqestsList',
  async () => {
    try {
      const {data} = await api.get<QuestListType>('/quests');
      store.dispatch(loadQuests(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchQuestAction = createAsyncThunk(
  'data/fetchqest',
  async (filmId: number) => {
    try {
      const {data} = await api.get<QuestCardType>(`/quests/${filmId}`);
      store.dispatch(loadQuest(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSendOrderAction = createAsyncThunk(
  'data/fetchSendOrder',
  async (order) => {
    try {
      console.log('ee')
      const {data} = await api.post<OrderType>(`${APIRoute.orders}`);
      store.dispatch(sendOrder(data));
      console.log('dd');
    } catch (error) {
      errorHandle(error);
    }
  },
);







