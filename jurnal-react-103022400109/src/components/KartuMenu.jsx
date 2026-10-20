import { useState } from 'react'
function KartuMenu(props) {
  return (
    <div>
      <h1><Panel judul={props.judul} /></h1>
      <h2 style={{ color: '#1F3A5F', fontsize: '28px' }}>{props.nama}</h2>
      <p><LabelHarga harga={props.harga}/></p>
      <p>{props.kategori}</p>
    </div>
  );
}

function LabelHarga(props) {
  return (
    <div>
      <p>RP. {props.harga} </p>
    </div>
  );
}

function Panel(props) {
  return (
    <div>
      <h2>{props.judul}</h2>
    </div>
  );
}

export {KartuMenu, LabelHarga, Panel}