import { setLoader } from '@store/slices/loaderSlice';
import type { RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';

export const useLoader = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const dispatch = useDispatch();

  return {
    isLoading,
    ShowLoader: () => dispatch(setLoader(true)),
    HideLoader: () => dispatch(setLoader(false)),
  };
};
