import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { Result } from './components/result';
import { Main } from './components/main';

function App() {
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <div className={styles.content}>
                <Route path="/" element={<Main />} />
                <Route path="/result/" element={<Result />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
