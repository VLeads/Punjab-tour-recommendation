import React, { useState } from "react";
import "./styles.css";

import goldenTemple from "./img/Golden-temple.jpg";
import roseGarden from "./img/nehru-rose-garden.jpg";
import wonderland from "./img/wonderland.jpg";
import rockgarden from "./img/rock garden.jpg";
import lohri from "./img/lohri.jpg";
import baisakhi from "./img/baisakhi.jpg";
import hola from "./img/hola-mohalla.jpg";
import daal from "./img/Dal-Makhani.jpg";
import saag from "./img/Saagroti.jpg";
import chicken from "./img/tandoori-chicken.jpg";
import kadhi from "./img/kadhi.jpg";
import train from "./img/train.jpg";
import bus from "./img/bus.jpg";

let database = {
  Places: [
    {
      name: "Golden temple",
      description:
        "The Golden Temple, formally known as Sri Harmandir Sahib, is a Sikh Gurdwara in the city of Amritsar, Punjab, India. It was built as a place of worship for all religions, and is considered the holiest Gurdwara of Sikhism.",
      image: <img src={goldenTemple} alt="goldenTemple" />,
      rating: "10/10"
    },
    {
      name: "Nehru Rose Garden",
      description:
        "Nehru Rose Garden situated in Ludhiana city was established in 1967. This is one of the largest rose garden in asia, spreads over an area of 30 acres, which planted more than 17,000 plants with 1,600 varieties of roses ,which gives a greenery sight .",
      image: <img src={roseGarden} alt="roseGarden" />,
      rating: "7.5/10"
    },
    {
      name: "Wonderland theme park",
      description:
        "Located on the Nakodar Road in Jalandhar is a fun-filled theme park called Wonderland Theme Park. This theme park offers an amazing amalgamation of an amusement park as well as a water park which add to the excitement of the tourists. It is spread across a sprawling area of 11 acres and has a number of thrilling rides that increase the adrenaline rush in the body",
      image: <img src={wonderland} alt="wonderland" />,
      rating: "9/10"
    },
    {
      name: "Rock garden",
      description:
        "Chandigarh Rock Garden is a sculpture garden in Chandigarh, completely built of industrial and home discarded items like bottles, ceramic pots, bangles, broken pipes etc. It is located between the Capitol Complex and Sukhna Lake.",
      image: <img src={rockgarden} alt="rockgarden" />,
      rating: "9.5/10"
    }
  ],
  Festivals: [
    {
      name: "Lohri",
      description:
        "Lohri marks the end of winter, a time when the sun heads back to the North and stays longer each day warming the ground for the new crops soon to be sown. Lohri is always associated with Sikhs as it's their festival",
      image: <img src={lohri} alt="lohri" />,
      rating: "8/10"
    },
    {
      name: "Baisakhi",
      description:
        "Baisakhi is a Harvest festival and like all things Punjabi, it is one that involves the society, is colourful, boisterous and involves food, music and dance.Baisakhi is the Sikh New Year's Day as it is not just a Spring-time harvest festival but also a day that is commemorative of the formation of the Khalsa Panth of warriors under Guru Gobind Singh in 1699.",
      image: <img src={baisakhi} alt="baisakhi" />,
      rating: "9.5/10"
    },
    {
      name: "Hola Mohalla",
      description:
        "Hola Mahalla is an important Indian Sikh festival held in Anandpur Sahib in Punjab which follows Hindu festival of Holi. Unlike festival of Holi, when people playfully throw colored powders on each other, Hola Mahalla is an occasion for the Sikhs to demonstrate their martial skills. Sikhs gather here in large numbers to witness a very impressive and colourful procession of Nihangs, in their traditional attire displaying their skill in the use of arms, horse riding, and other war-like sports",
      image: <img src={hola} alt="hola" />,
      rating: "9.5/10"
    }
  ],
  Food: [
    {
      name: "Sarso ka saag aur Makki ki roti",
      description:
        "Sarson Ka Saag is a popular vegetarian dish from the northern region of the Indian subcontinent. It is made from mustard greens (sarson) and spices such as ginger and garlic. It is often served with makki ki roti. Sarson Ka Saag and makki ki roti is considered a special dish in entire North India. It is eaten only in the winter season.",
      image: <img src={saag} alt="saagroti.jpg" />,
      rating: "9.5/10"
    },
    {
      name: "Tandoori chicken",
      description:
        "Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven.",
      image: <img src={chicken} alt="tandoori chicken" />,
      rating: "10/10"
    },
    {
      name: "Dal Makhani",
      description:
        "Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils (known as Urad dal or Kaali Dal in Hindi) and Kidney Beans (known as Rajma in Hindi).If you love authentic Punjabi food then you are going to love this Dal Makhani even more.  ",
      image: <img src={daal} alt="daal makhani" />,
      rating: "10/10"
    },
    {
      name: "Punjabi kadhi pakode",
      description:
        "Punjabi Kadhi Pakora is one of the most popular North Indian dishes! Deep fried fritters (pakora) are dunked in a yogurt based curry made with besan (gram flour) and spices!",
      image: <img src={kadhi} alt="kadhi pakode" />,
      rating: "8.5/10"
    }
  ],
  Transportation: [
    {
      name: "Trains",
      description:
        "A convenient mode of transportation for people residing in Punjab.Daily lakhs of people travel through trains to their work",
      image: <img src={train} alt="train" />,
      rating: "8/10"
    },
    {
      name: "Buses",
      description:
        "Buses are also a better way to visit all around the punjab at ease.",
      image: <img src={bus} alt="bus" />,
      rating: "9.5/10"
    }
  ]
};

var arrDatabase = Object.keys(database);

export default function App() {
  const [selectedData, setSelectedData] = useState("Places");

  function buttonClickHandler(items) {
    setSelectedData(items);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Punjab Tour</h1>

      <div>
        {arrDatabase.map((items) => {
          return (
            <button
              className="button"
              key={items}
              onClick={() => {
                buttonClickHandler(items);
              }}
            >
              {items}
            </button>
          );
        })}
      </div>

      <section>
        {database[selectedData].map((lists) => {
          return (
            <div className="mainArea" key={lists}>
              <div className="imageArea">
                <img
                  src={lists.image}
                  className="image"
                  alt="actualimage"
                ></img>
              </div>
              <div className="description">
                <h1>{lists.name}</h1>
                <p>{lists.description}</p>
                <h4>Rating: {lists.rating}</h4>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
