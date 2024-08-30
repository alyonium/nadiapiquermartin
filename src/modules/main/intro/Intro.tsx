import classNames from 'classnames';
import styles from '@/modules/main/intro/Intro.module.css';
import Header from '@/components/header/Header';
import Button from '@/components/button/Button';
import Image from 'next/image';
import introPhoto from './intro-photo.png';
// import { ButtonType } from '@/types/types';

export const Intro = () => {
  return (
    <div className={classNames('content-wrapper', styles.blockWrapper)}>
      <div className='content'>
        <Header />

        <div
          className={classNames(
            'transparent-wrapper',
            styles.transparentBlockWrapper
          )}
        >
          <Image src={introPhoto} />

          <div className={styles.textBlockWrapper}>
            <div className={styles.textWrapper}>
              <h1 className='header-lg'>Dra. Nadia Piquer Martin</h1>
              <span className='body-lg-l'>Акушер-гинеколог в Валенсии</span>
            </div>
            <Button text={'Записаться на приём'} type={'primary'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
