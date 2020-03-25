import LaunchList from "./components/launch_list";
import Header from "./components/header";
import selectLaunchYear from "./components/selecetor";

const app = document.querySelector('#app');
const header1 = Header()
header1.style.color = "white"
const header = document.createElement('header');

const filters = document.createElement('section');
const launch_list = LaunchList();
const select = selectLaunchYear()
const wrapper = document.createElement('div')

filters.appendChild(select)
filters.append(wrapper)

const footer = document.createElement('footer');
footer.innerHTML = `by IT Bootcamp`
footer.style.color = "white"


app.append(header1, header, filters, launch_list, footer);

export { filters, wrapper }

