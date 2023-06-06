import Sidebar from '../components/sidebar';
import Content from '../components/content';
import Image from '../components/Image';

function HomeUser(){
    return(
        <div className="grid grid-cols-12 min-h-screen bg-[#FAFAFA]">
            <Image/>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default HomeUser;