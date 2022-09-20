export type QuestCardType = {
  "id": string,
  "title": string,
  "description":string,
  "coverImg": string,
  "type": string,
  "level": string,
  "peopleCount": number[],
  "duration": number
  "previewImg": string,
}

export type QuestListType = QuestCardType[];

export type OrderType = {
  name: string,
  peopleCount: number,
  phone: string,
  isLegal: boolean,
}