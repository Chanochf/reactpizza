import { useContext} from 'react'
import { nameContext } from '../global/nameContext'

const Orders = ()=> {
    const {userName}:any = useContext(nameContext);

    return(
        <div>
            <h1>walcome {userName} </h1>
        </div>
    )
}
export default Orders