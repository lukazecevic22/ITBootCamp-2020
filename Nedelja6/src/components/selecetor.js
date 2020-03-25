import { getPastLaunches } from "../services/spacex_service";
import Launch from "./launch";
import { wrapper } from "..";

const selectLaunchYear = () => {

    const select = document.createElement('select');
    select.className = "slc-year"
    const optionT = document.createElement('option')
    optionT.innerText = 'launch year'
    select.appendChild(optionT);

    for (let i = 2006; i <= 2020; i++) {

        const option = document.createElement('option');
        option.value = `${i}`
        option.innerHTML = `${i}`
        select.appendChild(option);
    }

    select.addEventListener('change', () => {
        wrapper.innerHTML = ''
        getPastLaunches().then(response => {
            let svi = response.data
            let filter = svi.filter(element => element.launch_year == select.value)
            filter.forEach(element => {
                wrapper.appendChild(Launch(element))
            });

        })
    })
    return select;
}
export default selectLaunchYear;
