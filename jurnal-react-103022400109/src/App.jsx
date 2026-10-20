import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

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
  </>)
}

export default App
