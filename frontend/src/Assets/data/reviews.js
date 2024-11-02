const reviews = [
    {
      name: "Atwal",
      rating: 5.0,
      text: "Amazing work done on my 2020 Camry including lights, dashcam and Subwoofer with Amp. He did the job so accurately without even touching the original wiring that I can feel the incredible bass Music system. I recommend him 1000% to everyone and 5 star rating.. Thankyou so much Bhuvnesh bro...",
      date: "2024-10-15"
    },
    {
      name: "Nikhil",
      rating: 5.0,
      text: "Notable: Punctuality • Communication",
      date: "2024-10-12"
    },
    {
      name: "Chris",
      rating: 5.0,
      text: "Very helpful",
      date: "2024-10-06"
    },
    {
      name: "Inderjit",
      rating: 5.0,
      text: "",
      date: "2024-10-06"
    },  
    {
      name: "Tienduc",
      rating: 5.0,
      text: "He's very friendly, knowledgeable and helpful. He's really know what he is doing and will even teach you some cool tricks. Totally worth it",
      date: "2024-10-04"
    },
    {
      name: "Paulo",
      rating: 5.0,
      text: "A professional who actually cares about his business. Definitely recommend. Thanks again!",
      date: "2024-10-03"
    },
    {
      name: "LovePreet",
      rating: 5.0,
      text: "Good work.\n Notable: Punctuality • Communication • Pricing",
      date: "2024-09-27"
    },  
    {
      name: "Nick",
      rating: 5.0,
      text: "Notable: Punctuality • Communication",
      date: "2024-09-25"
    },
    {
      name: "Shawn",
      rating: 5.0,
      text: "Item works great and Bhuvnesh is a meticulous and careful installer. He knows his stuff and did an excellent job - the installation is very clean and professional. Highly recommended!\n Notable: Punctuality • Communication • Pricing • Item Description",
      date: "2024-09-24"
    },
    {
      name: "Vincent",
      rating: 5.0,
      text: "I  Bhuvnesh has been very patient with me. I had another Facebook market installer do my work and really messed up my car. Needless to say Bhuvnesh helped cleaned up the mess and got it working again.He helped me install 4 channel amp, mono amp, sub and speakers. Overall it was a great experience and well knowledged individual. Thank you again!\n Notable: Punctuality • Communication",
      date: "2024-09-18"
    },
    {
      name: "Anmol",
      rating: 5.0,
      text: "He give me best solution\n Notable: Communication",
      date: "2024-09-18"
    },
    {
      name: "Edgar",
      rating: 5.0,
      text: "The seller asked me to put down 50% of the the labor and I sent him the money and accepted it and he arrived on time as what we have agreed for. Very honest and knows what he is doing. Trusted and dependable.\n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-08-31"
    },
    {
      name: "Sheenal",
      rating: 5.0,
      text: "He answered all questions and has great customer service! Provided me with a lot of information with my car play! He definitely knows exactly what he is doing & does his very best to make the installation as clean & perfect possible! I would definitely recommend him to anyone I know & Will be back for any more modifications!",
      date: "2024-08-20"
    },
    {
      name: "Abhinav",
      rating: 5.0,
      text: "He Got the work done on the same day I requested, he was punctual, I got an android system and dashcam installed, his work was professional. Will recommend \n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-08-19"
    },
    {
      name: "Turban Tying",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-08-05"
    },
    {
      name: "Colin",
      rating: 5.0,
      text: "",
      date: "2024-07-19"
    },
    {
      name: "Himmatvir",
      rating: 5.0,
      text: "",
      date: "2024-06-19"
    },
    {
      name: "Elvin Keanne",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-06-19"
    },
    {
      name: "Raoof",
      rating: 5.0,
      text: "Satisfied",
      date: "2024-06-19"
    },
    {
      name: "Thomas",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-06-01"
    },
    {
      name: "Bhinda",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-05-25"
    },
    {
      name: "Mustafa",
      rating: 5.0,
      text: "Notable: Communication · Pricing · Item description",
      date: "2024-05-20"
    },
    {
      name: "Andrew",
      rating: 5.0,
      text: "",
      date: "2024-05-18"
    },
    {
      name: "Tushar",
      rating: 5.0,
      text: "",
      date: "2024-05-13"
    },
    {
      name: "Cassey Antoinette",
      rating: 5.0,
      text: "Notable: Communication",
      date: "2024-05-07"
    },
    {
      name: "Adam",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-05-01"
    },
    {
      name: "Gurbani",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-04-23"
    },
    {
      name: "Brandon",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-04-18"
    },
    {
      name: "Jason",
      rating: 5.0,
      text: "Notable: Punctuality · Communication",
      date: "2024-04-18"
    },
    {
      name: "ziang",
      rating: 5.0,
      text: "Notable: Item description",
      date: "2024-04-14"
    },
    {
      name: "Anthony",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-04-08"
    },
    {
      name: "Tuan",
      rating: 5.0,
      text: "Notable: Punctuality",
      date: "2024-04-04"
    },
    {
      name: "Amit",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-03-29"
    },
    {
      name: "Gary",
      rating: 5.0,
      text: "Notable: Punctuality",
      date: "2024-03-27"
    },
    {
      name: "Paul",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-03-22"
    },
    {
      name: "Chris",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing",
      date: "2024-03-15"
    },
    {
      name: "Dareil",
      rating: 5.0,
      text: "",
      date: "2024-03-03"
    },
    {
      name: "Neal",
      rating: 5.0,
      text: "good \n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-23"
    },
    {
      name: "Simran",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-22"
    },
    {
      name: "AJ",
      rating: 5.0,
      text: "Bhuvnesh is great! \n Notable: Punctuality · Communication · Pricing",
      date: "2024-02-19"
    },
    {
      name: "Suat",
      rating: 5.0,
      text: "",
      date: "2024-02-06"
    },
    {
      name: "Ayush",
      rating: 5.0,
      text: "Very helpful and great communication !!\n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-03"
    },
    {
      name: "Tyson",
      rating: 5.0,
      text: "",
      date: "2024-02-03"
    },
    {
      name: "Naomi",
      rating: 5.0,
      text: "I recommend this seller!\n Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-02"
    },
    {
      name: "Fadi",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing · Item description",
      date: "2024-02-01"
    },
    {
      name: "Husain",
      rating: 5.0,
      text: "",
      date: "2023-12-20"
    },
    {
      name: "Zelin",
      rating: 5.0,
      text: "Notable: Communication · Punctuality · Item description · Pricing",
      date: "2023-12-10"
    },
    {
      name: "Greg",
      rating: 5.0,
      text: "Notable: Punctuality · Communication · Pricing",
      date: "2023-12-04"
    },
  ];
  export default reviews;

