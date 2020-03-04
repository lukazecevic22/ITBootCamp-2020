import LaunchList from "./components/launch_list";
import Header from "./components/header";

const app=document.querySelector('#app');

const header1=Header()
const header=document.createElement('header');
const filters=document.createElement('section');
const launch_list=LaunchList();

const footer=document.createElement('footer');

app.append(header1,header,filters,launch_list,footer);