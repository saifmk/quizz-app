import { configureStore} from '@reduxjs/toolkit';
import quizzReducer from './features/qslice'

export const store = configureStore({
  reducer: {
    quizz: quizzReducer,
  }
});