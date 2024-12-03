//Register User
async function CreateUser(event) {
    event.preventDefault();


const Newusername = document.getElementById("Newuser").value;
const Newemail = document.getElementById("NewUsermail").value;
const Newpassword = document.getElementById("NewuserPwd").value;
const confirmPassword = document.getElementById("VNewuserPwd").value;

if (Newpassword !== confirmPassword) {
    alert ('Passwords do not match.');
    return;
}

try{
  const response = await fetch ("/api/register", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, email, password })
  });

  const data = await response.json();
  if (response.ok) {
    alert(data.message);
    document.getElementById('register').reset();
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

//Login
async function Login(event) {
    event.preventDefault();

    const useremail = document.getElementById("UserEmail").value;
    const password = document.getElementById("pwdLogin").value;

    try {
        const response = await fetch("/api/login",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          window.location.href = 'Myproject.hmtl'; // redirect to Myprojects page
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error login in', error); 
    }
}
