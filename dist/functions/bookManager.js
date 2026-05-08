"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
// 1. Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
function addBook(book) {
    books_1.books.push(book);
    console.log(`Buku "${book.title}" oleh ${book.author} sudah ditambahkan`);
}
// 2. Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
function listBooks() {
    if (books_1.books.length === 0) {
        console.log("Belum ada buku yang tersimpan");
        return;
    }
    console.log("--- Daftar Semua Buku ---");
    for (let i = 0; i < books_1.books.length; i++) {
        const buku = books_1.books[i];
        console.log(`${i + 1}. "${buku.title}" - ${buku.author} (${buku.publicationYear})`);
    }
    console.log(`Total: ${books_1.books.length} buku`);
}
// 3. Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
// jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
function searchBook(title) {
    if (title === undefined) {
        console.log("Judul buku tidak diberikan. Menampilkan semua buku:");
        listBooks();
        return;
    }
    const keyword = title.toLowerCase();
    const hasil = books_1.books.filter((buku) => buku.title.toLowerCase().includes(keyword));
    if (hasil.length === 0) {
        console.log(`Buku dengan judul "${title}" tidak ditemukan`);
        return;
    }
    console.log(`=== Hasil pencarian untuk "${title}" ===`);
    for (let i = 0; i < hasil.length; i++) {
        const buku = hasil[i];
        console.log(`${i + 1}. "${buku.title}" - ${buku.author} (${buku.publicationYear})`);
    }
    console.log(`Ditemukan ${hasil.length} buku`);
}
