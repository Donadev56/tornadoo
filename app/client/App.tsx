import './App.css';
import { Dashboard } from './pages/dashboard/dash';
import { Home } from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegPage } from './pages/registration/reg';
import { Web3Provider } from './web3/Web3Context';
import { ProfileEditorPage } from './pages/profile/profile';
import { DirectPartnersList } from './pages/partners/parterners';
import { TeamList } from './pages/teamList/teamList';
function App() {
  return (
    <>
      <Web3Provider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/register' element={<RegPage />} />
            <Route path='/dashboard/profile' element={<ProfileEditorPage />} />
            <Route path='/dashboard/partners' element={<DirectPartnersList />} />
            <Route path='/dashboard/team' element={<TeamList />} />

          </Routes>
        </BrowserRouter>
      </Web3Provider>
    </>
  );
}

export default App;
