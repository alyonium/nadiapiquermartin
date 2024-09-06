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
  const t = useTranslations();
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
              id='mainFrame'
              className={styles.iframe}
              name='mainFrame'
              src='https://app.clinic-cloud.com/citaonline.php/NadiaPiquerMartin'
              frameBorder='0'
              height='450'
              width='950'
            ></iframe>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalWindow;
