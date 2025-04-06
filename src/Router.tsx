import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<></>}></Route>
        <Route path="/completed" element={<></>}></Route>
      </Route>
    </Routes>
  )
}