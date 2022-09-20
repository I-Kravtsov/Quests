import { useEffect } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { getLevelName } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuestAction } from '../../store/api-action';
import { setIsBookingModalOpened } from '../../store/action';


type RouteParams = {
  id: string;
}

const DetailedQuest = ():JSX.Element => {
  const params = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  useEffect(()=> {
    dispatch(fetchQuestAction(Number(params.id)));
  },[dispatch, params.id]);

  const quest = useAppSelector((state) => state.quest);
  const isBookingModalOpened = useAppSelector((state) => state.isBookingModalOpened);
  const onBookingBtnClick = () => {
    dispatch(setIsBookingModalOpened(true));
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={quest.coverImg}
          alt={`квест'${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>приключения</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount[0]}-${quest.peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getLevelName(quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
