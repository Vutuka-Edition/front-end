import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import currentUserRedux from './currentUserRedux'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['currentUser']
}

const rootReducer = combineReducers({
  currentUser: currentUserRedux,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch;