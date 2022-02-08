import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homePage'
import 'antd/dist/antd.css'
import VideosPage from './pages/videos/videosPage'
import UploadPage from './pages/upload/uploadPage'
import NavBar from './components/NavBar/NavBar'
import './App.scss'
import {Provider} from 'react-redux'
import { store } from './redux/store/store'

function App() {

    return (
        <Provider store={store}>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/upload" element={<UploadPage/>}/>
                <Route path="/videos" element={<VideosPage/>}/>
            </Routes>
        </Provider>
    )
}

export default App
