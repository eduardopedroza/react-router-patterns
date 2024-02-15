import { Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';

const NotFound = () => <Navigate to="/dogs" />;

function MyRoutes({ colors, addColor }) {
  return (
    <Routes>
      <Route 
        path='/colors'
        element={<ColorList colors={colors}/>}
      />

      <Route 
        path='/colors/:name'
        element={<ColorDetails colors={colors}/>}
      />

      <Route 
        path='/colors/new'
        element={<NewColorForm addColor={addColor}/>}
      />

      <Route
        path="/*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default MyRoutes;