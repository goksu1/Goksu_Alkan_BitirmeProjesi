import React, { FC, Fragment } from "react";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./CardModal.styled";
import { CardModalProps } from "./CardModal.types";

const Modal: FC<CardModalProps> = (props) => {
  return (
    <Fragment>
      {props.active && (
        <ModalBlock>
          <ModalOverlay onClick={() => props.hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{props.title}</ModalTitle>
              <ModalClose onClick={() => props.hideModal()}>X</ModalClose>
            </ModalHeader>
            <ModalBody>{props.children}</ModalBody>
            <ModalFooter>{props.footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default Modal;

function hideModal(): void {

}
