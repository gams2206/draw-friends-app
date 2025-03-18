let friends = [];

const friendsList = document.getElementById('listaAmigos');

const resultInput = document.getElementById('resultado');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addFriend()
    }
});

function listFriends() {
    resultInput.innerHTML = '';
    friendsList.innerHTML = '';

    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendsList.appendChild(li);
    });
};

function addFriend() {

    const friendNameInput = document.getElementById('amigo');
    const friendName = friendNameInput.value;

    if (friendName !== '') {
        friends.push(friendName);
        listFriends();
        friendNameInput.value = '';
        friendNameInput.focus();
    } else {
        alert('Precisa digitar um nome para adicionar a lista');
        friendNameInput.focus();
    }
};

function drawFriends() {
    if (friends.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const drawnFriend = friends[randomIndex];
    const li = document.createElement('li');
    li.textContent = drawnFriend;
    resultInput.appendChild(li);
    listaAmigos.innerHTML = '';
    friends = [];
};
