var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var data = JSON.parse(this.responseText);
    var tableBody = document.getElementById('table-body');

    for (var i = 0; i < data.length; i++) {
      var row = document.createElement('tr');
      var classCell = document.createElement('td');
      var professorCell = document.createElement('td');

      classCell.innerHTML = data[i].class;
      professorCell.innerHTML = data[i].professor;

      row.appendChild(classCell);
      row.appendChild(professorCell);
      tableBody.appendChild(row);
    }
  }
};

xhr.open('GET', 'D:\SystemDesign330\HTMLFiles\P03\P03-Data.json');
xhr.send();



