import Error404 from '@/pages/Errors/Error404';
import React, {ReactElement} from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../../pages/Home/Home';

function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
