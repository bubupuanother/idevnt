import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import * as rdc from './reducer'
const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2
}
const data = combineReducers({
	user: persistReducer(
		persistConfig,
		rdc.User
	),
	data: rdc.Get,
	filterdata: rdc.Filterdata,
})
const windowRedux = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	data,
	windowRedux(applyMiddleware(promise, thunk))
)
export { store }
