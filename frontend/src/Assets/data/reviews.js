const reviews = [
  {
    name: "Bhullar",
    source:"Facebook Marketplace",
    rating: 5.0,
    text: "",
    date: "2024-11-15"
  },
  {
    name: "Mohsin",
    source:"Facebook Marketplace",
    rating: 5.0,
    text: "I recently had Mr. Bhuvnesh install a CarPlay system in my van, and I couldn’t be more impressed with his service. The installation was flawless—no dangling wires, everything was neatly tucked away, and the job looked incredibly professional. What really stood out was his attention to detail and honesty. He took the time to explain everything thoroughly and made sure I was completely satisfied with the setup. Highly recommend his services for anyone looking to upgrade their vehicle’s tech! \n Notable: • Pricing • Item Description • Punctuality • Communication",
    date: "2024-11-15"
  },
  {
    name: "Lili",
    source:"Facebook Marketplace",
    rating: 4.0,
    text: "Notable: • Item Description",
    date: "2024-11-15"
  },
  {
    name: "Matheus",
    source:"Facebook Marketplace",
    rating: 5.0,
    text: "Bhuvnesh did an awesome job installing my new speakers and sound deadening. My car is so quiet now, and the sound quality is incredible-way better than I expected! He was super professional, paid attention to every detail, and really knew what he was doing. I'm beyond happy with the results. Highly recommend him! \n Notable: • Punctuality • Communication • Pricing • Item Description",
    date: "2024-11-14"
  },
  {
    name: "Tony",
    source:"Facebook Marketplace",
    rating: 5.0,
    text: "Bhuvnesh was great!! Very knowledgeable. Always stayed in contact with me. Explained what he was going to do. No hidden fees or extras. Product was exactly what he said it was. Clean and professional install as if it was factory done. Took the time to go over and explain the features. Thank you!! \n Notable: • Punctuality • Communication • Pricing • Item Description",
    date: "2024-11-03"
  },
  {
    name: "Brian",
    source:"Facebook Marketplace",
    rating: 5.0,
    text: "He was extremely helpful and professional. I would work with him again! \n Notable: • Communication",
    date: "2024-10-31"
  },
  {
    name: "Yasir",
    source:"Facebook Marketplace",
    rating: 5.0,
    text: "Amazing customer service from Bhuvnesh!!",
    date: "2024-10-30"
  },
  {
    name: "Dom",
    source:"Facebook Marketplace",
    rating: 1.0,
    text: "The listing said custom headlights and tailights but what he had to offer is just stock ones plus they were way overpriced I could buy the same thing or even actual custom ones for half the price online",
    date: "2024-10-18",
    replies: [
      {
        name: "Support Team",
        text: "Customer was reached out by the support team but no response was given by the customer.",
        date: "2024-10-19"
      }
    ]
  },
    {
      name: "Atwal",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Amazing work done on my 2020 Camry including lights, dashcam and Subwoofer with Amp. He did the job so accurately without even touching the original wiring that I can feel the incredible bass Music system. I recommend him 1000% to everyone and 5 star rating.. Thankyou so much Bhuvnesh bro...",
      date: "2024-10-15"
    },
    {
      name: "Nikhil",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: • Punctuality • Communication",
      date: "2024-10-12"
    },
    {
      name: "Chris",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Very helpful",
      date: "2024-10-06"
    },
    {
      name: "Inderjit",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2024-10-06"
    },  
    {
      name: "Tienduc",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "He's very friendly, knowledgeable and helpful. He's really know what he is doing and will even teach you some cool tricks. Totally worth it",
      date: "2024-10-04"
    },
    {
      name: "Paulo",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "A professional who actually cares about his business. Definitely recommend. Thanks again!",
      date: "2024-10-03"
    },
    {
      name: "LovePreet",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Good work.\n Notable: Punctuality • Communication • Pricing",
      date: "2024-09-27"
    },  
    {
      name: "Nick",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality • Communication",
      date: "2024-09-25"
    },
    {
      name: "Shawn",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Item works great and Bhuvnesh is a meticulous and careful installer. He knows his stuff and did an excellent job - the installation is very clean and professional. Highly recommended!\n Notable: Punctuality • Communication • Pricing • Item Description",
      date: "2024-09-24"
    },
    {
      name: "Vincent",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "I  Bhuvnesh has been very patient with me. I had another Facebook market installer do my work and really messed up my car. Needless to say Bhuvnesh helped cleaned up the mess and got it working again.He helped me install 4 channel amp, mono amp, sub and speakers. Overall it was a great experience and well knowledged individual. Thank you again!\n Notable: Punctuality • Communication",
      date: "2024-09-18"
    },
    {
      name: "Anmol",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "He give me best solution\n Notable: Communication",
      date: "2024-09-18"
    },
    {
      name: "Edgar",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "The seller asked me to put down 50% of the the labor and I sent him the money and accepted it and he arrived on time as what we have agreed for. Very honest and knows what he is doing. Trusted and dependable.\n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-08-31"
    },
    {
      name: "Sheenal",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "He answered all questions and has great customer service! Provided me with a lot of information with my car play! He definitely knows exactly what he is doing & does his very best to make the installation as clean & perfect possible! I would definitely recommend him to anyone I know & Will be back for any more modifications!",
      date: "2024-08-20"
    },
    {
      name: "Abhinav",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "He Got the work done on the same day I requested, he was punctual, I got an android system and dashcam installed, his work was professional. Will recommend \n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-08-19"
    },
    {
      name: "Turban Tying",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-08-05"
    },
    {
      name: "Colin",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2024-07-19"
    },
    {
      name: "Himmatvir",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2024-06-19"
    },
    {
      name: "Elvin Keanne",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-06-19"
    },
    {
      name: "Raoof",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Satisfied",
      date: "2024-06-19"
    },
    {
      name: "Thomas",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-06-01"
    },
    {
      name: "Bhinda",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-05-25"
    },
    {
      name: "Mustafa",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Communication · Pricing · Item description",
      date: "2024-05-20"
    },
    {
      name: "Andrew",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2024-05-18"
    },
    {
      name: "Tushar",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2024-05-13"
    },
    {
      name: "Cassey Antoinette",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Communication",
      date: "2024-05-07"
    },
    {
      name: "Adam",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-05-01"
    },
    {
      name: "Gurbani",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-04-23"
    },
    {
      name: "Brandon",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Was able to meet in a public area, helped to guide me as I'm from out of town and was very accommodating \n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-04-18"
    },
    {
      name: "Jason",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication",
      date: "2024-04-18"
    },
    {
      name: "ziang",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Item description",
      date: "2024-04-14"
    },
    {
      name: "Anthony",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-04-08"
    },
    {
      name: "Tuan",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality",
      date: "2024-04-04"
    },
    {
      name: "Amit",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-03-29"
    },
    {
      name: "Gary",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality",
      date: "2024-03-27"
    },
    {
      name: "Paul",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-03-22"
    },
    {
      name: "Chris",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing",
      date: "2024-03-15"
    },
    {
      name: "Dareil",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2024-03-03"
    },
    {
      name: "Neal",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "good \n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-23"
    },
    {
      name: "Simran",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-22"
    },
    {
      name: "AJ",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Bhuvnesh is great! \n Notable: Punctuality · Communication · Pricing",
      date: "2024-02-19"
    },
    {
      name: "Suat",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2024-02-06"
    },
    {
      name: "Ayush",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Very helpful and great communication !! \n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-03"
    },
    {
      name: "Tyson",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2024-02-03"
    },
    {
      name: "Naomi",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "I recommend this seller! \n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-02"
    },
    {
      name: "Fadi",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-01"
    },
    {
      name: "Husain",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2023-12-20"
    },
    {
      name: "Zelin",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Communication · Punctuality · Item description · Pricing",
      date: "2023-12-10"
    },
    {
      name: "Greg",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing",
      date: "2023-12-04"
    },
    {
      name: "Nicole",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Pricing ·Item description",
      date: "2023-11-24"
    },
    {
      name: "Travis",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Communication · Pricing ·Item description",
      date: "2023-10-14"
    },
    {
      name: "Alec",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Excellent customer service \n Notable: Punctuality · Communication · Pricing ·Item description",
      date: "2023-10-09"
    },
    {
      name: "Connor",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Communication",
      date: "2023-10-03"
    },
    {
      name: "Shawn",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing ·Item description",
      date: "2023-10-02"
    },
    {
      name: "Jason",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2023-09-26"
    },
    {
      name: "Jeremy",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Pricing",
      date: "2023-09-06"
    },
    {
      name: "Mariusz",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Communication · Punctuality · Item description · Pricing",
      date: "2023-09-01"
    },
    {
      name: "Adam",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Super knowledge, friendly answers all my dumb questions tonnes of patience, quick tidy install works perfectly better than expected. One of the best installers I have ever had work on my electronics!! \n Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-09-01"
    },
    {
      name: "Alessandro",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-08-31"
    },
    {
      name: "Anmol",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: Communication · Punctuality · Item description · Pricing",
      date: "2023-08-27"
    },
    {
      name: "Bharath",
      source:"Facebook Marketplace",
      rating: 1.0,
      text: "Instead of respond to customer queries, he just judge others by their questions and use abusive words.",
      date: "2023-08-27"
    },
    {
      name: "Navraj",
      source:"Facebook Marketplace",
      rating: 1.0,
      text: "",
      date: "2023-08-26"
    },
    {
      name: "Kane",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Communication",
      date: "2023-08-14"
    },
    {
      name: "Nawapon",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Arrive on time honestly my first time doing the lights, and it turn out amazing!. Definitely will do more on my door for next time. Honestly worth the price, awesome service aswell! \n Notable: · Communication · Punctuality · Pricing",
      date: "2023-08-13"
    },
    {
      name: "Brian",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2023-07-25"
    },
    {
      name: "Damion",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2023-06-30"
    },
    {
      name: "Ange",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Item description",
      date: "2023-06-18"
    },
    {
      name: "Gagan",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Pricing",
      date: "2023-06-16"
    },
    {
      name: "Andrianne",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "He was very nice, and knew what he was doing. First time getting something on Facebook market and he was able to help me out on fixing my screen in my car. \n I recommend him if you want the job done fast and efficiently. \n Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-06-03"
    },    {
      name: "Aman",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "best service provided helped me find out what i actually needed thanks \n Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-05-29"
    },
    {
      name: "Andrew",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "On time, on budget and did what he said he would!",
      date: "2023-05-22"
    },
    {
      name: "Labinot",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-05-17"
    },
    {
      name: "Amine",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-05-13"
    },
    {
      name: "Michael",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2023-04-25"
    },
    {
      name: "Jamie",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-03-31"
    },
    {
      name: "Fahmid",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality",
      date: "2023-02-22"
    },
    {
      name: "Quazi",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-02-05"
    },
    {
      name: "Harman",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-01-29"
    },
    {
      name: "Taylor",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2023-01-11"
    },
    {
      name: "Karan",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication",
      date: "2023-01-09"
    },
    {
      name: "Gerry",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2022-11-10"
    },
    {
      name: "Uday",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2022-09-22"
    },
    {
      name: "Lili",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2022-09-08"
    },
    {
      name: "Gurjaap",
      source:"Facebook Marketplace",
      rating: 1.0,
      text: "",
      date: "2022-09-08"
    },
    {
      name: "Jaspreet Kaur",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2022-07-28"
    },
    {
      name: "Finish",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2022-07-10"
    },
    {
      name: "Abhishek",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2022-06-17"
    },
    {
      name: "Satinder",
      source:"Facebook Marketplace",
      rating: 1.0,
      text: "",
      date: "2022-03-06"
    },
    {
      name: "Lakhbir",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2022-01-02"
    },
    {
      name: "Hazin",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2021-11-21"
    },
    {
      name: "Vincet",
      source:"Facebook Marketplace",
      rating: 1.0,
      text: "",
      date: "2021-11-08"
    },
    {
      name: "Yuri",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Item description",
      date: "2021-10-03"
    },
    {
      name: "Mohamed",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2021-05-28"
    },
    {
      name: "Murtaza",
      source:"Facebook Marketplace",
      rating: 1.0,
      text: "",
      date: "2021-05-16"
    },
    {
      name: "Nikos",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2021-05-01"
    },
    {
      name: "Amit",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "",
      date: "2021-04-29"
    },
    {
      name: "Arvind",
      source:"Facebook Marketplace",
      rating: 5.0,
      text: "Notable: · Punctuality · Communication · Pricing · Item description",
      date: "2021-04-10"
    },
  ];
 
export default reviews;

