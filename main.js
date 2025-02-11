let select = document.getElementById('selectElement')
let button = document.getElementById('submitBtn')

if (button && select){
button.addEventListener('click', () => {
    let selection = select.value
    console.log(selection)
    fetch('https://crudapi.co.uk/api/v1/country-list', {
        method: 'POST',
        headers: {
            Authorization: `Bearer H5S-3nGcl_VSryd1NE0MYzYIpFfrAtTbXa_s6rIoqkvzP0-3WQ`
        },
        body: JSON.stringify([{country: selection}])
    }).then(res => console.log(res))
})}
console.log(button)
console.log(select)
