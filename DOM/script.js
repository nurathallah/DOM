// ========================================
// 1. querySelector dan querySelectorAll
// ========================================

const judul = document.querySelector("#judul");

const semuaBuku = document.querySelectorAll(".buku");

console.log("Judul:", judul);
console.log("Jumlah buku:", semuaBuku.length);


// ========================================
// 2. innerHTML, textContent, innerText
// ========================================

// textContent
judul.textContent = "Perpustakaan Digital";

// innerHTML
judul.innerHTML = "Perpustakaan <span>Digital</span>";

// innerText
console.log("Isi judul:", judul.innerText);


// ========================================
// 3. Manipulasi Attribute dan Style
// ========================================

const searchInput = document.querySelector("#searchInput");

// Manipulasi attribute
searchInput.setAttribute("placeholder", "Ketik nama buku...");

// Manipulasi style
judul.style.color = "darkblue";
judul.style.fontSize = "32px";


// ========================================
// 4. Membuat dan Menghapus Elemen
// ========================================

const formBuku = document.querySelector("#formBuku");
const daftarBuku = document.querySelector("#daftarBuku");

formBuku.addEventListener("submit", function(event) {

    event.preventDefault();

    const namaBuku = document.querySelector("#namaBuku").value;
    const penulis = document.querySelector("#penulis").value;

    // Membuat elemen baru
    const bukuBaru = document.createElement("div");
    bukuBaru.classList.add("buku");

    bukuBaru.innerHTML = `
        <h3 class="nama-buku">${namaBuku}</h3>
        <p class="penulis">Penulis: ${penulis}</p>
        <button class="hapus">Hapus</button>
    `;

    // Menambahkan ke halaman
    daftarBuku.appendChild(bukuBaru);

    // Mengosongkan form
    formBuku.reset();
});


// ========================================
// 5. Event Listener
// click, input, submit
// ========================================

// CLICK
document.addEventListener("click", function(event) {

    if (event.target.classList.contains("hapus")) {

        event.target.parentElement.remove();

    }

});


// INPUT
searchInput.addEventListener("input", function() {

    const kataKunci = searchInput.value.toLowerCase();

    const buku = document.querySelectorAll(".buku");

    buku.forEach(function(item) {

        const nama = item
            .querySelector(".nama-buku")
            .textContent
            .toLowerCase();

        if (nama.includes(kataKunci)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});


// SUBMIT
formBuku.addEventListener("submit", function() {

    console.log("Form berhasil dikirim");

});


// ========================================
// 6. Event Bubbling & stopPropagation
// ========================================

daftarBuku.addEventListener("click", function() {

    console.log("Event bubbling: daftarBuku terkena event");

});

document.querySelectorAll(".buku").forEach(function(buku) {

    buku.addEventListener("click", function(event) {

        console.log("Buku diklik");

        // Menghentikan event bubbling
        event.stopPropagation();

    });

});