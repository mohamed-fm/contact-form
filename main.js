


const inputs = document.querySelectorAll('.global-input')
const checkboxs = document.querySelectorAll('.global-check-box')
const submit_btn = document.querySelector('#submit')
const form = document.querySelector('form')
const email = document.querySelector('#email')




function build(){
    let massage = document.createElement('div')
    massage.classList.add('success')
    let heading = document.createElement('div')
    heading.classList.add("heading")
    let img = document.createElement('img')
    img.src = './assets/images/icon-success-check.svg'
    let h3 = document.createElement('h3')
    h3.textContent  = 'Message Sent!'
    heading.append(img)
    heading.append(h3)
    let p = document.createElement('p')
    p.textContent = "Thanks for completing the form. We'll be in touch soon!"
    massage.append(heading)
    massage.append(p)
    document.body.append(massage)
}


function isEmpty(){
    inputs.forEach((input)=>{
        if(input.value.trim() == ''){
            input.setAttribute("data-empty",'true')
            return true
        }else{
            input.setAttribute("data-empty",'false')
        }
    })
    return false
}

function validEmail(input){
    let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(regx.test(input.value)){
        input.setAttribute('aria-invalid' , 'false')
        return true
    }else if(regx.test(input.value)){
        input.setAttribute('aria-invalid' , 'true')
        return false
    }
}

function isValid(){
    console.log(isEmpty() ,validEmail(email))
    if(isEmpty() == false && validEmail(email) == true){
        return true
    }else{
        return false
    }
}

function validCheckBoxs(){
    if(checkboxs[0].checked == false && checkboxs[1].checked == false){
        checkboxs[0].parentElement.parentElement.setAttribute('data-checked','false')
    }else{
        checkboxs[0].parentElement.parentElement.setAttribute('data-checked','true')
    }
    if(checkboxs[2].checked == false){
        checkboxs[2].setAttribute('data-empty','true')
    }else{
        checkboxs[2].setAttribute('data-empty','false')
    }
    if(checkboxs[0].checked == false && checkboxs[1].checked == false || checkboxs[2].checked == false ){
        return false
    }else{
        checkboxs[0].parentElement.parentElement.setAttribute('data-checked','true')
        checkboxs[2].setAttribute('data-empty','false')
        return true
    }
}


function validInputs(){
    let valid = true
    if(isValid() != true  && validCheckBoxs() != true){
        valid = false
    }
    return valid
}

form.onsubmit = function(e){
    e.preventDefault()
    if(validInputs()){
        inputs.forEach((el)=>{
            el.value = ''
        })
        checkboxs.forEach((el)=>{
            el.checked = false
        })
        build()
    }
}