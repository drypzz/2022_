const svgElement = document.querySelector('#oathhhhs');

if(svgElement){
    svgElement.setAttribute('fill', '#f4f4f4');
};

// dark-mode btn

const buttonDarkMode = document.querySelector('#darkmode');

buttonDarkMode.addEventListener('click',
    () => {
        buttonDarkMode.classList.toggle('active')
    }
);

// dark-mode function

darkmode = function(){
    var body = document.body;

    body.classList.toggle('dark-mode');

    if(svgElement){
        var get = svgElement.getAttribute('fill');

        if(get === '#f4f4f4'){
            svgElement.setAttribute('fill', '#161616')
        }else{
            svgElement.setAttribute('fill', '#f4f4f4')
        };
    }else{
        console.log('SVG de (ID: #oathhhhs) não encontrado.');
    };
};