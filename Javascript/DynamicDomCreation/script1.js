const ar = [
  "Anand",
  "Anand_R",
  "Roshni",
  "Swati",
  "Bipin",
  "Sonu",
  "Surbhi"
];

const List = document.createElement("ol");

ar.forEach((item) => {
  const l = document.createElement("li");
  l.textContent = item;
  List.appendChild(l);
});

document.getElementById("myList").appendChild(List);