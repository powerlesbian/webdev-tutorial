(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDXfCOHp-MQ3Q3loOF1WWlxK1RwaJ8UUBU",
    authDomain: "eagles-5fc88.firebaseapp.com",
    databaseURL: "https://eagles-5fc88.firebaseio.com",
    projectId: "eagles-5fc88",
    storageBucket: "eagles-5fc88.appspot.com",
    messagingSenderId: "422055144725",
    appId: "1:422055144725:web:5d96c54b03888fab698d1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // handle on firebase db
  const db = firebase.database();

  // get elements
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  const logout = document.getElementById('logout');
  const message = document.getElementById('message');
  const write = document.getElementById('write');
  const read = document.getElementById('read');
  const status = document.getElementById('status');

  // div to hold contents of messages db as a chat box between any users
  const chat = document.getElementById('chat-box');

  // element that should show the currently logged in user's email address
  const userNameDisplay = document.getElementById('name-display');
  let currentUserEmail = ''; // variable to store the current user's email

  // write
  write.addEventListener('click', (e) => {
    const messages = db.ref('messages');

    // simple id - ok for example, do not use in production
    const id = new Date().getTime();

    // write to db
    messages
      .child(id)
      .set({ message: message.value, sender: currentUserEmail })
      .then(function () {
        console.log('Wrote to DB!');
      });
  });

  // read
  read.addEventListener('click', (e) => {
    handleRead();
  });

  const messagesRef = db.ref('messages');
  messagesRef.on('value', (snapshot) => {
    handleRead();
  });

  // Function triggered on click of the 'Update Chat' button which parses the contents of the messages array to show them in the chat window
  function handleRead() {
    status.innerHTML = '';
    chat.innerHTML = '';
    const messages = db.ref('messages');

    messages.once('value').then(function (dataSnapshot) {
      var data = dataSnapshot.val();
      if (data) {
        var keys = Object.keys(data);

        keys.forEach(function (key) {
          console.log(data[key]);
          chat.innerHTML +=
            (data[key]['sender'] || '') +
            '   :   ' +
            data[key].message +
            '<br><br>';
        });
      }
    });
  }

  function updateCurrentUser(userEmail) {
    userNameDisplay.innerHTML = userEmail;
    currentUserEmail = userEmail;
  }

  // login
  login.addEventListener('click', (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Login Response: ', resp);
      logout.style.display = 'inline';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));
  });

  // signup
  signup.addEventListener('click', (e) => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Signup + Login Response: ', resp);
      logout.style.display = 'inline';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));
  });

  // logout
  logout.addEventListener('click', (e) => {
    firebase
      .auth()
      .signOut()
      .then((resp) => {
        console.log('Logout Response: ', resp);
        logout.style.display = 'none';
        login.style.display = 'inline';
        signup.style.display = 'inline';
        write.style.display = 'none';
        updateCurrentUser('');
      })
      .catch((e) => console.warn(e.message));
  });
})();
