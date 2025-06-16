import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type modalTypes = 'addMovie' | 'editMovie' | 'confirmDelete';

interface modalStateType {
  modal: modalTypes | null;
}

const initialState: modalStateType = {
  modal: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<modalTypes>) => {
      state.modal = action.payload;
    },
    closeModal: state => {
      state.modal = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
