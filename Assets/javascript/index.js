let list_Address = JSON.parse(localStorage.list_Address || "[]")


const input_button = document.getElementById("input_button")
const input_name = document.getElementById("name")
const input_address = document.getElementById("address")
const input_no_hp = document.getElementById("phoneNumber")
const input_email = document.getElementById("email")



const output_Address = document.getElementById("output_Address")
const reset_search_button =document.getElementById("reset_search_button")

// SEARCH FORM
const input_search = document.getElementById("input_search")
const search_button = document.getElementById("search_button")

const input_update = document.getElementById("update_form_group")
const done_checkbox = document.getElementById("done_checkbox")
const update_form_group = document.getElementById("update_form_group")
const update_button = document.getElementById("update_button")


// EventListener
input_button.addEventListener("click", create_Address)
search_button.addEventListener("click", searchAddress)
reset_search_button.addEventListener("click", resetSearch)
window.onbeforeunload = function () {
    localStorage.list_Address = JSON.stringify(list_Address)
}


function create_Address() {
    // e.preventDefault();
    list_Address.push({
        nama: input_name.value,
        address: input_address.value,
        email: input_email.value,
        phone: input_no_hp.value
       
    })
    input_name.value = ""
    input_address.value = ""
    input_email.value = ""
    input_no_hp.value = ""
    displayAddress()
}

function displayAddress() {
    let temp = ""
    list_Address.forEach(function (list, index){
    temp += `
        <div class="Address" onDblClick="openUpdateForm(${index})">
                    <span>${list_Address[index].nama}</span>
                    <span>${list_Address[index].address}</span>
                    <span>${list_Address[index].email}</span>
                    <span>${list_Address[index].phone}</span>  
                    <button onClick="deleteAddress(${index})">X</button>
        </div>`
})
output_Address.innerHTML = temp
}



//--------------------------------------------------------------------------------


function deleteAddress(index) {
    list_Address.splice(index, 1)
    displayAddress()
}

function searchAddress() {
    let temp = ""
    list_Address.forEach(function (list, index) {
        if (list.nama.includes(input_search.value)) {
            temp += `
            <div class="todos" onDblClick="openUpdateForm(${index})">
                        <span>${list_Address[index].nama}</span>
                        <span>${list_Address[index].address}</span>
                        <span>${list_Address[index].email}</span>
                        <span>${list_Address[index].phone}</span>
                        <button onClick="deleteAddress(${index})">X</button>
            </div>`
        }
    })


    output_Address.innerHTML = temp
}


function resetSearch() {
    input_search.value=""
    displayAddress()
    }
    
    displayAddress()
    

    function openUpdateForm(index) {
        input_name.value = list_Address[index].nama
        input_address.value = list_Address[index].address
        input_email.value = list_Address[index].email
        input_no_hp.value = list_Address[index].phone
        
        update_index = index
        // console.log('kk')
    }

    update_button.addEventListener('click', () => {
        list_Address[update_index] = {
            nama: input_name.value,
            address: input_address.value,
            email: input_email.value,
            phone: input_no_hp.value
          
        }
        displayAddress()
        input_name.value=""
        input_address.value=""
        input_email.value=""
        input_no_hp.value=""
       
    })
    