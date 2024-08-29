import React, { createContext, useState } from 'react';
import Home from './Pages/Home';
import './app.css';

import { AppSettingProvider } from './context/ThemeContext';


const App = () => {

  const [appSetting, setAppSetting] = useState({ IsDark: false,Language: 'en' });

  return (
    <AppSettingProvider value={{ appSetting, setAppSetting }}>
      <Home />
    </AppSettingProvider>
  );
};

export default App;
