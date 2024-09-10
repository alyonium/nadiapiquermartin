import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/contacts/Contacts.module.css';
import Heading from '@/components/heading/Heading';
import Image from 'next/image';
import contactsPhoto from '/public/contactsPhoto.png';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import ModalWindow from '@/components/modalWindow/ModalWindow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons/faSquareWhatsapp';

const Contacts = () => {
  const t = useTranslations('contacts');

  return (
    <div className={classNames('content-wrapper', styles.contentWrapper)}>
      <div className={classNames('content', styles.content)}>
        <Heading
          trigger={styles.contentWrapper}
          target={styles.content}
          text={t('heading')}
        />

        <div className={styles.contentBlockWrapper}>
          <div className={styles.imageBlockWrapper}>
            <div className={classNames(styles.ellipse, 'ellipse')} />

            <Image
              alt='doctors work'
              src={contactsPhoto}
              className={classNames(styles.imageWrapper, 'imageWrapper')}
            />
          </div>

          <div className={styles.textBlockWrapper}>
            <div className={styles.textWrapper}>
              <span className='body-lg-l text-color-primary1000'>
                {t.rich('contacts1', {
                  italic: (chunks) => (
                    <span className='body-lg-i'>{chunks}</span>
                  ),
                })}
              </span>

              <span className='body-lg-l text-color-primary1000'>
                {t('contacts2')}:
              </span>

              <div className={styles.iconBlockWrapper}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                  <a
                    href='tel: +34623951878'
                    className='body-lg-l text-color-primary1000'
                  >
                    623 951 878
                  </a>
                </div>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                  <a
                    href='mailto:info@nadiapiquermartin.com'
                    className='body-lg-l text-color-primary1000'
                  >
                    info@nadiapiquermartin.com
                  </a>
                </div>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faSquareWhatsapp}
                  />
                  <a
                    href='https://wa.me/+34623951878'
                    className='body-lg-l text-color-primary1000'
                  >
                    623 951 878
                  </a>
                </div>
              </div>

              <span className='body-lg-l text-color-primary1000'>
                {t.rich('contacts3', {
                  italic: (chunks) => (
                    <span className='body-lg-i'>{chunks}</span>
                  ),
                })}
              </span>
            </div>

            <ModalWindow
              button={<Button text={t('button')} type={ButtonType.secondary} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
