import { Provider } from 'react-redux';
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react"
import Application from "./Application";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  );
}

export default App;
