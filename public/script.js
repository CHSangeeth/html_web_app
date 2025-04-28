// Login
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.username.value,
        password: form.password.value
      })
    }).then(res => res.json()).then(data => {
      if (data.success) {
        if (data.isAdmin) window.location = '/admin';
        else window.location = '/dashboard';
      } else {
        document.getElementById('loginError').innerText = data.error || 'Login failed';
      }
    });
  };
  
  // Register
  document.getElementById('registerForm').onsubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.username.value,
        whatsapp: form.whatsapp.value,
        password: form.password.value
      })
    }).then(res => res.json()).then(data => {
      if (data.success) {
        alert('Registration successful! Please login.');
        form.reset();
      } else {
        document.getElementById('registerError').innerText = data.error || 'Registration failed';
      }
    });
  };