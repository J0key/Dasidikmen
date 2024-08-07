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
    } else if (status === 'bekerja_dan_pendidikan') {
        const combinedUniversity = document.getElementById('combinedUniversity').value;
        const combinedMajor = document.getElementById('combinedMajor').value;
        const combinedWorkPlace = document.getElementById('combinedWorkPlace').value;
        const combinedJobTitle = document.getElementById('combinedJobTitle').value;
        if (combinedUniversity === '' || combinedMajor === '' || combinedWorkPlace === '' || combinedJobTitle === '') {
            alert('Lengkapi informasi universitas, jurusan, tempat kerja, dan pekerjaan.');
            valid = false;
        }
    } else if (status === 'lainnya') {
        const keteranganStatus = document.getElementById('keteranganStatus').value;
        if (keteranganStatus === '') {
            alert('Lengkapi keterangan status.');
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
    document.getElementById('combinedFields').style.display = status === 'bekerja_dan_pendidikan' ? 'block' : 'none';
    document.getElementById('lainnyaFields').style.display = status === 'lainnya' ? 'block' : 'none';
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
    } else if (status === 'bekerja_dan_pendidikan') {
        const combinedUniversity = document.getElementById('combinedUniversity').value;
        const combinedMajor = document.getElementById('combinedMajor').value;
        const combinedWorkPlace = document.getElementById('combinedWorkPlace').value;
        const combinedJobTitle = document.getElementById('combinedJobTitle').value;
        output += `<p>Universitas/Sekolah Tinggi: ${combinedUniversity}</p>`;
        output += `<p>Jurusan: ${combinedMajor}</p>`;
        output += `<p>Tempat Kerja: ${combinedWorkPlace}</p>`;
        output += `<p>Pekerjaan: ${combinedJobTitle}</p>`;
    } else if (status === 'lainnya') {
        const keteranganStatus = document.getElementById('keteranganStatus').value;
        output += `<p>Keterangan Status: ${keteranganStatus}</p>`;
    }

    document.getElementById('output').innerHTML = output;
}
