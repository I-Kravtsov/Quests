import {createAction} from '@reduxjs/toolkit';
import { QuestListType, QuestCardType, OrderType } from '../types/types';
import { AppRoute } from '../utils/const';

export const setCurrentQuestType = createAction('setCurrentQuestType', (value: string|undefined) => ({payload: value}));
export const setIsBookingModalOpened = createAction('setIsBookingModalOpened', (value: boolean) => ({payload: value}));
export const loadQuests = createAction<QuestListType>('data/loadQuests');
export const loadQuest = createAction<QuestCardType>('data/loadQuest');
export const sendOrder = createAction<OrderType>('data/sendOrder');
export const setError = createAction<string>('setError');
export const redirectToRoute = createAction<AppRoute | string>('redirectToRoute');