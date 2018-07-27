const FIREBASE_DATABASE = firebase.database()//store database

let subBtn = document.getElementById('submit'); //connect html to js. Aloow me to select btn element
subBtn.addEventListener('click', create);
function create() {
    //3.send data to the database
    FIREBASE_DATABASE.ref('/userinfo').push({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        grade: document.getElementById('grade').value,
        CodeCamp: document.getElementById('codecamp').value,
        CodeTryout: document.getElementById('tryout').value,
    });
}
