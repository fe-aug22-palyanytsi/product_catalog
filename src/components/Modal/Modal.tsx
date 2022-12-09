import { FC } from 'react';
import cn from 'classnames';
import './Modal.scss';

type Props = {
  isActive: boolean;
};

export const Modal: FC<Props> = ({ isActive }) => {
  return (
    <div className={cn('modal__wrapper', {
      'modal__wrapper--is-active': isActive,
    })}
    >
      <div className={cn('modal__box', {
        'modal__box--is-active': isActive,
      })}
      >
        <h2 className="modal__title title title--xl">Thank you, mate!</h2>
        <p className="modal__text text text">Congrats with nice shopping!</p>
      </div>
    </div>
  );
};
