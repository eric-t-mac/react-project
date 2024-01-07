import React from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "@/components";

// react-redux
import { Provider } from "react-redux";
import store from "@/store";

import "@/assets/css/common.scss";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
