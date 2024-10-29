'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import styles from '@/components/modalWindow/ModalWindow.module.css';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

type ModalWindowProps = {
  button: ReactNode;
};

const ModalWindow = ({ button }: ModalWindowProps) => {
  const t = useTranslations('main');
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.dialogButton} onClick={toggleModal}>
        {button}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <div className={styles.header}>
            <Dialog.Title className='body-lg-r'>
              {t('modalHeading')}
            </Dialog.Title>
            <Dialog.Close className={styles.closeButton}>
              <Cross1Icon className={styles.crossIcon} />
            </Dialog.Close>
          </div>
          <div className={styles.iframeWrapper}>
            <iframe
              src='//www.doctoralia.es/ajax/marketing/doctor/widget/big_with_calendar/nadia-piquer-martin/null?customUtm=null&amp;id=8xs4xwzmtm&amp;header=null&amp;content=null&amp;fullwidth=null&amp;referer=http%3A%2F%2Flocalhost%3A3000%2Fru&amp;hide_branding=true&amp;widget_position=bottom&amp;opinion=false&amp;saasonly=true'
              title='doctoralia online cita'
              className={styles.doctoralia}
              frameBorder='0'
              data-id='8xs4xwzmtm'
              height='703px'
              width='auto'
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalWindow;
