export const blogData = {
    'vite': {
        title: "'vite' is not recognized on your project",
        content: `


## Solution for 'vite' is not recognized

### 'vite' is not recognized as an internal or external command
This error typically occurs when Vite isn't properly installed. Here's how to fix it:

\`\`\`bash
# You can installing npm i
npm install

# yarn users can use
yarn install
\`\`\`

### Happy Coding with Vite!

        `,
        author: "Robbanie Hillaly",
        date: "June 7, 2024",
        readTime: "5 min read",
        tags: ["Vite", "JavaScript", "Web Development"]
    },
    'javascript': {
        title: "Belajar JavaScript Pemula",
        content: `


### Belajar JavaScript Pemula.
JavaScript adalah bahasa pemrograman yang sangat populer dan digunakan di berbagai bidang, terutama dalam pengembangan web. Dalam artikel ini, kita akan membahas beberapa fitur modern JavaScript yang membuat pengkodean lebih efisien.
## **1. Installasi Node.js**
Apa itu Node.js? Jadi Node.js adalah runtime JavaScript yang memungkinkan kita menjalankan JavaScript di luar browser. Untuk menginstalnya, kalian bisa langsung click "[Node.js](https://nodejs.org/)" atau bisa cari dibrowser dan unduh versi terbaru.
## **2. Cek Apakah Node.js sudah terinstall**
Untuk memastikan Node.js sudah terpasang, buka terminal atau command prompt dan ketik perintah berikut:
\`\`\`bash
node -v
# Atau
npm -v
\`\`\`
Jika Node.js terpasang dengan benar, perintah di atas akan menampilkan versi Node.js yang terpasang.
## **3. Membuat Project JavaScript**
Untuk membuat project JavaScript, kita bisa menggunakan perintah berikut:
\`\`\`bash
mkdir nama-project
cd nama-project
\`\`\`
Kemudian, kita bisa membuat file JavaScript baru dengan nama \`index.js\`:
\`\`\`bash
# Di Linux atau MacOS
touch index.js
# Atau di Windows
echo > index.js
\`\`\`
## **4. Menjalankan File JavaScript**
Oke ini part yang mengasyikan. Akhirnya kita ngoding! Oke ketikan di dalam file \`index.js\`:
\`\`\`javascript
console.log("Hello, World!");
\`\`\`
Kemudian, untuk menjalankan file JavaScript tersebut, kita bisa menggunakan perintah berikut di terminal:
\`\`\`bash
node index.js
\`\`\`
Outputnya apa ya? Outputnya adalah:
\`\`\`
Hello, World!
\`\`\`
Tada kita sudah berhasil membuat dan menjalankan file JavaScript pertama kita! Selamat!        `,
        author: "Robbanie Hillaly Kurniadien",
        date: "June 7, 2024",
        readTime: "8 min read",
        tags: ["JavaScript", "ES6", "Web Development"]
    }
};