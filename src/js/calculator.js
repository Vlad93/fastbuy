// How to Add Colors to JavaScript Console Outputs (Examples)  https://www.codingem.com/javascript-console-colors/

var AdvicesApiData = '';
if(BtnСalculator) {
  GetAllAdviceByApi();
}
function GetAllAdviceByApi() {
    const apiUrl = 'https://fastbuy365.by/wp-json/wp/v2/advice?_fields=id,meta&per_page=100';
    fetch(apiUrl).then(response => response.json()).then(data => {
        // Обработка полученных данных
        AdvicesApiData = data;
        BtnСalculator.removeAttribute('disabled');
        BtnСalculator.textContent = 'Вывести пятно';
        console.log('AdvicesApiData =>', AdvicesApiData);
    }
    ).catch(error => {
        console.log('Ошибка при получении данных калькулятора:', error);
    }
    );
}

function findAdvice(pollution, surface) {

    if (pollution.trim() === '' && surface.trim() === '') {
        return '';
    }

    // Check if pollution or surface is an empty string
    if (pollution.trim() === '' || surface.trim() === '') {
        console.log('%cError: pollution and surface cannot be empty.', 'color: red; font-size: larger');
        return '';
    }

    let desiredElement = '';

    if (AdvicesApiData === '') {
        return '';
    } else {
        desiredElement = AdvicesApiData.find(item => item.meta.pollution === pollution && item.meta.surface === surface);
        if (desiredElement) {
            return desiredElement.meta;
        } else {
            console.log("%cЭлемент не найден.", 'color: red; font-size: larger');
            return '';
        }
    }
}

let SelTypePollution = document.getElementById('typePollution');
let SelTypeSurface = document.getElementById('typeSurface');
let BtnСalculator = document.querySelector('.btn-calc');
let tagAdvice = document.querySelector('.section-calculator__content-result');
let tagAdviceImage = document.getElementById('calculator-img');

const tagAdvicePosition = tagAdvice.getBoundingClientRect().top + window.scrollY - 120;
const calculatorPosition = document.querySelector('.section-calculator__wrap').getBoundingClientRect().top + window.scrollY - 100;

var TypePollutionValue = ''
  , TypeSurfaceValue = ''
  , AdviceHtml = ''
  , CalcWarningMessage = ''
  , MetaAdvice = ''
  , ImgAdvice = '';

window.addEventListener("load", function() {
  if(BtnСalculator) {
    GetAllAdviceByApi();
    BtnСalculator.addEventListener('click', СalculatorSelectorsChange);
  }
});

function СalculatorSelectorsChange() {
    TypePollutionValue = SelTypePollution.value.trim();
    TypeSurfaceValue = SelTypeSurface.value.trim();
    if (TypePollutionValue === '' || TypeSurfaceValue === '') {
        CalcWarningMessage = 'Выберите тип загрязнения и тип поверхности';
    } else {
        CalcWarningMessage = '';
        MetaAdvice = findAdvice(TypePollutionValue, TypeSurfaceValue);
        AdviceHtml = MetaAdvice.adviceeng;
        ImgAdvice = MetaAdvice.advicefoto;
    }
    SetAdviceHtml();
}
function SetAdviceHtml() {
    BtnAdviceReadMode.classList.remove('advice-display-none');
    tagAdvice.classList.remove('advice-display-none');
    BtnAdviceHide.classList.add('advice-display-none');

    tagAdvice.innerHTML = (AdviceHtml === '') ? '' : AdviceHtml;

    tagAdviceImage.src = ImgAdvice;
    tagAdviceImage.srcset = ImgAdvice;
    window.scrollTo({
      top: tagAdvicePosition,
      behavior: 'smooth'
    });
}

var BtnAdviceReadMode = document.querySelector('.calculator-show-more');
var BtnAdviceHide = document.querySelector('.calculator-reset');
tagAdvice.classList.add('advice-display-none');

function BtnAdviceReadModeOnClick() {
    BtnAdviceReadMode.classList.add('advice-display-none');
    tagAdvice.classList.add('full');
    BtnAdviceHide.classList.remove('advice-display-none');
}
function BtnAdviceHideOnClick() {
  window.scrollTo({
    top: calculatorPosition,
    behavior: 'smooth'
  });
  tagAdvice.classList.add('advice-display-none');
  tagAdvice.classList.remove('full');
  BtnAdviceHide.classList.add('advice-display-none');
}
if(BtnAdviceReadMode) {
  BtnAdviceReadMode.addEventListener('click', BtnAdviceReadModeOnClick);
}
if(BtnAdviceHide) {
  BtnAdviceHide.addEventListener('click', BtnAdviceHideOnClick);
}


