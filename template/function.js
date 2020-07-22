document.querySelector("body img").src;
            document.querySelector("body img").src;
            document.querySelector("body img").src;
            document.getElementById("sub").addEventListener("click",() => {
            const state = document.getElementById("state").value;
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
                    <th>Death</th>
                    <th><p>Increase in</p><p>Confirmed cases</p></th>
                    <th><p>Increase in</p><p>Recover</p></th>
                    <th><p>Increase in</p><p>Death</p></th>
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
            })
            var date = new Date();
            const datearr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            document.querySelector(".cont b").textContent= date.getDate() + " " + datearr[date.getMonth()] + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();