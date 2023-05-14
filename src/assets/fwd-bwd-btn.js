$(function(){
    let navbar = [...$('.navbar')[0].children];
    let navbarrefs = navbar.map(e=>e.href);

    console.log(navbar);

    let fwd = $(`<a href=${navbarrefs[navbarrefs.indexOf(location.href)+1 < navbarrefs.length ? navbarrefs.indexOf(location.href)+1 : navbarrefs[0]]}>Вперёд</a>`);
    let bwd = $(`<a href=${navbarrefs[navbarrefs.indexOf(location.href)-1 > 0 ? navbarrefs.indexOf(location.href)-1 : navbarrefs[-1]]}>Назад</a>`);
    let home = $(`<a href=${navbarrefs[0]}>Оглавление</a>`);

    let menu = $(`<div>`).append(bwd).append(home).append(fwd);
    menu.css({"position": "sticky"});

    $('body').append(menu);
})