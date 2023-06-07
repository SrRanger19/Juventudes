import Sidebar from '../components/sidebar';
import AmbarContent from '../components/AmbarContent';
import Image from '../components/Image';

function HomeUser(){
    return(
        <div className="grid grid-cols-12 min-h-screen bg-[#FAFAFA]">
            <Image/>
            <Sidebar/>
            <AmbarContent/>
        </div>
    )
}

export default HomeUser;