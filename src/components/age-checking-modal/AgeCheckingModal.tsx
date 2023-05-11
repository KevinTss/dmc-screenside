import { useState } from 'react';
import { Modal, Button } from '../ui';
import { Container, Title, P, ButtonsGroup } from './AgeCheckingModal.styles';

import { isAgeChecked, checkAge } from '../../src/utils'

export const AgeCheckingModal = () => {
  if (isAgeChecked()) return null

  return <AgeCheckingModalContent />
};

const AgeCheckingModalContent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal isOpen={isOpen}>
      <Container>
        <Title>Welcome to Table Brussels</Title>
        <P>Are you of legal age to drink alcohol?</P>
        <ButtonsGroup>
          <Button
            onClick={() => {
              checkAge();
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
}
