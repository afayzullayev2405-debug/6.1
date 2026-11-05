// const bugun = new Date();
// console.log(bugun.getDay());

// const d = new Date();

// console.log("Yil:", d.getFullYear());
// console.log("Oy raqami:", d.getMonth() + 1);
// console.log("Kun:", d.getDay());


// const bugun = new Date();

// const haftKunlari = [
//   "Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"
// ];

// const oylar = [
//   "Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust", "Sentyabr","Oktabr","Noyabr","Dekabr"
// ];

// let haftaKuni = haftKunlari[bugun.getDay()];
// let oyNomi = oylar[bugun.getMonth()];
// let sanaKun = String(bugun.getDate()).padStart(2, '0');
// let yil = bugun.getFullYear();

// let natija = `${haftaKuni}, ${oyNomi} ${sanaKun} ${yil}`;
// console.log(natija);

// const bugun = new Date(); 
// const yangiYil = new Date(2027, 0, 1); 
// const farqMillisekund = yangiYil - bugun;
// const birKunMs = 1000 * 60 * 60 * 24;
// const qolganKunlar = Math.ceil(farqMillisekund / birKunMs);
// console.log(`Yangi yilgacha ${qolganKunlar} kun qoldi`);

// let sana = new Date(2026, 11, 5, 20, 32, 50);

// let kun = String(sana.getDate()).padStart(2, "0");
// let oy = String(sana.getMonth()).padStart(2, "0");
// let yil = sana.getFullYear();
// let soat = String(sana.getHours()).padStart(2, "0");
// let daqiqa = String(sana.getMinutes()).padStart(2, "0");
// let aniqSana = yil + "." + oy + "." + kun + " ; " + soat + ":" + daqiqa;
// console.log(aniqSana);

// setTimeout(() => {
//   console.log("Salom, dunyo!");
// }, 2000);

// let hisob = 0;

// const id = setInterval(() => {
//   hisob++;
//   console.log("Tik-tak", hisob);

//   if (hisob === 3) {
//     clearInterval(id);
//   }
// }, 1000);

setTimeout(() => {
    console.log("Bir");
}, 1000);

setTimeout(() => {
    console.log("Ikki");
}, 2000);

setTimeout(() => {
    console.log("Uch");
}, 3000);