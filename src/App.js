import "./App.css";

import { Provider, useSelector } from "react-redux";
import Counter from "./Counter";
import store from "./redux/store";
import Products from "./Products.jsx";
import Addproduct from "./Addproduct.jsx";

function App() {

  return (
    <Provider store={store}>

      <div className="App">
        <div>
          <h1>counter</h1>
          <Counter />
        </div>
        <div>
          <h1>products</h1>
          <Addproduct />
          <Products />
        </div>
      </div>
    </Provider>
  );
}

export default App;
