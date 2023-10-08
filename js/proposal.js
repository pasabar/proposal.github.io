document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/text proposal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const judulElement = document.getElementById("judul-proposal");
        const latarElement = document.getElementById("latar-belakang");
        const isiElement = document.getElementById("isi-proposal");
        const judul2Element = document.getElementById("judul2-proposal");
        const isi2Element = document.getElementById("isi2-proposal");
        const judul3Element = document.getElementById("judul3-proposal")
        const isi3Element = document.getElementById("isi3-proposal")



        // Populate HTML elements with user data
        judulElement.textContent = userData.Judul;
        latarElement.textContent = userData.Latar;
        isiElement.textContent = userData.Isi;
        judul2Element.textContent = userData.Judul2;
        isi2Element.innerHTML = userData.Isi2.replace(/\n/g, '<br>');
        judul3Element.textContent = userData.Judul3;
        isi3Element.innerHTML = userData.Isi3.replace(/\n/g, '<br>');


    } catch (error) {
        console.error('Error:', error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/proposal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const namaElement = document.getElementById("nama-judul");
        const abstarkElement = document.getElementById("abstark");



        // Populate HTML elements with user data
        namaElement.textContent = userData.Nama;
        abstarkElement.textContent = userData.Abstark;


    } catch (error) {
        console.error('Error:', error);
    }
});