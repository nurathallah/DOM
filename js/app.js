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

    // Mengambil data dari input
    const namaBuku = document.querySelector("#namaBuku").value.trim();
    const penulis = document.querySelector("#penulis").value.trim();


    // ========================================
    // 8. AMBIL DATA DAN VALIDASI
    // ========================================

    // Validasi input kosong
    if (namaBuku === "" || penulis === "") {
        alert("Nama buku dan penulis wajib diisi!");
        return;
    }

    // Validasi nama buku minimal 3 karakter
    if (namaBuku.length < 3) {
        alert("Nama buku minimal 3 karakter!");
        return;
    }

    console.log("Data valid!");
    console.log("Nama Buku:", namaBuku);
    console.log("Penulis:", penulis);


    // Membuat elemen baru
    const bukuBaru = document.createElement("div");
    bukuBaru.classList.add("buku");

    bukuBaru.innerHTML = `
        <h3 class="nama-buku">${namaBuku}</h3>
        <p class="penulis">Penulis: ${penulis}</p>
        <button class="hapus">Hapus</button>
    `;

    // Menambahkan buku ke halaman
    daftarBuku.appendChild(bukuBaru);

    // Mengosongkan form
    formBuku.reset();

    alert("Buku berhasil ditambahkan!");
});


// ========================================
// 5. EVENT LISTENER
// click, input, submit
// ========================================

// CLICK
document.addEventListener("click", function(event) {

    if (event.target.classList.contains("hapus")) {

        event.target.parentElement.remove();

        console.log("Buku berhasil dihapus");
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


// ========================================
// 6. EVENT BUBBLING & stopPropagation
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


// ========================================
// 7. EVENT DELEGATION
// ========================================

// Event dipasang pada parent,
// sehingga bisa menangani elemen anak
// termasuk buku yang baru dibuat.

daftarBuku.addEventListener("click", function(event) {

    if (event.target.classList.contains("hapus")) {

        const buku = event.target.parentElement;

        buku.remove();

        console.log("Event Delegation: Buku dihapus");
    }

});


// ========================================
// 9. DOM TRAVERSAL
// Parent dan Children
// ========================================

const bukuPertama = document.querySelector(".buku");

if (bukuPertama) {

    // Mengambil parent
    console.log(
        "Parent buku:",
        bukuPertama.parentElement
    );

    // Mengambil children
    console.log(
        "Children buku:",
        bukuPertama.children
    );

    // Mengambil nama buku dari children pertama
    console.log(
        "Nama buku:",
        bukuPertama.children[0].textContent
    );

    // Mengambil penulis dari children kedua
    console.log(
        "Penulis:",
        bukuPertama.children[1].textContent
    );
}