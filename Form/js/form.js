let minWage = 6700;
const personData = document.querySelector('#persondata');
const personAddress = document.querySelector('#address');
const bill = document.querySelector('#bill');

const proprietary = document.querySelector('#proprietary');
const nonProprietary = document.querySelector('#non-proprietary');
const typeOfDebtInput = document.querySelectorAll('.form__typeOfDebtInput');
const typeOfCreditor = document.querySelector('.form__typeOfCreditor');
const debtBlock = document.querySelector('.form__debtInput')
const person = document.querySelector('#person');
const company = document.querySelector('#company');
const debt = document.querySelector('.debt');
const cost = document.querySelector('.cost');

debt.addEventListener('input', getPayment);
nonProprietary.addEventListener('change', toggleFormStruture);
proprietary.addEventListener('change', toggleFormStruture);
company.addEventListener('change', togglePersonType);
person.addEventListener('change', toggleCompanyType)
bill.addEventListener('click', getBill)
personData.addEventListener('input', getPersonalData);
personAddress.addEventListener('input', getPersonalAddress)

function getBill() {
    window.location.href = "bill.html";
}
function getPersonalData() {
    localStorage.setItem("personData",personData.value);
}
function getPersonalAddress() {
    localStorage.setItem("personAddress",personAddress.value);
}


function togglePersonType() {
    cost.innerText = `${minWage * 2} грн`;
}
function toggleCompanyType(){
	cost.innerText = `${minWage} грн`
}

 function toggleFormStruture() {
    typeOfCreditor.classList.toggle("hide");
    debtBlock.classList.toggle("hide");
    cost.innerText = "";
 }

function getPayment() {
    if ((isNaN(debt.value)) || debt.value < 0 || debt.value[0] == 0) {
        cost.innerText = 'incorrect value';
        return;
    }
    for (i = 0; i < typeOfDebtInput.length; i++) {
        if (
          typeOfDebtInput[i].id == "proprietary" &&
          typeOfDebtInput[i].checked == true
        ) {
          if (debt.value * 0.02 <= 10 * minWage) {
            cost.innerText = (debt.value * 0.02).toFixed(2);
            localStorage.setItem("cost", (debt.value * 0.02).toFixed(2));
              } else {
            cost.innerText = minWage * 10;
            localStorage.setItem("cost", minWage * 10);
          }
        }
    }
}