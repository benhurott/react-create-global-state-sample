import React, { Component } from 'react';

import { GlobalCounterProvider } from './useGlobalCounter'

import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <GlobalCounterProvider>
        <div style={{ margin: '20px' }}>
          <Counter />
          <Counter />
        </div>
      </GlobalCounterProvider>
    );
  }
}

export default App;
