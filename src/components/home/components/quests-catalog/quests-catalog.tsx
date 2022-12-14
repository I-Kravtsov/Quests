import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { title } from 'process';
// import { TYPES } from '../../../../utils/const';
import { getLevelName } from '../../../../utils/utils';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { setCurrentQuestType } from '../../../../store/action';
import { QuestListType } from '../../../../types/types';


const QuestsCatalog = () => {

  const currentType = useAppSelector((state) => state.currentQuestType);
  const questList:QuestListType = useAppSelector((state) => state.questList);
  const dispatch = useAppDispatch();
  const filteredQuestList = () => {
    if (currentType === 'all quests') {
      return questList;
    }
    return questList.filter((quest) => quest.type === currentType);
  }
  const handleTabClick = (evt: React.SyntheticEvent) => {
    const target = evt.target as HTMLElement;
    if(!(target.tagName ==='SPAN')) {
      return;
    }
    dispatch(setCurrentQuestType(target.dataset.type));
  }



  return (
    <>
    <S.Tabs onClick={handleTabClick}>
      
      <S.TabItem>
        <S.TabBtn isActive>
          <IconAllQuests />
          <S.TabTitle data-type="all quests">Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconAdventures />
          <S.TabTitle data-type="adventures">Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconHorrors />
          <S.TabTitle data-type="horror">Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconMystic />
          <S.TabTitle data-type="mystic">Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconDetective />
          <S.TabTitle data-type="detective">Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconScifi />
          <S.TabTitle data-type="sci-fi">Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>

    <S.QuestsList>
      {filteredQuestList().map((quest) => (
        <S.QuestItem key={quest.id}>
          <S.QuestItemLink to={`/quest/${quest.id}`}>
            <S.Quest>
              <S.QuestImage
                src={quest.previewImg}

                width="344"
                height="232"
                alt={`квест'${title}`}
              />

              <S.QuestContent>
                <S.QuestTitle>{quest.title}</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson />
                    {`${quest.peopleCount[0]}-${quest.peopleCount[1]} чел`}
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle />
                    {getLevelName(quest.level)}
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>
      ))
      }
    </S.QuestsList>
  </>
  )
};

export default QuestsCatalog;
