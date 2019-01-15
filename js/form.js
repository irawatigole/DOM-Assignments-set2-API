// http - GET/ POST/ PUT / DELETE
const postUrl = 'http://dct-api-data.herokuapp.com/tickets/?api_key=bc2b7c3236801740';

const tableHandle = document.getElementById('tickets');
const formHandle = document.getElementById('addTicket');
const nameHandle = document.getElementById('name');
const departmentHandle = document.getElementById('department');
const priorityHandle = document.getElementById('priority');
const messageHandle = document.getElementById('message');

formHandle.addEventListener('submit',function(e){   // e is an object
    e.preventDefault();                         // for getting page without being reloaded(preventDefault is an proprty)
    let formData = {
        name: nameHandle.value,
        department: departmentHandle.value,
        priority: priorityHandle.value,
        message: messageHandle.value
    };
    console.log(formData);

    axios.post(postUrl, formData).then((response) =>{
        let ticket = response.data;
        console.log(ticket);
        // tableHandle.innerHTML += 
        // `<tr>
        // <td>${ticket.ticket_code}</td>
        // <td>${ticket.name}</td>
        // <td>${ticket.department}</td>
        // <td>${ticket.priority}</td>
        // <td>${ticket.message}</td>
        // <td>${ticket.status}</td>
        // </tr>`;   
        let tr = document.createElement('tr');

            let tdCode = document.createElement('td');
            let textCode = document.createTextNode(ticket.ticket_code);
            tdCode.appendChild(textCode);
            tr.appendChild(tdCode);
            

            let tdName = document.createElement('td');
            let textName = document.createTextNode(ticket.name);
            tdName.appendChild(textName);
            tr.appendChild(tdName);

            let tdDepartment = document.createElement('td');
            let textDepartment = document.createTextNode(ticket.department);
            tdDepartment.appendChild(textDepartment);
            tr.appendChild(tdDepartment);

            let tdPriority = document.createElement('td');
            let textPriority = document.createTextNode(ticket.priority);
            tdPriority.appendChild(textPriority);
            tr.appendChild(tdPriority);

            let tdMessage = document.createElement('td');
            let textMessage = document.createTextNode(ticket.message);
            tdMessage.appendChild(textMessage);
            tr.appendChild(tdMessage);

            let tdStatus = document.createElement('td');
            let textStatus = document.createTextNode(ticket.status);
            tdStatus.appendChild(textStatus);
            tr.appendChild(tdStatus);
            console.log(tr)
            ticketsHandle.appendChild(tr);  
    }).catch((err) => {
        console.log(err)
    })

}, false)