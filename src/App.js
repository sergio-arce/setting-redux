import React from 'react'
import { AppRouter } from './routers/AppRuter'

import { Provider } from 'react-redux'
import { store } from './redux/store/store'

export const App = () => <>
    <Provider store={ store }>
      <AppRouter />
    </Provider>
</>
