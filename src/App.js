import Root from './pages/Root/Root';
import GamePage from './pages/GamePage/GamePage';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(
          createRoutesFromElements(
                <Route path='/' element={<Root />} >
                    <Route path='/start-game' element={<GamePage />} />
                 </Route>
          )
)

function App() {
  return (
    <div>
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;