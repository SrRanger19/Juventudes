import ContainerImg from "../components/ContainerImg";
import ContactForm from "../components/ContacForm";
import HeaderBar from "../components/HeaderBar";

function HomeUser(){
    return(
        <div className="grid grid-cols-12 min-h-screen">
            <HeaderBar/>
            <ContactForm/>
            <ContainerImg/>
        </div>
    )
}

export default HomeUser;