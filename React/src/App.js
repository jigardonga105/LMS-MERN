import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AddBook from './Components/AddBook';
import Books from './Components/Books';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addNew" element={<AddBook />}></Route>
        <Route path="/allBooks" element={<Books />}></Route>
      </Routes>
    </>
  )
}

export default App