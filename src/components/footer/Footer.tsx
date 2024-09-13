import { useTranslations } from 'next-intl';
import styles from '@/components/footer/Footer.module.css';
import logo from '/public/logo.webp';
import Image from 'next/image';
import { getYear } from '@/utils/getYear';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { ClockIcon } from '@radix-ui/react-icons';
import { SewingPinFilledIcon } from '@radix-ui/react-icons';

const Footer = () => {
  const t = useTranslations('footer');
  const mt = useTranslations('main');

  return (
    <div className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.scheduleWrapper}>
            <span className='body-sm-l'>{t('online')}:</span>
            <div className={styles.dayWrapper}>
              <div className={styles.onlineWrapper}>
                <span className='body-sm-l'>{t('monday')}</span>
                <DotFilledIcon />
                <span className='body-sm-l'>{t('tuesday')}</span>
                <DotFilledIcon />
                <span className='body-sm-l'>{t('thursday')}</span>
              </div>
              <div className={styles.timeIconWrapper}>
                <ClockIcon />
                <span className='body-sm-l'>16:00 - 20:00</span>
              </div>
            </div>
          </div>
          {/*TODO*/}
          <a
            className={styles.placeIconWrapper}
            href='https://maps.app.goo.gl/rvdg9PoqHQVow2KS9'
          >
            <SewingPinFilledIcon />
            <span className='body-sm-l'>{mt('address')}</span>
          </a>
        </div>
        <Image alt='logo' src={logo} className={styles.logo} />
        <div className={styles.rightWrapper}>
          <div className={styles.scheduleWrapper}>
            <span className='body-sm-l'>{t('offline')}:</span>
            <div className={styles.daysWrapper}>
              <div className={styles.dayWrapper}>
                <span className='body-sm-l'>{t('wednesday')}</span>
                <div className={styles.timeIconWrapper}>
                  <ClockIcon />
                  <span className='body-sm-l'>16:00 - 21:00</span>
                </div>
              </div>

              <div className={styles.dayWrapper}>
                <span className='body-sm-l'>{t('saturday')}</span>
                <div className={styles.timeIconWrapper}>
                  <ClockIcon />
                  <span className='body-sm-l'>10:00 - 15:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className='body-sm-l'>© {getYear()} Nadia Piquer Martin</span>
    </div>
  );
};

export default Footer;
