import React, { useEffect, useState } from 'react';
import style from "../style/card.module.css";
import getData from '../utils/get_card_data';

const Card = ({ category }) => {
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [usdExchangeRate, setUsdExchangeRate] = useState(null);

  useEffect(() => {
    async function fetchDataForCard() {
      try {
        const data = await getData(category);
        setCardData(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchUsdExchangeRate() {
      try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const data = await response.json();
        const usdRate = data.find(rate => rate.cc === 'USD').rate;
        setUsdExchangeRate(usdRate);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDataForCard();
    fetchUsdExchangeRate();
  }, [category]);

  const convertToUsd = (priceInUah) => {
    if (usdExchangeRate) {
      return (priceInUah / usdExchangeRate).toFixed(2);
    } else {
      return "Курс долара не визначено";
    }
  };

  const totalPages = Math.ceil(cardData.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className={style.cartContainer}>
        {cardData
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item) => (
            <div className={style.cartBox} key={item.id}>
              <img src={item.img} alt="kitchen" />
              <h1 className={style.cartBoxTitle}>{item.name}</h1>
              <p className={style.description}>Lorem ipsum dolor sit amet. {item.product}</p>
              <p className={style.description}
              style={{fontWeight:"bold"}}>Ціна в доларах: {convertToUsd(item.price)} USD</p>
              <button className={style.buttonCatalog}>{item.price} грн</button>
            </div>
          ))}
      </div>
      <div className={style.pagination}>
        <ul className={style.horizontalPagination}>
          {pages.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={currentPage === pageNumber ? style.active : ''}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
