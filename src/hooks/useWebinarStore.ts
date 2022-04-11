import { useContext } from 'react';

import { WebinarStore, WebinarContextData } from '../context/WebinarStore';

function useWebinar(): WebinarContextData {
  const context = useContext(WebinarStore);

  if (!context) {
    throw new Error('useWebinar must be used within an WebinarProvider');
  }

  return context;
}

export default useWebinar;
