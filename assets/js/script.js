const loading = document.querySelector(".load");

setTimeout(() => {
  loading.classList.add("hidden");
}, 500);

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".explore_btns button");
  const image = document.querySelector(".explore_img img");
  const title = document.querySelector(".content_left h1");
  const description = document.querySelector(".content_left p");

  const cityData = [
    {
      id: 1,
      img: "./assets/img/NewYork.jpg",
      title: "New York",
      desc: "New York – dunyoning eng katta va eng rang-barang shahri, iqtisodiy va madaniy markaz, baland binolar, Broadway, san'at, moda, va ko'plab sayyohlik joylari bilan mashhur.",
    },
    {
      id: 2,
      img: "https://tinder.com/static/build/build-ssg/static/losAngeles-78312a660fff986175275801bd1f00db.jpg",
      title: "Kaliforniya",
      desc: "Kaliforniya – quyoshli iqlimi, ajoyib plyajlari, san'at va texnologiya markazlari, go'zal tog'lar, va vinolar bilan mashhur, dunyodagi eng yirik iqtisodiy hududlardan biri.",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/e9/84/fc/e984fcbad9a54063121eda1cd176f8ce.jpg",
      title: "Alyaska",
      desc: "Alyaska – tabiatning go'zalligi, muzliklar, tog'lar, yovvoyi hayot, va keng va ochiq manzaralar bilan mashhur, Shimoliy Amerikadagi eng katta va eng yiroq shtat.",
    },
    {
      id: 4,
      img: "https://cdn.getyourguide.com/img/tour/6454709f56918.jpeg/148.jpg",
      title: "Sidney",
      desc: "Sidney – Avstraliyaning eng yirik shahri, go'zal plyajlari, mashhur Sidney opera teatri, port va ko'prigi bilan tanilgan, rang-barang madaniyat va tabiatni birlashtirgan joy.",
    },
    {
      id: 5,
      img: "https://cdn.iportal.ru/news/2015/99/preview/ef892fb599e1a088290ec8c242893cad0d7c4dc4_1600_900_c.jpg",
      title: "Dubay",
      desc: "Dubay – zamonaviy arxitektura, eng baland binolar, qumli plyajlar, luxus do'konlar, va boy madaniyat bilan mashhur, Fors ko'rfazida joylashgan jahondagi eng rivojlangan shaharlardan biri.",
    },
    {
      id: 6,
      img: "https://cdn.getyourguide.com/img/tour/e470cc776d83cc31.jpeg/145.jpg",
      title: "London",
      desc: "London – tarixiy obidalar, zamonaviy madaniyat, dunyoga mashhur muzeylar, teatrlar, va barjalar bilan boy, Britaniya poytaxti, global iqtisodiy va siyosiy markaz.",
    },
    {
      id: 7,
      img: "https://avatars.mds.yandex.net/i?id=8a8c23ef81d1e3a2d7239ea7f8a9664d_l-5230461-images-thumbs&n=13",
      title: "Tokyo",
      desc: "Tokyo – Yaponiyaning poytaxti, texnologiya, madaniyat, qadimiy va zamonaviy arxitektura, rang-barang ko'chalari, ajoyib restoranlari va innovatsion texnologiyalari bilan dunyoning eng yirik shaharlaridan biri.",
    },
    {
      id: 8,
      img: "https://cdn.getyourguide.com/img/tour/64633802701e6.jpeg/148.jpg",
      title: "Dehli",
      desc: "Dehli – Hindistonning poytaxti, tarixiy obidalar, rang-barang bozorlari, madaniy boyliklari va turli xil diniy joylari bilan mashhur, Sharq va G'arbning uyg'unlashgan shahri.",
    },
  ];

  let city = null;
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      city = cityData.find((c) => c.id == this.id);
      console.log(city);

      if (city) {
        image.src = city.img;
        title.textContent = city.title;
        description.textContent = city.desc;
      }
    });
  });
});
