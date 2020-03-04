import{information} from "../services/spacex_service"

const Header = () => {
 
    const div=document.createElement('div');
    information().then(response=>{
        let{data}=response
        div.innerHTML+=data.name
        div.innerHTML+=data.summary
    })
return div 


}
export default Header




