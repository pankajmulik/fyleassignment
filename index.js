const grossincome = document.getElementById('grossincome')
const extraincome = document.getElementById('extraincome')
const agegroup = document.getElementById('agegroup')
const totaldeduction = document.getElementById('totaldeduction')
const allerr = document.getElementsByClassName('error-ex')
const taxdiv = document.getElementById('tax-div')
let gross_error = document.getElementById('gross-error')
const extra_error = document.getElementById('extra-error')

const deduction_error = document.getElementById('deduction-error')
const age_error = document.getElementById('age-error')
const pattern = /^[0-9]+$/;



const checkerror = () => {

    let flag = 1;

    

    if ((!(grossincome.value).match(pattern)) ) {
        gross_error.style.display ='block'
        
       flag=0
    } else {
        gross_error.style.display = 'none';
    }


    if (!(extraincome.value).match(pattern) ) {
        extra_error.style.display = 'block'

     flag=0
    } else {
       extra_error.style.display = 'none';
    }
    if (!(totaldeduction.value).match(pattern)) {
        deduction_error.style.display = 'block'

        flag=0
     
    } else {
       deduction_error.style.display = 'none';
    }
    if ((agegroup.value)==0 ) {
        age_error.style.display = 'block'

      flag=0
    } else {
        age_error.style.display = 'none';
    }

    if (flag == 0) {
       return
    } 

    const gross = parseFloat(grossincome.value);
    const extra = parseFloat(extraincome.value )
    const deduct = parseFloat( totaldeduction.value)
    let aftertax;
   
    const totalincome = gross + extra - deduct


    const total = totalincome / 100000;
   

    if (total < 8) {
        
       return displaytax(total.toFixed(5))
    }
let taxvalue
    const age = agegroup.value
    switch (age) {
        case '39': taxvalue = (0.3 * (total - 8)).toFixed(5)
            
            aftertax = (total - taxvalue).toFixed(5)
            
            displaytax(aftertax);
            break;
        
        case '40': taxvalue = (0.4 * (total - 8)).toFixed(5)
            aftertax = (total - taxvalue).toFixed(5)

            displaytax(aftertax);
            break;
        
        case '60': taxvalue = (0.1 * (total - 8)).toFixed(5)
            aftertax = (total - taxvalue).toFixed(5)

            displaytax(aftertax);
            break;
        
        
            
    }
    
   
}


function displaytax(aftertax) {
    
    
    taxdiv.style.display = 'block'

    const taxval=document.getElementById('tax-value')
    
taxval.innerHTML=aftertax

}

function closebutton() {
    taxdiv.style.display='none'
}


function displayge() {

    const grosee = document.getElementById('gross-er')

    grosee.style.display='block'
    
}

function hidegros() {
    const grosee = document.getElementById('gross-er')

    grosee.style.display = 'none'

    
}

function diesplayExtrae() {

    const show = document.getElementById('extra-er')

    show.style.display = 'block'

}

function hideerrore() {
    const show = document.getElementById('extra-er')

   show.style.display = 'none'


}

function agedisplay() {

    const show = document.getElementById('age-er-div')

   show.style.display = 'block'

}

function hideagee() {
    const show = document.getElementById('age-er-div')

   show.style.display = 'none'


}

function displayDederror() {

    const show = document.getElementById('ded-er-div')

  show.style.display = 'block'

}

function hidedederr() {
    const show = document.getElementById('ded-er-div')

    show.style.display = 'none'


}