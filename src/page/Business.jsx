import HeaderBar from '../components/HeaderBar';
import BusinessType from '../components/BusinessType';
import BusinessTitle from '../components/BusinessTitle';

function Business(){
    return(
        <div className="grid grid-cols-12 min-h-screen bg-[#FBFBFB]">
            <HeaderBar/>
            <BusinessTitle/>
            <BusinessType/>
        </div>
    )
}

export default Business;