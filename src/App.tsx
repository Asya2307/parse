import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { Result } from './components/result';
import { Main } from './components/main';

function App() {
    return (
        <BrowserRouter basename ="/parse/">
            <div className={styles.content}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
