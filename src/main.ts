// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
import { addBook, listBooks, searchBook } from "./functions/bookManager";

console.log("Book Management Application - Eduardus Arthur");
console.log("=====================================");

// Mulai pengujian di bawah ini

// 1. Tmabah Data Buku
console.log("1. Tambah fungsi addBook");
addBook({
  title: "Let Them",
  author: "Mel Robbins",
  publicationYear: 2024,
});
addBook({
  title: "Atomic Habits",
  author: "James Clear",
  publicationYear: 2018,
});
addBook({
  title: "The Daily Stoic",
  author: "Ryan Holiday",
  publicationYear: 2016,
});
addBook({
  title: "The Power of Now",
  author: "Eckhart Tolle",
  publicationYear: 1997,
});
addBook({
  title: "The Things You Can See Only When You Slow Down",
  author: "Haemin Sunim",
  publicationYear: 2019,
});

// 2. Fungsi List Books
console.log("2. Tampilkan semua buku dengan fungsi listBooks");
listBooks();

// 3. Fungsi Search Books
console.log("3. Cari buku dengan judul 'Atomic Habits'");
searchBook("Atomic Habits");

// 4. Cari Fungsi Search Books dengan parameter
console.log("4. Cari buku dengan penulis 'James Clear'");
searchBook("James Clear");
searchBook("Book");

// 5. Cari Fungsi Search Books tanpa parameter
console.log("5. Cari buku tanpa parameter (tampilkan semua buku)");
searchBook();
