import Sidebar from '../components/sidebar';
import Map from '../components/Map';
import Image from '../components/Image';

function BusinessUser(){
    return(
        <div className="grid grid-cols-12 h-11/12   min-h-screen">
            <Image/>
            <Sidebar/>
            <Map/>
        </div>
    )
}

export default BusinessUser;