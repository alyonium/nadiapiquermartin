'use client';

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
  const t = useTranslations('header');
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);

  const toggleSideMenu = () => {
    document.body.style.overflow = sideMenuOpen ? 'visible' : 'hidden';
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <div className={styles.header}>
      <Image alt='logo' src={logo} className={styles.logo} />

      <div className={styles.nav}>
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('about')}
        </span>
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('services')}
        </span>
        {/*Todo*/}
        {/*<span className={classNames(styles.menuLink, 'body-md-l')}>*/}
        {/*  {t('reviews')}*/}
        {/*</span>*/}
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('office')}
        </span>
        {/*Todo*/}
        {/*<span className={classNames(styles.menuLink, 'body-md-l')}>*/}
        {/*  {t('recommendations')}*/}
        {/*</span>*/}
        <span className={classNames(styles.menuLink, 'body-md-l')}>
          {t('contacts')}
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
            <span className='body-lg-i text-color-secondary400'>01</span>
            <span className='body-lg-l'>{t('about')}</span>
          </div>
          <div className={styles.sideMenuNavItem}>
            <span className='body-lg-i text-color-secondary400'>02</span>
            <span className='body-lg-l'>{t('services')}</span>
          </div>
          <div className={styles.sideMenuNavItem}>
            <span className='body-lg-i text-color-secondary400'>03</span>
            <span className='body-lg-l'>{t('reviews')}</span>
          </div>
          {/*Todo*/}
          {/*<div className={styles.sideMenuNavItem}>*/}
          {/*  <span className='body-lg-i text-color-secondary400'>04</span>*/}
          {/*  <span className='body-lg-l'>{t('office')}</span>*/}
          {/*</div>*/}
          {/*Todo*/}
          {/*<div className={styles.sideMenuNavItem}>*/}
          {/*  <span className='body-lg-i text-color-secondary400'>05</span>*/}
          {/*  <span className='body-lg-l'>{t('recommendations')}</span>*/}
          {/*</div>*/}
          <div className={styles.sideMenuNavItem}>
            {/*Todo*/}
            <span className='body-lg-i text-color-secondary400'>04</span>
            <span className='body-lg-l'>{t('contacts')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
