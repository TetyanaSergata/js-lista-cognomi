// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.

// 1.Chiedere il cognome all'utente
var listUsers = [
  'Rossi',
  'Alessi',
  'Moretti',
  'Bruni',
  'Conte'];
console.log(listUsers);

var newUser = prompt('Inserisci il tuo cognome');
console.log(newUser);
// listUsers.sort();

// 2.Inserire il cognome in un array
listUsers.push(newUser);
listUsers.sort()

// 3.Ordinare alfabeticamente e stampare
for (var i = 0; i < listUsers.length; i++){
  // console.log(listUsers[i]);
  var listContent = document.getElementById('surname_list').innerHTML;
  document.getElementById('surname_list').innerHTML = listContent + '<li>' + listUsers[i] + '</li>';
  console.log(listContent);
  if (newUser == listUsers[i]) {
    console.log(listUsers.indexOf(newUser));
  }
}
// listUsers.sort();

// 4.La nuova posizione nella lista

console.log(listUsers.indexOf(newUser));
