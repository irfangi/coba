var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Nama : Irfangi <br><br> Sekolah/Institusi : STMIK AKAKOM YOGYAKARTA<br><br>Jurusan : Teknik Informatika<br> <br>Angkatan : 2015 <br><br> Motivasi mengikuti workshop : Untuk menambah ilmu serta wawasan tentang NODE JS')
})

app.listen(8888, function () {
    console.log('server berjalan....')
})