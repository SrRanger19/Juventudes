import Sidebar from '../components/sidebar';
import PersonalContent from '../components/PersonalContent'
import Image from '../components/Image';

function PersonalData(){
    return(
        <div className="grid grid-cols-12 h-11/12 bg-[#FAFAFA]">
            <Image/>
            <Sidebar/>
            <PersonalContent/>
        </div>
    )
}

export default PersonalData;