import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import notesReducer from "./noteReducer";

const persistConfig = {
  key: "notes",
  storage,
};

const pReducer = persistReducer(persistConfig, notesReducer);

const Store = createStore(pReducer);
const persistor = persistStore(Store);
export default Store;
export { persistor };
