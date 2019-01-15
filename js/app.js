
let nameHandle = document.getElementById('name')
let formHandle = document.getElementById('myForm');
let divisonHandle = document.getElementById('app');

formHandle.addEventListener('submit',function(e){
    e.preventDefault(); 
 let name = nameHandle.value
// answerHandle.innerHTML =''  
const url = `https://gender-api.com/get?name=${name}&key=pRPLCejozFwCHFbVCR`;

axios.get(url).then((response) => {
    let result = response.data;  
    
divisonHandle.innerHTML = '';
let gender = document.createTextNode(result.gender);
divisonHandle.appendChild(gender);
// document.write(result.gender)
       }).catch((err) => {
        console.log(err);
       })  
}, false)


    


