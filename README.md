1. querySelector dan querySelectorAll
Pengertian

Digunakan untuk memilih atau mengambil elemen HTML melalui JavaScript.

querySelector() → mengambil 1 elemen pertama yang cocok.
querySelectorAll() → mengambil semua elemen yang cocok.
Cara kerja

JavaScript mencari elemen berdasarkan selector CSS, seperti:

.judul → class
#nama → id
button → tag
Contoh di Perpustakaan

Misalnya ingin mengambil judul halaman perpustakaan:

const judul = document.querySelector(".judul");

Jika ingin mengambil semua nama buku:

const buku = document.querySelectorAll(".nama-buku");
2. innerHTML, textContent, dan innerText

Ketiganya digunakan untuk mengambil atau mengubah isi sebuah elemen HTML.

innerHTML

Digunakan untuk membaca atau mengubah isi HTML, termasuk tag HTML.

Contoh:

judul.innerHTML = "<b>Perpustakaan Digital</b>";

Hasilnya tulisan menjadi tebal.

textContent

Digunakan untuk membaca atau mengubah teks saja, termasuk teks yang sedang tersembunyi.

Contoh:

judul.textContent = "Perpustakaan Sekolah";
innerText

Digunakan untuk membaca atau mengubah teks yang terlihat oleh pengguna.

Contoh:

judul.innerText = "Daftar Buku";
Perbedaan singkat
Properti	Fungsi
innerHTML	Mengatur isi termasuk HTML
textContent	Mengatur teks
innerText	Mengatur teks yang terlihat
3. Manipulasi Atribut dan Style
Pengertian

Manipulasi atribut adalah mengubah nilai atribut HTML menggunakan JavaScript.

Contohnya atribut:

src
href
class
id
title
Cara kerja

Untuk mengubah atribut:

element.setAttribute("title", "Buku pilihan");

Untuk mengambil atribut:

element.getAttribute("title");

Untuk menghapus atribut:

element.removeAttribute("title");
Contoh kasus perpustakaan

Misalnya gambar sampul buku ingin diganti:

gambar.setAttribute("src", "buku.jpg");
Manipulasi Style

Digunakan untuk mengubah tampilan elemen secara langsung.

Contoh:

judul.style.color = "blue";
judul.style.fontSize = "24px";

Dalam project perpustakaan, misalnya warna judul buku dapat berubah ketika pengguna melakukan tindakan tertentu.

4. Membuat & Menghapus Elemen
Pengertian

JavaScript dapat digunakan untuk membuat elemen HTML baru dan menghapus elemen yang sudah ada.

Membuat elemen

Menggunakan:

document.createElement()

Contoh kasus perpustakaan:

const buku = document.createElement("li");
buku.textContent = "Pemrograman JavaScript";

Kemudian elemen tersebut dapat dimasukkan ke halaman.

Menghapus elemen

Elemen dapat dihapus menggunakan:

element.remove();

Contohnya ketika admin ingin menghapus buku dari daftar perpustakaan.

5. Event Listener: click, input, submit
Pengertian

Event Listener digunakan untuk membuat JavaScript merespons tindakan yang dilakukan pengguna.

click

Berjalan ketika elemen diklik.

Contoh:

tombol.addEventListener("click", function() {
    alert("Buku dipilih");
});

Kasus perpustakaan: tombol "Lihat Detail" diklik.

input

Berjalan ketika isi input berubah.

Contoh:

input.addEventListener("input", function() {
    console.log(input.value);
});

Kasus perpustakaan: pengguna mengetik nama buku pada kolom pencarian dan daftar buku dapat disaring.

submit

Berjalan ketika form dikirim.

Contoh:

form.addEventListener("submit", function() {
    // proses data buku
});

Kasus perpustakaan: admin mengisi form untuk menambahkan buku baru.

6. Event Bubbling & stopPropagation()
Event Bubbling

Event bubbling adalah kondisi ketika sebuah event pada elemen anak juga dapat diteruskan ke elemen induknya.

Contoh struktur:

Daftar Buku
   └── Buku

Jika elemen Buku diklik, event tersebut dapat diteruskan sampai ke Daftar Buku.

Contoh kasus perpustakaan

Misalnya setiap kartu buku dan bagian daftar buku memiliki event click.

Ketika kartu buku diklik, event tersebut juga bisa dianggap sebagai klik pada container daftar buku karena adanya event bubbling.

stopPropagation()

Digunakan untuk menghentikan event agar tidak diteruskan ke elemen induknya.

Contoh:

buku.addEventListener("click", function(event) {
    event.stopPropagation();
});

Jadi, jika pengguna mengklik buku, event hanya diproses oleh elemen buku dan tidak diteruskan ke parent/container.

7. Repository GitHub dan Managing Per Project
Repository GitHub

Repository adalah tempat untuk menyimpan dan mengelola kode project secara online menggunakan GitHub.

Untuk tugas ini, repository dapat diberi nama:

DOM

Di dalamnya project perpustakaan dapat digunakan untuk mempraktikkan semua materi DOM.

Managing per Project

Maksudnya setiap materi DOM dikerjakan dan dikelola dalam project perpustakaan, sehingga teori yang dipelajari langsung diterapkan.

Contohnya:

Materi	Implementasi Perpustakaan
querySelector	Mengambil judul/elemen buku
querySelectorAll	Mengambil semua daftar buku
innerHTML	Mengubah isi kartu buku
textContent	Mengubah nama buku
Manipulasi atribut	Mengubah gambar/link buku
Manipulasi style	Mengubah tampilan buku
Membuat elemen	Menambahkan buku
Menghapus elemen	Menghapus buku
click	Tombol detail/hapus
input	Pencarian buku
submit	Menambahkan buku melalui form
Event bubbling	Menangani klik parent dan child
stopPropagation	Menghentikan event agar tidak naik ke parent
