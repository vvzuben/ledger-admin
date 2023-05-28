import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { Description, ModalContainer, Title } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void ;
  pageName: string;
}

const UnSavedModal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, onDelete, pageName } = props;

  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <Image
          src="/assets/images/icons/danger.svg"
          width={128}
          height={128}
          alt=":( Not Found"
        />
        <Title>You’re about to delete a {pageName}</Title>
        <Description>
          This will delete your {pageName} from our database. Are you sure?
        </Description>
        <Button fullWidth mb={12} color="danger" onClick={onDelete}>
          Delete {pageName}
        </Button>
        <Button fullWidth color="link" onClick={onClose}>
          Cancel and exit
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default UnSavedModal;
