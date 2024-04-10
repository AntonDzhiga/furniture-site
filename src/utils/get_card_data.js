import firstPhoto from "../assets/catalog/kitchen/1.png"; 
import secondPhoto from "../assets/catalog/kitchen/2.png"; 
import thirdPhoto from "../assets/catalog/kitchen/3.png"; 
import fourthPhoto from "../assets/catalog/kitchen/4.png"; 
import fifthdPhoto from "../assets/catalog/kitchen/5.jpg"; 
import sixthPhoto from "../assets/catalog/kitchen/6.webp"; 
import seventhPhoto from "../assets/catalog/kitchen/7.jpg"; 
import eighthPhoto from "../assets/catalog/kitchen/8.jpg"; 
import ninthPhoto from "../assets/catalog/kitchen/9.jpg"; 
import tenthPhoto from "../assets/catalog/kitchen/10.jpg"; 
import eleventhPhoto from "../assets/catalog/kitchen/11.jpg"; 
import twelfthPhoto from "../assets/catalog/kitchen/12.jpg"; 
import thirteenthPhoto from "../assets/catalog/wardrobes/1.jpg"; 
import seventeenthPhoto from "../assets/catalog/wardrobes/3.png"; 
import eighteenthPhoto from "../assets/catalog/wardrobes/5.png"; 
import nineteenthPhoto from "../assets/catalog/wardrobes/4.png"; 
import twentiethPhoto from "../assets/catalog/wardrobes/6.png"; 
import twentyFirstPhoto from "../assets/catalog/wardrobes/7.jpg"; 

const kitchen = [
  {
    id: 1,
    name: "Кухня: Літня свіжість",
    img: firstPhoto,
    price: 10280,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 2,
    name: "Кухня: Мармурова гармонія",
    img: secondPhoto,
    price: 8650,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 3,
    name: "Кухня: Сучасний мінімалізм",
    img: thirdPhoto,
    price: 12530,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 4,
    name: "Кухня: Затишний рустік",
    img: fourthPhoto,
    price: 7850,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 5,
    name: "Кухня: Лаконічна елегантність",
    img: fifthdPhoto,
    price: 13840,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 6,
    name: "Кухня: Простора утопія",
    img: sixthPhoto,
    price: 6580,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 7,
    name: "Кухня: Еклектичне натхнення",
    img: seventhPhoto,
    price: 14690,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 8,
    name: "Кухня: Сучасна кухня у скандинавському стилі",
    img: eighthPhoto,
    price: 9640,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 9,
    name: "Кухня: Індустріальна естетика",
    img: ninthPhoto,
    price: 20850,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 10,
    name: "Кухня: Арт-деко ретро",
    img: tenthPhoto,
    price: 6200,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 11,
    name: "Кухня: Грандіозна кухня з островом",
    img: eleventhPhoto,
    price: 8600,
    product: "опис",
    category: "Кухня"
  },
  {
    id: 12,
    name: "Кухня: Традиційна атмосфера",
    img: twelfthPhoto,
    price: 15850,
    product: "опис",
    category: "Кухня"
  }
];

const wardrobes = [
    {
      id: 1,
      name: "Шафа-купе: Сучасна елегантність",
      img: thirteenthPhoto,
      price: 8640,
      product: "опис",
      category: "Шафи-купе"
    },
    {
      id: 2,
      name: "Шафа-купе: Мінімалістичний шик",
      img: firstPhoto,
      price: 7680,
      product: "опис",
      category: "Шафи-купе"
    },
    {
      id: 3,
      name: "Шафа-купе: Лаконічна модерність",
      img: seventeenthPhoto,
      price: 6520,
      product: "опис",
      category: "Шафи-купе"
    },
    {
      id: 4,
      name: "Шафа-купе: Рустік еко",
      img: eighteenthPhoto,
      price: 6430,
      product: "опис",
      category: "Шафи-купе"
    },
    {
      id: 5,
      name: "Шафа-купе: Арт-деко класика",
      img: nineteenthPhoto,
      price: 7560,
      product: "опис",
      category: "Шафи-купе"
    },
    {
      id: 6,
      name: "Шафа-купе: Скандинавський стиль",
      img: twentiethPhoto,
      price: 4520,
      product: "опис",
      category: "Шафи-купе"
    },
    {
      id: 7,
      name: "Шафа-купе: Вінтажний шарм",
      img: twentyFirstPhoto,
      price: 6410,
      product: "опис",
      category: "Шафи-купе"
    }
];

export default function getData(category) {
  return new Promise((resolve, reject) => {
    if (category === "kitchen") {
      resolve(kitchen);
    } else if (category === "wardrobes") {
      resolve(wardrobes);
    } else {
      reject("Category not found");
    }
  });
}
