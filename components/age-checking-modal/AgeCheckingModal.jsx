import { useState } from 'react';
import { Modal, Button } from '../ui';
import { Container, Title, P, ButtonsGroup } from './styles';

export const AgeCheckingModal = ({ onConfirm }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal isOpen={isOpen}>
      <Container>
        <Title>Welcome to Table Brussels</Title>
        <P>Are you of legal age to drink alcohol?</P>
        <ButtonsGroup>
          <Button
            onClick={() => {
              onConfirm();
              setIsOpen(false);
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => window.open('https://www.google.be/', '_self')}
          >
            No
          </Button>
        </ButtonsGroup>
      </Container>
    </Modal>
  );
};
