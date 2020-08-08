document.querySelector("#state").innerHTML = `<option value = "Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
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

document.querySelector("body img").src;
            document.querySelector("body img").src;
            document.querySelector("body img").src;
            document.getElementById("sub").addEventListener("click",() => {
            const state = document.getElementById("state").value;
            document.querySelector("#sub").setAttribute("disabled","disabled");
            fetch("https://api.covid19india.org/state_district_wise.json").then((response) => {
                response.json().then((data) => {
                    if(data.error)
                    {
                        document.querySelector(".cont p").textContent = "";
                        document.querySelector(".cont p").textContent = data.error;
                        return;
                    }
                      const table = document.querySelector("#tab");
                      const arr = Object.keys(data[state].districtData);
                      const values = Object.values(data[state].districtData);
                      const j = Object.keys(data[state].districtData).length;
                      table.innerHTML = `<table><thead>
                    <th>District</th>
                    <th>Active</th>
                    <th>Confirmed</th>
                    <th>Recover</th>
                    <th>Deceased</th>
                    <th><p>Increase in</p><p>Confirmed cases</p></th>
                    <th><p>Increase in</p><p>Recover cases</p></th>
                    <th><p>Increase in</p><p>deceased cases</p></th>
                </thead>`;
                      for(let i=0;i<j;i++)
                      {
                          const row = document.createElement("tbody");
                          row.idName = "row";
                          row.innerHTML = `<td>${arr[i]}</td>
                          <td>${values[i].active}</td>
                          <td>${values[i].confirmed}</td>
                          <td>${values[i].recovered}</td>
                          <td>${values[i].deceased}</td>
                          <td>${values[i].delta.confirmed}</td>
                          <td>${values[i].delta.recovered}</td>
                          <td>${values[i].delta.deceased}</td>`;
                          table.appendChild(row);
                          
                      }
                      
                })
            })
            document.querySelector("#sub").removeAttribute("disabled");
            })
            var date = new Date();
            const datearr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            document.querySelector(".cont b").textContent= date.toDateString() + " " + date.getHours() + ":" + date.getMinutes();