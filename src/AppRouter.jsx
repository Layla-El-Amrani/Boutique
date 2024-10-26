
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Component/navbar';
import RouterMiddlware from './RouterMiddlware';
import {useState } from 'react';



const AppRouter = () => {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Navbar count={count} />
      <RouterMiddlware setCount={setCount}/>
    </Router>
  );
};

export default AppRouter;



