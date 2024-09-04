import styles from '@/components/Header/Header.module.css';
import Image from 'next/image';
import logo from '/public/logo.png';
import logoWithName from '/public/logoWithName.png';
import { useTranslations } from 'next-intl';
import { SelectLang } from '@/components/select/Select';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import classNames from 'classnames';
import { Cross1Icon } from '@radix-ui/react-icons';

const Header = () => {
  const t = useTranslations();
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <div className={styles.header}>
      <Image alt='logo' src={logo} className={styles.logo} />

      <div className={styles.nav}>
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('header.about')}
        </span>
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('header.services')}
        </span>
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('header.reviews')}
        </span>
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('header.office')}
        </span>
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('header.recommendations')}
        </span>
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('header.contacts')}
        </span>
      </div>

      <div className={styles.rightBlock}>
        <SelectLang />

        <HamburgerMenuIcon
          onClick={toggleSideMenu}
          className={styles.burgerMenuIcon}
        />
      </div>

      <div
        className={classNames(styles.blurLayer, sideMenuOpen && styles.open)}
      />

      <div className={classNames(styles.sideMenu, sideMenuOpen && styles.open)}>
        <Cross1Icon onClick={toggleSideMenu} className={styles.crossMenuIcon} />

        <Image alt='logo' src={logoWithName} className={styles.logoWithName} />

        <div className={styles.sideMenuNav}>
          <div className={styles.sideMenuNavItem}>
            <span className={classNames('body-lg-i', styles.navNumber)}>
              01
            </span>
            <span className='body-lg-l'>{t('header.about')}</span>
          </div>
          <div className={styles.sideMenuNavItem}>
            <span className={classNames('body-lg-i', styles.navNumber)}>
              02
            </span>
            <span className='body-lg-l'>{t('header.services')}</span>
          </div>
          <div className={styles.sideMenuNavItem}>
            <span className={classNames('body-lg-i', styles.navNumber)}>
              03
            </span>
            <span className='body-lg-l'>{t('header.reviews')}</span>
          </div>
          <div className={styles.sideMenuNavItem}>
            <span className={classNames('body-lg-i', styles.navNumber)}>
              04
            </span>
            <span className='body-lg-l'>{t('header.office')}</span>
          </div>
          <div className={styles.sideMenuNavItem}>
            <span className={classNames('body-lg-i', styles.navNumber)}>
              05
            </span>
            <span className='body-lg-l'>{t('header.recommendations')}</span>
          </div>
          <div className={styles.sideMenuNavItem}>
            <span className={classNames('body-lg-i', styles.navNumber)}>
              06
            </span>
            <span className='body-lg-l'>{t('header.contacts')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
