import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUserAction } from './actions/authActions';

import { Navigation } from './navigation/Navigation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserAction());
  }, [dispatch]);

  return <Navigation />
}

export default App;
