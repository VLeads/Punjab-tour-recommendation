import React, { useState } from "react";

import "./styles.css";

let database = {
  Places: [
    {
      name: "Golden temple",
      description:
        "The Golden Temple, formally known as Sri Harmandir Sahib, is a Sikh Gurdwara in the city of Amritsar, Punjab, India. It was built as a place of worship for all religions, and is considered the holiest Gurdwara of Sikhism.",
      image:
        "https://images.unsplash.com/photo-1583821017783-4333717df070?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      rating: "10/10"
    },
    {
      name: "Nehru Rose Garden",
      description:
        "Nehru Rose Garden situated in Ludhiana city was established in 1967. This is one of the largest rose garden in asia, spreads over an area of 30 acres, which planted more than 17,000 plants with 1,600 varieties of roses ,which gives a greenery sight .",
      image:
        "https://res.cloudinary.com/ch/hbimages/desktop/1501072429090-nehru-rose-garden.jpg",
      rating: "7.5/10"
    },
    {
      name: "Wonderland theme park",
      description:
        "Located on the Nakodar Road in Jalandhar is a fun-filled theme park called Wonderland Theme Park. This theme park offers an amazing amalgamation of an amusement park as well as a water park which add to the excitement of the tourists. It is spread across a sprawling area of 11 acres and has a number of thrilling rides that increase the adrenaline rush in the body",
      image:
        "https://content3.jdmagicbox.com/comp/jalandhar/w4/0181px181.x181.110315224622.p5w4/catalogue/wonderland-amusement-park-pvt-ltd-lambra-jalandhar-water-parks-12epydsy8f.jpg",
      rating: "9/10"
    },
    {
      name: "Rock garden",
      description:
        "Chandigarh Rock Garden is a sculpture garden in Chandigarh, completely built of industrial and home discarded items like bottles, ceramic pots, bangles, broken pipes etc. It is located between the Capitol Complex and Sukhna Lake.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Waterfall_at_Rock_Garden%2C_Chandigarh.jpg",
      rating: "9.5/10"
    }
  ],
  Festivals: [
    {
      name: "Lohri",
      description:
        "Lohri marks the end of winter, a time when the sun heads back to the North and stays longer each day warming the ground for the new crops soon to be sown. Lohri is always associated with Sikhs as it's their festival",
      image: "https://www.thestatesman.com/wp-content/uploads/2019/12/8.jpg",
      rating: "8/10"
    },
    {
      name: "Baisakhi",
      description:
        "Baisakhi is a Harvest festival and like all things Punjabi, it is one that involves the society, is colourful, boisterous and involves food, music and dance.Baisakhi is the Sikh New Year's Day as it is not just a Spring-time harvest festival but also a day that is commemorative of the formation of the Khalsa Panth of warriors under Guru Gobind Singh in 1699.",
      image:
        "https://akm-img-a-in.tosshub.com/aajtak/images/story/201704/when_is_baisakhi_in_2016_1492058109_749x421.jpeg?size=1200:675",
      rating: "9.5/10"
    },
    {
      name: "Hola Mohalla",
      description:
        "Hola Mahalla is an important Indian Sikh festival held in Anandpur Sahib in Punjab which follows Hindu festival of Holi. Unlike festival of Holi, when people playfully throw colored powders on each other, Hola Mahalla is an occasion for the Sikhs to demonstrate their martial skills. Sikhs gather here in large numbers to witness a very impressive and colourful procession of Nihangs, in their traditional attire displaying their skill in the use of arms, horse riding, and other war-like sports",
      image: "http://hindustanvoyages.com/TourPackage/holla-mohlla.jpg",
      rating: "9.5/10"
    }
  ],
  Food: [
    {
      name: "Sarso ka saag aur Makki ki roti",
      description:
        "Sarson Ka Saag is a popular vegetarian dish from the northern region of the Indian subcontinent. It is made from mustard greens (sarson) and spices such as ginger and garlic. It is often served with makki ki roti. Sarson Ka Saag and makki ki roti is considered a special dish in entire North India. It is eaten only in the winter season.",
      image: "https://im.whatshot.in/img/2019/Dec/cover-1577170373.png",
      rating: "9.5/10"
    },
    {
      name: "Tandoori chicken",
      description:
        "Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven.",
      image:
        "https://res.cloudinary.com/mealthy1/image/upload/ar_16:11,c_fill,f_auto,h_600,q_auto:best,w_800/v1567710256/cms_recipe_featured_image/wbqpuatbgctugjdzjmee.jpg",
      rating: "10/10"
    },
    {
      name: "Dal Makhani",
      description:
        "Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils (known as Urad dal or Kaali Dal in Hindi) and Kidney Beans (known as Rajma in Hindi).If you love authentic Punjabi food then you are going to love this Dal Makhani even more.  ",
      image:
        "https://shwetainthekitchen.com/wp-content/uploads/2019/11/IMG_6920_1-scaled.jpg",
      rating: "10/10"
    },
    {
      name: "Punjabi kadhi pakode",
      description:
        "Punjabi Kadhi Pakora is one of the most popular North Indian dishes! Deep fried fritters (pakora) are dunked in a yogurt based curry made with besan (gram flour) and spices!",
      image:
        "https://mytastycurry.com/wp-content/uploads/2020/06/Kadhi-pakora-1-500x500.jpg",
      rating: "8.5/10"
    }
  ],
  Transportation: [
    {
      name: "Trains",
      description:
        "A convenient mode of transportation for people residing in Punjab.Daily lakhs of people travel through trains to their work",
      image:
        "https://lh3.googleusercontent.com/proxy/mWQQJU0YcU_4naANanE6FWKXQUaRr3mf3iC57PeLTebb8Q_b1ytaSBShOgEzYhPrjYr3fMeOwONMJmQnb5ud41H-_AwkXxkIAi0YDduiT8FahL4",
      rating: "8/10"
    },
    {
      name: "Buses",
      description:
        "Buses are also a better way to visit all around the punjab at ease.",
      image:
        "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/27/Pictures/covid-19-lockdown-in-bihar_da3237fe-9ff9-11ea-88a1-96031f43cf2a.jpg",
      rating: "9.5/10"
    },
    {
      name: "Taxi",
      description:
        "Enojoy the travelling journey a little deep, why not to use a taxi for it !!",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/03/TAXI.jpg",
      rating: "9/10"
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
      <nav className="navigation">
        <h1 style={{ fontSize: "2rem", color: "red" }}>Punjab Tour</h1>
      </nav>
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
            <div className="mainArea">
              <div className="imageArea">
                <img src={lists.image} className="image" alt="imageHere"></img>
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

      <footer>
        <h3>
          <span style={{ color: "rgb(56, 79, 76)" }}>Designed by{"  "}</span>
          <a
            style={{ color: "red", textDecoration: "none" }}
            href="https://vishalkumar.netlify.app"
          >
            Vishal Kumar
          </a>
        </h3>
      </footer>
    </div>
  );
}
