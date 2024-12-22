import { useContext} from 'react';
import { nameContext } from '../global/nameContext';
import PickOrder from '../components/PickOrder';
import "../styles/Orders.css"
const Orders = ()=> {
    const {userName}:any = useContext(nameContext);

    return(
        
        
        <div>
            <h1>walcome {userName} </h1>
            <PickOrder />
        </div>
    )
}
export default Orders