import 'normalize.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage';
import CreateForm from './components/сreateForm';
import EditForm from './components/editForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<CreateForm />} path="/create" />
        <Route element={<EditForm />} path="/edit/:id" />
      </Routes>
    </Router>
  );
};

export default App;
