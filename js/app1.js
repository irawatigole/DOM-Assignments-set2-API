let nameHandle = document.getElementById('name')
// let formHandle = document.getElementById('signUpForm');

nameHandle.addEventListener('blur',function(e){
    e.preventDefault(); 
 let name = nameHandle.value
  
const url = `https://gender-api.com/get?name=${name}&key=pRPLCejozFwCHFbVCR`;

axios.get(url).then((response) => {
    let result = response.data;
    let gender = result.gender;
    console.log(gender)
    if(gender == 'male'){
    document.getElementById('male').checked = true
    } else if (gender == 'female'){
        document.getElementById('female').checked = true
    }
       }).catch((err) => {
        console.log(err);
       })  
}, false)