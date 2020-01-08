// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.

// 1.Chiedere il cognome all'utente
var surnameUser = prompt('Inserisci il tuo cognome');
console.log(surnameUser);
var listUsers = [
  'Rossi',
  'Alessi',
  'Moretti',
  'Bruni',
  'Conte'];
console.log(listUsers);

// 2.Inserire il cognome in un array
listUsers.push(surnameUser);

// 3.Ordinare alfabeticamente e stampare
for (var i = 0; i < listUsers.length; i++){
  console.log(listUsers[i]);
var listContent = document.getElementById('surname_list').innerHTML;
document.getElementById('surname_list').innerHTML = listContent + '<li>' + listUsers[i] + '</li>';
console.log(listContent);
}
// 4.La nuova posizione nella lista
