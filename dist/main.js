"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
const bookManager_1 = require("./functions/bookManager");
console.log("Book Management Application - Eduardus Arthur");
console.log("=====================================");
// Mulai pengujian di bawah ini
// 1. Tambah Data Buku
console.log("1. Tambah fungsi addBook");
(0, bookManager_1.addBook)({
    title: "Let Them",
    author: "Mel Robbins",
    publicationYear: 2024,
});
(0, bookManager_1.addBook)({
    title: "Atomic Habits",
    author: "James Clear",
    publicationYear: 2018,
});
(0, bookManager_1.addBook)({
    title: "The Daily Stoic",
    author: "Ryan Holiday",
    publicationYear: 2016,
});
(0, bookManager_1.addBook)({
    title: "The Power of Now",
    author: "Eckhart Tolle",
    publicationYear: 1997,
});
(0, bookManager_1.addBook)({
    title: "The Things You Can See Only When You Slow Down",
    author: "Haemin Sunim",
    publicationYear: 2019,
});
// 2. Fungsi List Books
console.log("2. Tampilkan semua buku dengan fungsi listBooks");
(0, bookManager_1.listBooks)();
// 3. Fungsi Search Books
console.log("3. Cari buku dengan judul 'Atomic Habits'");
(0, bookManager_1.searchBook)("Atomic Habits");
// 4. Cari Search Books dengan parameter yang tidak ada
console.log("4. Cari buku dengan penulis 'James Clear'");
(0, bookManager_1.searchBook)("James Clear");
// 5. Cari Fungsi Search Books tanpa parameter
console.log("5. Cari buku tanpa parameter (tampilkan semua buku)");
(0, bookManager_1.searchBook)();
