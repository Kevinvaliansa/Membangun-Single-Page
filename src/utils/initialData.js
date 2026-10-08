const initialNotes = [
  {
    id: 'notes-1',
    title: 'Babel',
    body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 'notes-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript biasa, bukan class. Functional component sering digunakan bersama React Hooks untuk mengelola state dan lifecycle.',
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 'notes-3',
    title: 'Prop Types',
    body: 'PropTypes adalah library bawaan React untuk melakukan validasi tipe data dari props yang diterima oleh sebuah komponen. Dengan PropTypes, kita bisa memastikan bahwa props yang dikirimkan sesuai dengan yang diharapkan.',
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 'notes-4',
    title: 'Belajar Redux',
    body: 'Redux adalah library manajemen state yang populer digunakan bersama React. Redux membantu kita mengelola state aplikasi secara terpusat, sehingga lebih mudah dilacak dan di-debug.',
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 'notes-5',
    title: 'Immer',
    body: 'Immer adalah library yang memungkinkan kita bekerja dengan immutable state secara lebih mudah dan intuitif. Dengan Immer, kita bisa "memutasikan" state secara langsung dan Immer akan menghasilkan state baru yang immutable.',
    archived: true,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 'notes-6',
    title: 'React Hooks',
    body: 'Hooks adalah fitur baru React yang diperkenalkan pada versi 16.8. Hooks memungkinkan kita menggunakan state dan fitur React lainnya tanpa menulis class. Hooks yang paling sering digunakan adalah useState dan useEffect.',
    archived: true,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
];

export default initialNotes;
