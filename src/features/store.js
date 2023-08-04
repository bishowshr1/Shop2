import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './auth/authApi'
import userReuducer from './userInfo'
import { productApi } from './product/productApi'

export const store = configureStore({
  reducer: {
    userInfo: userReuducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      productApi.middleware
    ]),
})

