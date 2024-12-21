let table=document.createElement("table")
let td1=document.createElement("td")
let td2=document.createElement("td")
let td3=document.createElement("td")
let td4=document.createElement("td")
let td5=document.createElement("td")
let td6=document.createElement("td")
let tr=document.createElement("tr")
let tr1=document.createElement("tr")
td1.innerText="1"
td2.innerText="2"
td3.innerText="3"
td4.innerText="4"
td5.innerText="5"
td6.innerText="6"
document.body.appendChild(table)
table.appendChild(tr)
table.appendChild(tr1)
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr1.appendChild(td4)
tr1.appendChild(td5)
tr1.appendChild(td6)

table.style.border=" 2px solid black"                                         
table.style.width="fit-content"
td1.style.border="solid black"
td2.style.border="solid black"
td3.style.border="solid black"
td4.style.border="solid black"
td5.style.border="solid black"
td6.style.border="solid black"
td1.style.padding="20px"
td2.style.padding="20px"
td3.style.padding="20px"
td4.style.padding="20px"
td5.style.padding="20px"
td6.style.padding="20px"