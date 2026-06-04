let transactions = [];

function addTransaction(){

const amount =
Number(document.getElementById("amount").value);

const type =
document.getElementById("type").value;

const category =
document.getElementById("category").value;

const date =
document.getElementById("date").value;

if(amount <= 0){
alert("Enter a valid amount");
return;
}

if(date === ""){
alert("Select a date");
return;
}

transactions.push({
amount,
type,
category,
date
});

document.getElementById("amount").value = "";

render();
}

function render(){

let income = 0;
let expense = 0;

const history =
document.getElementById("history");

history.innerHTML = "";

transactions.forEach((item,index)=>{

if(item.type === "income"){
income += item.amount;
}
else{
expense += item.amount;
}

history.innerHTML += `
<tr>
<td>${item.date}</td>
<td>${item.category}</td>
<td>${item.type}</td>
<td>₹${item.amount}</td>

<td>

<button
class="edit-btn"
onclick="editTransaction(${index})">
Edit
</button>

<button
class="delete-btn"
onclick="deleteTransaction(${index})">
Delete
</button>

</td>

</tr>
`;
});

document.getElementById("income").textContent =
"₹" + income;

document.getElementById("expense").textContent =
"₹" + expense;

document.getElementById("balance").textContent =
"₹" + (income - expense);

}

function deleteTransaction(index){

transactions.splice(index,1);

render();

}

function editTransaction(index){

let newAmount = prompt(
"Enter new amount",
transactions[index].amount
);

if(newAmount === null){
return;
}

newAmount = Number(newAmount);

if(newAmount <= 0){
alert("Invalid amount");
return;
}

transactions[index].amount = newAmount;

render();

}
