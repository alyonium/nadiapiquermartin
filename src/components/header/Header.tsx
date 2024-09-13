'use client';

import styles from '@/components/header/Header.module.css';
import Image from 'next/image';
import logo from '/public/logo.webp';
import logoWithName from '/public/logoWithName.webp';
import { useTranslations } from 'next-intl';
import { SelectLang } from '@/components/select/Select';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import classNames from 'classnames';
import { Cross1Icon } from '@radix-ui/react-icons';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

gsap.registerPlugin(ScrollToPlugin);

type HeaderProps = {
  isBlue?: boolean;
  getNewPathnameForLocale: (newLocale: string) => string;
};

const Header = ({ isBlue, getNewPathnameForLocale }: HeaderProps) => {
  const t = useTranslations('header');
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();
  const { push } = useRouter();

  const { contextSafe } = useGSAP();

  const toggleSideMenu = () => {
    document.body.style.overflowY = sideMenuOpen ? 'visible' : 'hidden';
    setSideMenuOpen(!sideMenuOpen);
  };

  const scroll = contextSafe((id: string) => {
    gsap.to(window, {
      opacity: 1,
      duration: 0.5,
      scrollTo: `#${id}`,
    });
  });

  const goToBlock = (id: string) => {
    if (pathname.length > 3) {
      push(`/${locale}`);
      scroll(id);
    } else {
      scroll(id);
    }
  };

  return (
    <div
      className={classNames(
        isBlue ? 'backgroundBlue' : 'backgroundTransparent',
        styles.contentWrapper,
        'content-wrapper'
      )}
    >
      <div className={styles.header}>
        <Image
          alt='logo'
          src={logo}
          className={styles.logo}
          onClick={() => push(`/${locale}`)}
        />

        <div className={styles.nav}>
          <span
            onClick={() => goToBlock('about')}
            className={classNames(styles.menuLink, 'body-md-l')}
          >
            {t('about')}
          </span>
          <span
            onClick={() => goToBlock('services')}
            className={classNames(styles.menuLink, 'body-md-l')}
          >
            {t('services')}
          </span>
          {/*Todo*/}
          {/*<span className={classNames(styles.menuLink, 'body-md-l')}>*/}
          {/*  {t('reviews')}*/}
          {/*</span>*/}
          <span
            onClick={() => goToBlock('office')}
            className={classNames(styles.menuLink, 'body-md-l')}
          >
            {t('office')}
          </span>

          <span
            onClick={() => goToBlock('recommendations')}
            className={classNames(styles.menuLink, 'body-md-l')}
          >
            {t('recommendations')}
          </span>

          <span
            onClick={() => goToBlock('contacts')}
            className={classNames(styles.menuLink, 'body-md-l')}
          >
            {t('contacts')}
          </span>
        </div>

        <div className={styles.rightBlock}>
          <SelectLang getNewPathnameForLocale={getNewPathnameForLocale} />

          <HamburgerMenuIcon
            onClick={toggleSideMenu}
            className={styles.burgerMenuIcon}
          />
        </div>

        <div
          className={classNames(styles.blurLayer, sideMenuOpen && styles.open)}
        />

        <div
          className={classNames(styles.sideMenu, sideMenuOpen && styles.open)}
        >
          <Cross1Icon
            onClick={toggleSideMenu}
            className={styles.crossMenuIcon}
          />

          <Image
            alt='logo'
            src={logoWithName}
            className={styles.logoWithName}
          />

          <div className={styles.sideMenuNav}>
            <Link
              href={`/${locale}#about`}
              onClick={toggleSideMenu}
              className={styles.sideMenuNavItem}
            >
              <span className='body-lg-i text-color-secondary400'>01</span>
              <span className='body-lg-l'>{t('about')}</span>
            </Link>

            <Link
              href={`/${locale}#services`}
              onClick={toggleSideMenu}
              className={styles.sideMenuNavItem}
            >
              <span className='body-lg-i text-color-secondary400'>02</span>
              <span className='body-lg-l'>{t('services')}</span>
            </Link>

            {/*Todo*/}
            {/*<a*/}
            {/*  onClick={toggleSideMenu}*/}
            {/*  href='#reviews'*/}
            {/*  className={styles.sideMenuNavItem}*/}
            {/*>*/}
            {/*  <span className='body-lg-i text-color-secondary400'>03</span>*/}
            {/*  <span className='body-lg-l'>{t('reviews')}</span>*/}
            {/*</a>*/}

            <Link
              href={`/${locale}#office`}
              onClick={toggleSideMenu}
              className={styles.sideMenuNavItem}
            >
              <span className='body-lg-i text-color-secondary400'>03</span>
              <span className='body-lg-l'>{t('office')}</span>
            </Link>

            <Link
              href={`/${locale}#recommendations`}
              onClick={toggleSideMenu}
              className={styles.sideMenuNavItem}
            >
              <span className='body-lg-i text-color-secondary400'>04</span>
              <span className='body-lg-l'>{t('recommendations')}</span>
            </Link>

            <Link
              href={`/${locale}#contacts`}
              onClick={toggleSideMenu}
              className={styles.sideMenuNavItem}
            >
              <span className='body-lg-i text-color-secondary400'>05</span>
              <span className='body-lg-l'>{t('contacts')}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
