import React , { lazy, memo, Suspense } from 'react';
import Spinner from './Components/Spinner/Spinner';
import Navabar from './Components/Navabar/Navabar';
 const RouterPath = lazy(() => import('./Components/RouterPath'));
function App() {
  return (
    <>
    <Suspense  fallback={<Spinner />}>
      <Navabar />
      <RouterPath />
    </Suspense>
    </>
  );
}

export default App;
