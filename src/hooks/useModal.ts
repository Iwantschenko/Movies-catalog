import {
  closeModal,
  openModal,
  type modalTypes,
} from '@store/slices/modalSlice';
import type { RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';

export const useModal = () => {
  const modal = useSelector((state: RootState) => state.modal.modal);
  const dispatch = useDispatch();

  return {
    modal,
    openModal: (modalType: modalTypes) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
  };
};
