const button = document.querySelector(".btn");
const select = document.getElementById("inputGroupSelect04")
select.innerHTML = `<option value = "Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value = "Andhra Pradesh">Andhra Pradesh</option>
<option value = "Arunachal Pradesh">Arunachal Pradesh</option>
<option value = "Assam">Assam</option>
<option value = "Bihar">Bihar</option>
<option value = "Chandigarh">Chandigarh</option>
<option value = "Chhattisgarh">Chhattisgarh</option>
<option value = "Delhi">Delhi</option>
<option value = "Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
<option value = "Goa">Goa</option>
<option value = "Gujarat">Gujarat</option>
<option value = "Himachal Pradesh">Himachal Pradesh</option>
<option value = "Haryana">Haryana</option>
<option value = "Jharkhand">Jharkhand</option>
<option value = "Jammu and Kashmir">Jammu and Kashmir</option>
<option value = "Karnataka">Karnataka</option>
<option value = "Kerala">Kerala</option>
<option value = "Ladakh">Ladakh</option>
<option value = "Lakshadweep">Lakshadweep</option>
<option value = "Maharashtra">Maharashtra</option>
<option value = "Meghalaya">Meghalaya</option>
<option value = "Manipur">Manipur</option>
<option value = "Madhya Pradesh">Madhya Pradesh</option>
<option value = "Mizoram">Mizoram</option>
<option value = "Nagaland">Nagaland</option>
<option value = "Odisha">Odisha</option>
<option value = "Punjab">Punjab</option>
<option value = "Puducherry">Puducherry</option>
<option value = "Rajasthan">Rajasthan</option>
<option value = "Sikkim">Sikkim</option>
<option value = "Telangana">Telangana</option>
<option value = "Tamil Nadu">Tamil Nadu</option>       
<option value = "Tripura">Tripura</option>
<option value = "Uttar Pradesh">Uttar Pradesh</option>
<option value = "Uttarakhand">Uttarakhand</option>
<option value = "West Bengal">West Bengal</option>`

fetch("https://coronavirus-19-api.herokuapp.com/countries/india").then((response) => {
    response.json().then((data) => {
        const table = document.getElementById("india");
        const tbod = document.createElement("tbody")
        tbod.innerHTML = `<tr><td class="text-center"><b style="font-size:2.5rem; font-family: 'Sail';">${data.active}</b></td>
        <td class="text-center"><b style="font-size:2.5rem; font-family: 'Sail';">${data.cases}</b></td>
        <td class="text-center"><b style="font-size:2.5rem; font-family: 'Sail';">${data.recovered}</b></td>
        <td class="text-center"><b style="font-size:2.5rem; font-family: 'Sail';">${data.deaths}</b></td>
        <td class="text-center"><b style="font-size:2.5rem; font-family: 'Sail';">${data.todayCases}</b></td>
        <td class="text-center"><b style="font-size:2.5rem; font-family: 'Sail';">${data.todayDeaths}</b></td></tr>`
        table.appendChild(tbod)
    })
})

button.addEventListener("click", () => {
    const value = document.querySelector("#inputGroupSelect04").value
    button.setAttribute("disabled", "disabled")
    fetch("http://localhost:3000/data").then((response) => {
        response.json().then((data) => {
            const subtable = document.getElementById("all")
            const tbody = document.createElement("tbody")
            subtable.innerHTML = ` <thead class="thead-dark">
            <tr>
              <th class="text-center" scope="col"><h5>District</h5></th>
              <th class="text-center" scope="col"><h5>Active Cases</h5></th>
              <th class="text-center" scope="col"><h5>Confirmed Cases</h5></th>
              <th class="text-center" scope="col"><h5>Recover Cases</h5></th>
              <th class="text-center" scope="col"><h5>Deceased Cases</h5></th>
              <th class="text-center" scope="col"><h5>Confirmed Cases Today</h5></th>
              <th class="text-center" scope="col"><h5>Recover Cases Today</h5></th>
              <th class="text-center" scope="col"><h5>Deceased Cases Today</h5></th>
            </tr>
          </thead>`
            const total = (Object.keys(data.data[value].districtData)).length
            for (let i = 0; i < total; i++) {
                const tr = document.createElement("tr")
                const district = Object.keys(data.data[value].districtData)[i]
                tr.innerHTML = `<td class="text-center"><b style="font-size:2rem; font-family: 'Sail';">${district}</b></td>
                  <td class="text-center"><b style="font-size:2rem; font-family: 'Sail';">${data.data[value].districtData[district].active}</b></td>
                  <td class="text-center"><b style="font-size:2rem; font-family: 'Sail';">${data.data[value].districtData[district].confirmed}</b></td>
                  <td class="text-center"><b style="font-size:2rem; font-family: 'Sail';">${data.data[value].districtData[district].recovered}</b></td>
                  <td class="text-center"><b style="font-size:2rem; font-family: 'Sail';">${data.data[value].districtData[district].deceased}</b></td>
                  <td class="text-center"><b style="font-size:2rem; font-family: 'Sail';">${data.data[value].districtData[district].delta.confirmed}</b></td>
                  <td class="text-center"><b style="font-size:2rem; font-family: 'Sail';">${data.data[value].districtData[district].delta.recovered}</b></td>
                  <td class="text-center"><b style="font-size:2rem; font-family: 'Sail';">${data.data[value].districtData[district].delta.deceased}</b></td>`
                tbody.appendChild(tr)
            }
            subtable.appendChild(tbody)
            button.removeAttribute("disabled")
        })
    })
})

setInterval(() => {
    let date = new Date()
    document.getElementById("time").textContent = date.toDateString() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}, 1000)