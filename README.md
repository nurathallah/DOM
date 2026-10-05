<h2>1. querySelector dan querySelectorAll</h2>
querySelector
querySelector digunakan untuk mengambil satu elemen HTML berdasarkan selector seperti id, class, atau tag.
Contoh dari kode kamu:

```javascript
const judul = document.querySelector("#judul");
```

Artinya:
document → mengambil dari halaman HTML.
querySelector() → mencari elemen.
#judul → mencari elemen yang memiliki id="judul".
Jadi, kode tersebut mengambil elemen:

<h1 id="judul">Perpustakaan Sekolah</h1>
querySelectorAll
querySelectorAll digunakan untuk mengambil semua elemen yang sesuai dengan selector.
Contoh:

```javascript
const semuaBuku = document.querySelectorAll(".buku");
```

Artinya mengambil semua elemen yang memiliki class buku.
Kemudian:
console.log("Jumlah buku:", semuaBuku.length);
digunakan untuk mengetahui jumlah buku yang ditemukan.
Kesimpulan:
querySelector → mengambil satu elemen.
querySelectorAll → mengambil semua elemen yang sesuai.

<h2>2. innerHTML, textContent, dan innerText</h2>

Ketiganya digunakan untuk mengambil atau mengubah isi suatu elemen HTML.
textContent
Digunakan untuk mengubah atau mengambil teks dari sebuah elemen.

Contoh:

```javascript
judul.textContent = "Perpustakaan Digital";
```

Hasilnya:

Perpustakaan Digital
innerHTML

Digunakan untuk mengubah isi elemen sekaligus bisa memasukkan tag HTML.
Contoh:

```javascript
judul.innerHTML = "Perpustakaan <span>Digital</span>";
 ```

<span> akan dianggap sebagai elemen HTML, bukan teks biasa.
Jadi innerHTML cocok jika kita ingin memasukkan HTML ke dalam sebuah elemen.
innerText
Digunakan untuk mengambil teks yang terlihat pada elemen.
Contoh:
```javascript
console.log("Isi judul:", judul.innerText);
```

Kode tersebut menampilkan teks yang ada pada judul ke console.


Perbedaannya:
Property	Fungsi
textContent	Mengambil/mengubah teks
innerHTML	Mengambil/mengubah HTML beserta tag
innerText	Mengambil teks yang terlihat

Gampangnya:
textContent = teks
innerHTML = teks + HTML
innerText = teks yang tampil

<h2>3. Manipulasi Atribut dan Style</h2>

Manipulasi atribut dan style digunakan untuk mengubah bagian HTML atau tampilan elemen menggunakan JavaScript.
Manipulasi Atribut

Contoh dari kode kamu:

searchInput.setAttribute(
    "placeholder",
    "Ketik nama buku..."
);

Kode tersebut mengubah atribut placeholder pada input.
Sebelumnya:

<input placeholder="Cari nama buku...">

Setelah JavaScript dijalankan:

<input placeholder="Ketik nama buku...">

setAttribute() digunakan untuk mengubah atau menambahkan atribut HTML.

Manipulasi Style

Contoh:

```javascript
judul.style.color = "darkblue";
judul.style.fontSize = "32px";
```

Artinya JavaScript mengubah tampilan judul:

color → mengubah warna teks.
fontSize → mengubah ukuran teks.

Jadi HTML yang awalnya biasa bisa diubah tampilannya langsung menggunakan JavaScript.

Kesimpulan
Manipulasi atribut = mengubah atribut HTML.
Manipulasi style = mengubah tampilan elemen HTML.