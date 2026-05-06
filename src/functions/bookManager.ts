// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
import { Book } from "../types";
import { books } from "../data/books";
// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
function addBook(book: Book): void {
    books.push(book);
    console.log(`Buku "${book.title} oleh ${book.author} sudah ditambahkan`)
}
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
function listBooks(): void {
    if (books.length === 0) {
        console.log("Belum ada buku yang tersimpan")
        return;
    }

    console.log("--- Daftar Semua Buku ---")
    for (let i = 0; i < books.length; i++) {
        const buku = books[i];
        console.log(`${i + 1}. "${buku.title}" - ${buku.author} (${buku.publicationYear})`);
    }
    console.log(`Total: ${books.length} buku`);
}

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
// jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

function searchBook(title?: string): void {
    if (title === undefined) {
        console.log("Judul buku tidak diberikan. Menampilkan semua buku:")
        listBooks();
        return;
    }

    const keyword = title.toLowerCase();
    const hasil = books.filter((buku) => buku.title.toLowerCase().includes(keyword));

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

export { addBook, listBooks, searchBook };