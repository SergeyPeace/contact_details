import HeaderSite from "./components/HeaderSite.js";
import BASE_URL from "./BASE_URL.js";

//Добавление header с фильтрацией
(function addCustomerFilter(){
    document.body.append(HeaderSite);
    let timer;
    HeaderSite.querySelector('input').addEventListener('input', (event)=>{
        clearTimeout(timer);
         timer = setTimeout(()=>{
            console.log(event.target.value)
        }, 3e2)
    })
})()
