const data = [
    {
        name: 'Alice',
        birthplace: 'Jakarta',
        gender: 'female',
        birthdate: '2000-01-01',
        religion: 'Islam',
        address: 'Jl. Mawar No. 1',
        nisn: '1234567890',
        graduationYear: 2020,
        status: 'working',
        university: '',
        major: '',
        workplace: 'Perusahaan A',
        position: 'Manager'
    },
    {
        name: 'Bob',
        birthplace: 'Bandung',
        gender: 'male',
        birthdate: '1999-02-02',
        religion: 'Kristen',
        address: 'Jl. Melati No. 2',
        nisn: '0987654321',
        graduationYear: 2019,
        status: 'studying',
        university: 'Universitas B',
        major: 'Teknik Informatika',
        workplace: '',
        position: ''
    },
    {
        name: 'Charlie',
        birthplace: 'Surabaya',
        gender: 'male',
        birthdate: '2001-03-03',
        religion: 'Hindu',
        address: 'Jl. Kenanga No. 3',
        nisn: '1122334455',
        graduationYear: 2021,
        status: 'working-and-studying',
        university: 'Universitas C',
        major: 'Ekonomi',
        workplace: 'Perusahaan C',
        position: 'Staf'
    }
    // Tambahkan data lainnya di sini
];

function toggleFilterMenu() {
    const filterMenu = document.getElementById('filter-menu');
    filterMenu.classList.toggle('show');
}

function toggleCustomStatusInput() {
    const status = document.getElementById('status').value;
    const customStatusContainer = document.getElementById('custom-status-container');
    if (status === 'other') {
        customStatusContainer.style.display = 'block';
    } else {
        customStatusContainer.style.display = 'none';
    }
}

function applyFilters() {
    const graduationYear = document.getElementById('graduation-year').value;
    const status = document.getElementById('status').value;
    const customStatus = document.getElementById('custom-status').value.toLowerCase();
    const university = document.getElementById('university').value.toLowerCase();
    const major = document.getElementById('major').value.toLowerCase();
    const workplace = document.getElementById('workplace').value.toLowerCase();
    const position = document.getElementById('position').value.toLowerCase();
    const gender = document.getElementById('gender').value;

    let filteredData = data.filter(item => {
        return (graduationYear === '' || item.graduationYear === parseInt(graduationYear)) &&
               (status === 'all' || item.status === status || (status === 'other' && item.status.toLowerCase().includes(customStatus))) &&
               (university === '' || item.university.toLowerCase().includes(university)) &&
               (major === '' || item.major.toLowerCase().includes(major)) &&
               (workplace === '' || item.workplace.toLowerCase().includes(workplace)) &&
               (position === '' || item.position.toLowerCase().includes(position)) &&
               (gender === 'all' || item.gender === gender);
    });

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    filteredData = filteredData.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.university.toLowerCase().includes(searchTerm) ||
        item.workplace.toLowerCase().includes(searchTerm)
    );

    displayData(filteredData);
}

function displayData(filteredData) {
    const dataBody = document.getElementById('data-body');
    dataBody.innerHTML = '';

    filteredData.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.birthplace}</td>
            <td>${item.gender}</td>
            <td>${item.birthdate}</td>
            <td>${item.religion}</td>
            <td>${item.address}</td>
            <td>${item.nisn}</td>
            <td>${item.graduationYear}</td>
            <td>${item.status}</td>
            <td>${item.status === 'working' ? '' : item.university}</td>
            <td>${item.status === 'working' ? '' : item.major}</td>
            <td>${item.status === 'studying' ? '' : item.workplace}</td>
            <td>${item.status === 'studying' ? '' : item.position}</td>
        `;
        dataBody.appendChild(row);
    });
}

function sortData(by) {
    let filteredData = data.slice();

    filteredData.sort((a, b) => {
        if (a[by] < b[by]) return -1;
        if (a[by] > b[by]) return 1;
        return 0;
    });

    displayData(filteredData);
}

// Initial display
displayData(data);
