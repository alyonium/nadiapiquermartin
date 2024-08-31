import styles from '@/components/Header/Header.module.css';
import Image from 'next/image';
import logo from '/public/logo.png';
import { useTranslations } from 'next-intl';
import { SelectLang } from '@/components/select/Select';

const Header = () => {
  const t = useTranslations();

  return (
    <div className={styles.header}>
      <Image alt='logo' src={logo} />

      <div className={styles.nav}>
        <span className='body-md-l'>{t('header.about')}</span>
        <span className='body-md-l'>{t('header.services')}</span>
        <span className='body-md-l'>{t('header.reviews')}</span>
        <span className='body-md-l'>{t('header.office')}</span>
        <span className='body-md-l'>{t('header.recommendations')}</span>
        <span className='body-md-l'>{t('header.contacts')}</span>
      </div>

      <SelectLang />
    </div>
  );
};

export default Header;
