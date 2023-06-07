import ContainerImg from "../components/ContainerImg";
import ContactForm from "../components/ContacForm";

function HomeUser(){
    return(
        <div className="grid grid-cols-12 min-h-screen">
            <ContactForm/>
            <ContainerImg/>
        </div>
    )
}

export default HomeUser;