const input = document.getElementsByClassName("input");
const submit = document.getElementsByTagName("button");
const list = document.getElementsByClassName("list");

button.addEventListener('click', function appendlist() {{
    var ul = document.getElementsByClassName('list');
    var li = document.createElement('li');
    var favchap = document.getElementById('favchap');
    var del = document.createElement('button')
    del.innerHTML += "&#10060;"
    li.appendChild(document.createTextNode(favchap.value));
    ul.appendChild(li);} })
