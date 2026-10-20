import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {KartuMenu, LabelHarga, Panel} from './components/KartuMenu.jsx'
const Nama = 'Fiqah'
const N = 9
const gayaJudul = { color: '#1F3A5F', fontsize: '28px' }
function App() {
  const jam = 9
  return (<>
    <h1 className="judul" style={gayaJudul}>
      kantin {Nama}
    </h1>
    <p>{jam< 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
    <p>saldo awal kartu kantin: Rp {N * 1000}</p>
    <button disabled> bayar </button>

    <h1 className="judul" style={gayaJudul}>
      Menu Hari Ini
    </h1>
    <KartuMenu nama="Nasi Ayam Geprek" harga="137000" kategori="Makanan"/>
    <KartuMenu nama="Mie Goreng Telor" harga="12000" kategori="Makanan"/>
    <KartuMenu nama="Es Teh Lemon" harga="6000" kategori="Minuman"/>
  </>)
}

export default App
