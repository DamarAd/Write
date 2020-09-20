// menangkap pilihan player
var player = prompt('Mana yang anda pilih? jempol / telunjuk / kelingking');

// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();

if ( comp < 0.34 ) {
    comp = 'jempol';    
} else if ( comp >= 0.3 && comp < 0.67 ) {
    comp = 'telunjuk';
} else {
    comp = 'kelingking';
}


var hasil = '';
// menentukan rules
if ( player == comp ) {
    hasil = 'SERI!';
} else if ( player == 'jempol' ) {
    // if ( comp == 'telunjuk' ) {
    //     hasil = 'MENANG!';
    // } else {
    //     hasil = 'KALAH!';
    // }
    hasil = ( comp == 'telunjuk' ) ? 'MENANG!' : 'KALAH';
} else if ( player == 'telunjuk' ) {
    hasil = ( comp == 'kelingking' ) ? 'MENANG!' : 'KALAH!';
} else if ( player == 'kelingking' ) {
    hasil = ( comp == 'jempol' ) ? 'MENANG!' : 'KALAH!';
} else {
    hasil = 'Anda memasukkan pilihan yang salah!';
}

// tampilkan hasilnya
alert('Kamu memilih ' + player + ' dan Komputer memilih ' + comp + '\nMaka hasilnya : Kamu ' + hasil );