import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from '@/modules/main/services/Services.module.css';
import Heading from '@/components/heading/Heading';
import Collapse from '@/components/collapse/Collapse';
import ModalWindow from '@/components/modalWindow/ModalWindow';
import Button from '@/components/button/Button';
import { ButtonType } from '@/types/types';
import Consultations from '@/modules/main/services/components/consultations/Consultations';
import Gynecological from '@/modules/main/services/components/gynecological/Gynecological';

const Services = () => {
  const t = useTranslations();

  return (
    <div className={classNames('content-wrapper', styles.contentWrapper)}>
      <div className={classNames('content', styles.content)}>
        <Heading
          trigger={styles.contentWrapper}
          target={styles.content}
          text={t('services.heading')}
        />

        <div className={styles.collapseWrapper}>
          <Collapse
            heading={t('services.consultations.heading')}
            content={<Consultations />}
          />

          <Collapse
            heading={t.rich('services.gynecological.heading', {
              italic: (chunks) => <span className='body-lg-i'>{chunks}</span>,
            })}
            content={<Gynecological />}
          />

          <Collapse
            heading={t.rich('services.contraception.heading', {
              italic: (chunks) => <span className='body-lg-i'>{chunks}</span>,
            })}
            content={<div>Content</div>}
          />

          <Collapse
            heading={t.rich('services.obstetrics.heading', {
              italic: (chunks) => <span className='body-lg-i'>{chunks}</span>,
            })}
            content={<div>Content</div>}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <span className='body-md-l'>{t('services.payment')}</span>

          <ModalWindow
            button={
              <Button text={t('services.button')} type={ButtonType.secondary} />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
