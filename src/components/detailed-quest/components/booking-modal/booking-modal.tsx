import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { useRef, FormEvent } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { OrderType } from '../../../../types/types';
import { sendOrder, setIsBookingModalOpened } from '../../../../store/action';


const BookingModal = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement| null>(null);
  const peopleRef = useRef<HTMLInputElement| null>(null);
  const isLegalRef = useRef<HTMLInputElement| null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (formData: OrderType) => {
    dispatch(sendOrder(formData));
    dispatch(setIsBookingModalOpened(false));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(nameRef.current !== null && phoneRef.current !== null && peopleRef.current !== null && isLegalRef.current !== null) {
      onSubmit({
        name: nameRef.current.value,
        peopleCount: Number(peopleRef.current.value),
        phone: phoneRef.current.value,
        isLegal: isLegalRef.current.checked,
      });
    }
  };
  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="#"
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={phoneRef}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              ref={peopleRef}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              ref={isLegalRef}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
}


export default BookingModal;
