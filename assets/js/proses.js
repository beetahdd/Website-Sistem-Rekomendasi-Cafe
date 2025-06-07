// ====== DATA CAFE ======
const cafes = [
    {
        nama: "Kopi Dari Hati Jax Cafe",
        jamBuka: "08.00-00.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 4,
        suasana: 4,
        parkir: "Bayar",
        rating: 4.5,
        link: "https://maps.app.goo.gl/toccy2kgLio5oahN8",
        img: "assets/img/kopidarihati.png"
    },
    {
        nama: "OpaOmes Coffee",
        jamBuka: "09.00-23.30",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 4,
        parkir: "Gratis",
        rating: 4.7,
        link: "https://maps.app.goo.gl/V1q7AuPuwuBN72jk6",
        img: "assets/img/opaomes.png"

    },
    {
        nama: "Bento Kopi Maguwoharjo",
        jamBuka: "09.00-00.00",
        rangeHarga: "Rp 1-25rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 3,
        layanan: 3,
        suasana: 3,
        parkir: "Bayar",
        rating: 4.5,
        link: "https://maps.app.goo.gl/pBUXxivmyZY6sqY16",
        img: "assets/img/bentokopi.png"
    },
    {
        nama: "Lestari Corner Coffee",
        jamBuka: "00.00-00.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Bayar",
        rating: 4.7,
        link: "https://maps.app.goo.gl/TnMKqs7L5aZEw96X8",
        img: "assets/img/lestari.png"
    },
    {
        nama: "Tentrem Bumi Coffee",
        jamBuka: "00.00-00.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Bayar",
        rating: 4.5,
        link: "https://maps.app.goo.gl/HsVcHHioduQgpU3s5",
        img: "assets/img/tentrem.png"
    },
    {
        nama: "Teras Kemarin",
        jamBuka: "08.00-00.00",
        rangeHarga: "Rp 25-50rb",
        ac: false,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.7,
        link: "https://maps.app.goo.gl/8Z6ch42c2WqVEvLc6",
        img: "assets/img/teraskem.png"
    },
    {
        nama: "Damarasha Coffee and Space",
        jamBuka: "10.00-00.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.8,
        link: "https://maps.app.goo.gl/MdVVVUhsp6swwaVi7",
        img: "assets/img/damarasha.png"
    },
    {
        nama: "MOCOFFELO",
        jamBuka: "12.00-00.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.8,
        link: "https://maps.app.goo.gl/ppvSAy3S9CkPQaXA6",
        img: "assets/img/mocoffelo.png"
    },
    {
        nama: "Kopi Kima",
        jamBuka: "13.00-02.00",
        rangeHarga: "Rp 1-25rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Gratis",
        rating: 5.0,
        link: "https://maps.app.goo.gl/bSAq9E14QkiMnEEd6",
        img: "assets/img/kopikima.png"
    },
    {
        nama: "Luk Coffe & Book",
        jamBuka: "09.00-00.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Bayar",
        rating: 4.5,
        link: "https://maps.app.goo.gl/PHKcstU3Rd5pzDHG6",
        img: "assets/img/lukcoffe.png"
    },
    {
        nama: "Eastpresso Coffee and Space",
        jamBuka: "15.00-01.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.7,
        link: "https://maps.app.goo.gl/gad8WEyURdw3yr5S8",
        img: "assets/img/eastpresso.png"
    },
    {
        nama: "Semuda kopi Maguwoharjo",
        jamBuka: "07.00-23.00",
        rangeHarga: "Rp 5-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Bayar",
        rating: 4.9,
        link: "https://maps.app.goo.gl/D4wTMpoSXd4iyZZ2A",
        img: "assets/img/semuda.png"
    },
    {
        nama: "Dingo Coffee Maguwoharjo",
        jamBuka: "08.00-23.00",
        rangeHarga: "Rp 6-30rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan & Minuman",
        makanan: 4,
        layanan: 4,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.7,
        link: "https://maps.app.goo.gl/xXF9V86JdopVKxGH8",
        img: "assets/img/dingo.png"
    },
    {
        nama: "Mula Cafe and Eatery",
        jamBuka: "15.00-00.00",
        rangeHarga: "Rp 15-30rb",
        ac: false,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 4,
        layanan: 4,
        suasana: 5,
        parkir: "Bayar",
        rating: 4.6,
        link: "https://maps.app.goo.gl/xWnq14Z9wCMJcTsj9",
        img: "assets/img/mulacafe.png"
    },
    {
        nama: "Gimbo Coffee Roastery",
        jamBuka: "06.00-21.00",
        rangeHarga: "Rp 3-30rb",
        ac: false,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.7,
        link: "https://maps.app.goo.gl/nZ3q5ADJf4KrK4wF8",
        img: "assets/img/gimbo.png"
    },
    {
        nama: "Awor Espresso & Coffee Gear",
        jamBuka: "08.00-23.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 4,
        layanan: 4,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.6,
        link: "https://maps.app.goo.gl/siaHEzfBFAU1JQAM6",
        img: "assets/img/awor.png"
    },
    {
        nama: "Mato Kopi 2",
        jamBuka: "00.00-00.00",
        rangeHarga: "Rp 1-25rb",
        ac: false,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 4,
        layanan: 4,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.5,
        link: "https://maps.app.goo.gl/pLbAST2h7qyUBESg7",
        img: "assets/img/matokopi.png"
    },
    {
        nama: "Jinawi Kopi",
        jamBuka: "14.00-22.00",
        rangeHarga: "Rp 3-30rb",
        ac: false,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 4,
        layanan: 5,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.9,
        link: "https://maps.app.goo.gl/q14sXCbZgf9iLB319",
        img: "assets/img/jinawi.png"
    },
    {
        nama: "Art Coffee and Society",
        jamBuka: "10.00-00.00",
        rangeHarga: "Rp 1-25rb",
        ac: false,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.9,
        link: "https://maps.app.goo.gl/pNVphHL8bGbWeV4D6",
        img: "assets/img/art.png"
    },
    {
        nama: "Circa 90 Cafe",
        jamBuka: "10.30-23.30",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 4,
        suasana: 5,
        parkir: "Gratis",
        rating: 4.9,
        link: "https://maps.app.goo.gl/T9rYFxB8rksq4isaA",
        img: "assets/img/circa.png"
    },
    {
        nama: "WONK",
        jamBuka: "11.00-01.00",
        rangeHarga: "Rp 25-50rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 3,
        suasana: 4,
        parkir: "Gratis",
        rating: 4.9,
        link: "https://maps.app.goo.gl/NMYqrFmPUES8uHY28",
        img: "assets/img/wonk.png"
    },
    {
        nama: "Bjongngopi Maguwo",
        jamBuka: "10.00-00.00",
        rangeHarga: "Rp 1-25rb",
        ac: false,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 3,
        layanan: 4,
        suasana: 4,
        parkir: "Gratis",
        rating: 4.6,
        link: "https://maps.app.goo.gl/pmqXGPgYEzbqCUfC6",
        img: "assets/img/bjong.png"
    },
    {
        nama: "Seduh Wangi Coffee Shop ~ Seduh Manual , Biji / Bubuk Kopi & Alat Kopi",
        jamBuka: "07.00-21.00",
        rangeHarga: "Rp 1-25rb",
        ac: false,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 5,
        suasana: 3,
        parkir: "Gratis",
        rating: 4.9,
        link: "https://maps.app.goo.gl/jNCe1TZ6VgQ86AGW8",
        img: "assets/img/seduh.png"
    },
    {
        nama: "KOPI SEEK",
        jamBuka: "07.00-21.00",
        rangeHarga: "Rp 1-25rb",
        ac: true,
        wifi: true,
        colokan: true,
        smokingArea: true,
        ruangan: "Indoor dan Outdoor",
        ketersediaan: "Makanan ringan, berat & Minuman",
        makanan: 5,
        layanan: 4,
        suasana: 4,
        parkir: "Gratis",
        rating: 4.7,
        link: "https://maps.app.goo.gl/5bATUNuiP9uKhWtX7",
        img: "assets/img/kopiseek.png"
    }
];

function parseJamToMenit(jamStr) {
    const [jam, menit] = jamStr.split('.').map(Number);
    return jam * 60 + (menit || 0);
}

function getRangeJamMenit(jamBukaStr) {
    const [bukaStr, tutupStr] = jamBukaStr.split("-");
    return {
        buka: parseJamToMenit(bukaStr),
        tutup: parseJamToMenit(tutupStr),
    };
}

function cocokJamKunjungan(jamBukaStr, jamUser) {
    const { buka, tutup } = getRangeJamMenit(jamBukaStr);
    const is24Jam = buka === 0 && tutup === 0;
    return is24Jam || (
        buka < tutup
            ? jamUser >= buka && jamUser <= tutup
            : jamUser >= buka || jamUser <= tutup
    );
}

document.getElementById("formRekomendasi").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const jam = form.get("jam");
    const harga = form.get("harga");
    const menu = form.get("menu");
    const ac = form.get("ac") === "Tersedia";
    const colokan = form.get("colokan") === "Tersedia";
    const wifi = form.get("wifi") === "Tersedia";
    const smoking = form.get("smoking") === "Tersedia";
    const parkir = form.get("parkir");
    const ruangan = form.get("ruangan");
    const makanan = parseInt(form.get("nilaiMakanan") || 0);
    const layanan = parseInt(form.get("nilaiLayanan") || 0);
    const suasana = parseInt(form.get("nilaiSuasana") || 0);

    const [jamHour, jamMinute] = jam.split(":").map(Number);
    const jamUser = jamHour * 60 + jamMinute;

    const filtered = cafes.filter((cafe) => {
        const cocokJam = cocokJamKunjungan(cafe.jamBuka, jamUser);

        return (
            cocokJam &&
            cafe.rangeHarga === harga &&
            cafe.ketersediaan === menu &&
            cafe.ac === ac &&
            cafe.colokan === colokan &&
            cafe.wifi === wifi &&
            cafe.smokingArea === smoking &&
            cafe.parkir === parkir &&
            cafe.ruangan === ruangan &&
            cafe.makanan >= makanan &&
            cafe.layanan >= layanan &&
            cafe.suasana >= suasana
        );
    });
    
    filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    // Kosongkan container terlebih dahulu
    const resultContainer = document.getElementById("results-container");
    resultContainer.innerHTML = ""; // reset sebelumnya

    if (filtered.length === 0) {
        resultContainer.innerHTML = '<p style="text-align: center; font-size: 24px; margin-bottom: 1rem">Tidak ada hasil yang sesuai preferensi Anda.</p>';
    } else {
        filtered.forEach((cafe) => {
            const resultItem = document.createElement("div");
            resultItem.className = "result__item";
            resultItem.style = "display: flex; align-items: center; background-color: #a3a3a3; padding: 20px; margin-top: 20px;";

            resultItem.innerHTML = `
              <div class="result__image" style="width: 100px; height: 100px; margin-right: 20px;">
                <img src="${cafe.img}" alt="${cafe.nama}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; background: white;" />
              </div>
              <div class="result__info" style="flex-grow: 1;">
                <div class="result__name" style="font-weight: bold; font-size: 18px;"><h3>${cafe.nama}</h3></div>
                <div class="result__address"><h3>Jam Operasional: ${cafe.jamBuka}</h3></div>
                <div class="result__address"><h3>Harga: ${cafe.rangeHarga}</h3></div>
                <div class="result__address"><h3>Menu: ${cafe.ketersediaan}</h3></div>
                <div class="result__address"><h3>AC: ${cafe.ac ? "Tersedia" : "Tidak Tersedia"}</h3></div>
                <div class="result__address"><h3>Colokan: ${cafe.colokan ? "Tersedia" : "Tidak Tersedia"}</h3></div>
                <div class="result__address"><h3>Wifi: ${cafe.wifi ? "Tersedia" : "Tidak Tersedia"}</h3></div>
                <div class="result__address"><h3>Smoking Area: ${cafe.smokingArea ? "Tersedia" : "Tidak Tersedia"}</h3></div>
                <div class="result__address"><h3>Parkir: ${cafe.parkir}</h3></div>
              </div>
              <div class="result__rating" style="text-align: right;">
                <div style="font-weight: bold;">Rating</div>
                <div><h3>${cafe.rating}</h3></div>
                <a href="${cafe.link}" target="_blank" style="display:block; margin-top:10px; color:blue;">Lihat di Maps</a></h3>
              </div>
            `;

            resultContainer.appendChild(resultItem);
        });

    }

    document.getElementById("section-results").scrollIntoView({ behavior: "smooth" });

});


// BACA IMAGE DARI DATASET //
document.addEventListener("DOMContentLoaded", function () {
    const cafeListContainer = document.getElementById("cafeListContainer");

    cafes.forEach((cafe) => {
        const cafeCard = document.createElement("article");
        cafeCard.className = "cafe__card";
        cafeCard.innerHTML = `
        <img src="${cafe.img}" alt="${cafe.nama}" />
        <h3 class="cafe__name">${cafe.nama}</h3>
        <a href="${cafe.link}" class="button cafe__button" target="_blank">Lihat Detail</a>
        `;

        cafeListContainer.appendChild(cafeCard);
    });

    // Fungsi bantu untuk buat nama file gambar dari nama cafe
    function generateImageFilename(nama) {
        const namaBersih = nama
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "")
            .replace(/ /g, "");
        return `${namaBersih}.png`;
    }
});
