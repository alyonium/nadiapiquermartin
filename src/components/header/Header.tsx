import styles from '@/components/Header/Header.module.css';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Dropdown from '@/components/dropdown/Dropdown';

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src={logo} />

      <div className={styles.nav}>
        <span className='body-md-l'>Обо мне</span>
        <span className='body-md-l'>Услуги</span>
        <span className='body-md-l'>Отзывы</span>
        <span className='body-md-l'>Кабинет</span>
        <span className='body-md-l'>Рекомендации</span>
        <span className='body-md-l'>Контакты</span>
      </div>

      <Dropdown />
    </div>
  );
};

export default Header;
