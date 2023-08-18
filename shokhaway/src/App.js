import logo from './logo.svg';
import './App.css';
import {IoPersonSharp, IoSettingsSharp} from "react-icons/io5";
import {BiSolidMessageRounded, BiSolidMusic, BiSolidNews} from "react-icons/bi";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
 }


export default App;
