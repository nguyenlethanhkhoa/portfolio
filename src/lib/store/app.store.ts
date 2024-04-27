import { configureStore } from '@reduxjs/toolkit'
import postSlice from '../slice/post.slice'
import categorySlice from '../slice/category.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        post: postSlice,
        category: categorySlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']