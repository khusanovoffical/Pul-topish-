const daromadList = document.getElementById("daromadList");

const ismlar = [
  "Azizbek Tursunov", "Umidjon Raxmatullayev", "Javlon Karimov", "Bekzod Ismoilov",
  "Aziz Jurayev", "Komil Ergashev", "Shohrux Sultonov", "Murod Mirzaev", 
  "Dilshod Qodirov", "Farruh Sobirov", "Diyor Xudoyberganov", "Shoxrux Azimov",
  "Rustam Sultonov", "Odil Qo‘qonov", "Anvar Normurodov", "Abdurahmon Yusupov",
  "Sardor Rahimov", "Eldor Qayumov", "Ilhom Mirzayev", "Mansur Abdulazizov"
  // ... qolgan ismlar
];

function randomPul() {
  return Math.floor(Math.random() * (250000 - 30000 + 1) + 30000);
}

function yangiDaromad() {
  const ism = ismlar[Math.floor(Math.random() * ismlar.length)];
  const pul = randomPul().toLocaleString("uz-UZ");
  const li = document.createElement("li");
  li.textContent = `✅ ${ism} — ${pul} so‘m daromad oldi`;
  daromadList.appendChild(li);

  if (daromadList.children.length > 25) {
    daromadList.removeChild(daromadList.children[0]);
  }
}

// Dastlab 10 ta yozuv chiqsin
for (let i = 0; i < 20; i++) {
  yangiDaromad();
}

// Har 3 sekundda yangi yozuv chiqsin
setInterval(yangiDaromad, 3000);