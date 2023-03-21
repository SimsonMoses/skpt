import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

//logo
import logo from  '../assets/logo/SkPTlogo.png';

const Navbar = ()=>{
    return(
        <div>
            <div>
                <img src={logo} alt="logo" height={70} width={80} />
            </div>
            <h3>Navbar</h3>
            <div>
                <li>HOME</li>
                <li>SKPT</li>
                <li>PROFILE</li>
            </div>
        </div>
    )
}
export default Navbar