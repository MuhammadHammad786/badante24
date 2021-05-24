import {useHistory} from 'react-router-dom';

const Logout = () => {
    let history = useHistory();
    localStorage.removeItem('adminLogin');
    history.push("/adminPanel/login");
}

export default Logout;