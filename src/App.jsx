import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { MainPage } from './components/MainPage/MainPage.jsx';
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx';
import { Root } from './routes/Root.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='women' element={<MainPage gender='women' />} />
      <Route path='men' element={<MainPage gender='men' />} />
      <Route path='women/:category' element={<MainPage gender='women' />} />
      <Route path='men/:category' element={<MainPage gender='men' />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => <RouterProvider router={router}></RouterProvider>;
