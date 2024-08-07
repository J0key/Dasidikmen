function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registrasi berhasil!');
        window.location.href = 'login.html';
    } else {
        alert('Isi semua field.');
    }

    return false;
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && username === storedUser.username && password === storedUser.password) {
        alert('Login berhasil!');
        window.location.href = 'index.html';
    } else {
        alert('Username atau password salah.');
    }

    return false;
}

function validateForm() {
    const name = document.getElementById('name').value;
    const nisn = document.getElementById('nisn').value;
    const school = document.getElementById('school').value;
    const address = document.getElementById('address').value;
    const status = document.getElementById('status').value;
    let valid = true;

    if (name === '' || nisn === '' || school === '' || address === '') {
        alert('Semua field harus diisi.');
        return false;
    }

    if (status === 'bekerja') {
        const workPlace = document.getElementById('workPlace').value;
        const jobTitle = document.getElementById('jobTitle').value;
        if (workPlace === '' || jobTitle === '') {
            alert('Lengkapi informasi tempat kerja dan pekerjaan.');
            valid = false;
        }
    } else if (status === 'pendidikan') {
        const university = document.getElementById('university').value;
        const major = document.getElementById('major').value;
        if (university === '' || major === '') {
            alert('Lengkapi informasi universitas/sekolah tinggi dan jurusan.');
            valid = false;
        }
    }

    if (valid) {
        displayData(name, nisn, school, address, status);
    }

    return valid;
}

function toggleFields() {
    const status = document.getElementById('status').value;
    document.getElementById('workFields').style.display = status === 'bekerja' ? 'block' : 'none';
    document.getElementById('studyFields').style.display = status === 'pendidikan' ? 'block' : 'none';
}

function displayData(name, nisn, school, address, status) {
    let output = `<h2>Data Siswa Alumni</h2>
                  <p>Nama: ${name}</p>
                  <p>NISN: ${nisn}</p>
                  <p>Asal Sekolah: ${school}</p>
                  <p>Alamat: ${address}</p>
                  <p>Status: ${status}</p>`;
    
    if (status === 'bekerja') {
        const workPlace = document.getElementById('workPlace').value;
        const jobTitle = document.getElementById('jobTitle').value;
        output += `<p>Tempat Kerja: ${workPlace}</p>`;
        output += `<p>Pekerjaan: ${jobTitle}</p>`;
    } else if (status === 'pendidikan') {
        const university = document.getElementById('university').value;
        const major = document.getElementById('major').value;
        output += `<p>Universitas/Sekolah Tinggi: ${university}</p>`;
        output += `<p>Jurusan: ${major}</p>`;
    }

    document.getElementById('output').innerHTML = output;
}
