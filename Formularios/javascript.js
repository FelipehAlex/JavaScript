(function readyJS(win, doc){
    'use strict';

    let form1 = doc.querySelector('#form1');
    let inpText = doc.querySelector('#inpText');
    let txtArea = doc.querySelector('#txtArea');
    let lenghtArea = doc.querySelector('#lenghtArea');
    let check = doc.querySelector('#check');
    let radio = doc.getElementsByName('gender');
    let sel = doc.querySelector('#sel');
    let btn = doc.querySelector('#btn');

    //Form
    /*form1.action = 'teste.php';
    console.log(form1) */
    
    //input Text
    function validadeInput(event) {
        event.target.value == "";{
            alert('Preencha o campo!');
        }
    }

    // inpText.style.backgroundColor = 'gray';
    // /* inpText.value = 'Texto'; */
    // inpText.addEventListener("blur", validadeInput, false);
    // console.log(inpText);

    //TextArea
    function countArea(event) {
        lenghtArea.innerHTML = event.target.textLenght;
        if(event.target.textLenght >= 30) {
            txtArea.setAttribute('disabled', 'disabled');
        }
    }
    // console.log(txtArea);
    // txtArea.value = "Examplo";
    // txtArea.addEventListener("blur", validadeInput, false);
    // txtArea.addEventListener('keydown', countArea, false);

    //Checkbox
    console.log(check.checked);
    if(check.checked == true) {
        alert('Terms accepted!');
    }

    //Radio
    // console.log(radio);
    function radioTest(event) {
        if(event.target.value == 'Male') {
            alert('Male');
        }
        else {
            alert('Female');
        }
    }
    for (let i = 0; i < radio.length; i++) {
        radio[i].addEventListener('click', radioTest, false);
    }

    //Select
    // console.log(sel);
    function selValidate(event) {
        if(event.target.selectedIndex == 0) {
            alert('Selecione uma opção')
        }
    }
    sel.addEventListener('change', selValidate, false);

    //Button
    //console.log(btn);
    function submitForm(event) {
        event.preventDefault();
    }
    btn.addEventListener('click', submitForm, false);

})(window, document);    