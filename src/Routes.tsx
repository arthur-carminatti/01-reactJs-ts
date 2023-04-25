import { Routes, Route } from 'react-router-dom'
import { Post } from './pages/Post/index';

export function Router() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Post />} />
            </Route>
        </Routes>
    );
}