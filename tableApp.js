let id = 0;

document.getElementById("add-button").addEventListener("click", () => {
  let table = document.getElementById("info-table"); // target the table
  console.log(table);

  // Create a row in the table at Pos 1 since Pos 0 is the table header
  let row = table.insertRow(1);
  // Set the attributes for this row. Each row gets an id
  row.setAttribute("id", `item-${id}`);

  // Set the value of the first cell in the row to whatever Student Name is from input
  row.insertCell(0).innerHTML =
    document.getElementById("new-student-name").value;
  row.insertCell(1).innerHTML = document.getElementById("new-email").value;
  row.insertCell(2).innerHTML =
    document.getElementById("new-course-name").value;
  row.insertCell(3).innerHTML =
    document.getElementById("new-enroll-date").value;

  // Create a button for the Actions cell- a DELETE button in this case
  let actions = row.insertCell(4);
  // Pass id to function createDeleteButton() for the row that was just created in this click
  // event and then increment it so that next row that's created has an incremented id.
  actions.appendChild(createDeleteButton(id++));

  // Set all values to blank for the user
  document.getElementById("new-student-name").value = "";
  document.getElementById("new-email").value = "";
  document.getElementById("new-course-name").value = "";
  document.getElementById("new-enroll-date").value = "";
});

function createDeleteButton(id) {
  // Create a button element with a button tag
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id: item- ${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
