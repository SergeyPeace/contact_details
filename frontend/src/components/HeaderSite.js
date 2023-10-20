function createdHeader(urlLogo){
    const headerTemplate = `
        <div class="header__container">
            <img class="header__logo" src=${urlLogo} alt="Логотип"/>
            <input class="header__filter" placeholder="Введите запрос"/>
        </div>
    `
    return headerTemplate
}

const header = document.createElement('header');
header.className = 'header';
header.innerHTML = createdHeader('public/img/svg/logo.svg');



export default header;