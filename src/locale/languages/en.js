const content = {
  en: {
    locale: {
      header: {
        nav: {
          home: 'Home',
          about: 'About',
          skills: 'Skills',
          works: 'Works',
          contact: 'Contact',
        },
        resume: {
          name: 'Resume',
          downloadName: 'tiago-leite-resume',
          downloadMessage: 'Downloading resume',
        },
      },
      homeSection: {
        intro: "Hello, I'm Tiago Leite.",
        welcome: 'Welcome to my portfolio',
        smallDescription: "I'm a",
        animatedTexts: {
          textOne: 'front-end developer',
          textTwo: 'web developer',
          textThree: 'CSS wizard',
          textFour: 'React developer',
          textFive: 'JavaScript ninja',
          textSix: 'UI engineer',
        },
        description: "I'm a self-taught and motivated front-end developer based in Brazil.",
        buttons: {
          work: 'View Work',
          hire: 'Contact',
        },
      },
      aboutSection: {
        sectionName: 'About Me',
        description:
          'As a passionate developer equipped with an impressive array of skills, I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. Beyond the lines of code, I am a problem solver at heart. Challenges are not roadblocks but opportunities to innovate and find elegant solutions.',
      },
      skillsSection: {
        sectionName: 'Tech Stack',
        showMore: 'Show More',
        showLess: 'Show Less',
      },
      worksSection: {
        sectionName: 'Works',
        intro:
          'Amazing Front-End Experiences: Merging Design and Functionality. Here are some examples of my work.',
        workElement: {
          tools: 'Tools',
          buttons: {
            demo: 'Live Demo',
            code: 'View Code',
          },
          featured: 'Featured Project',
        },
        cineflix: {
          name: 'Cineflix',
          description:
            'Database of movies mimicking the look of Netflix, it has integration with Firebase to create an account, login and save the movies to favorites.',
          alt: 'cineflix website of movie and series information',
        },
        classicGames: {
          name: 'Classic Games',
          description:
            'Website of my favorite classic games that I recreated in a more simplified way using HTML, CSS and JavaScript. My goal with this is to learn the logic and the syntax of JavaScript.',
          alt: 'classic games repository website',
        },
        noir: {
          name: 'Noir',
          description:
            'Noir is a 100% responsive barbershop website, with dark-mode and 4 pages made in HTML, LESS and JavaScript, without the use of any frameworks.',
          alt: 'noir barbershop website',
        },
        lasso: {
          name: 'Lasso',
          description:
            'A complete e-commerce where users can create an account and login, add products to cart, shop, filter products by category, name, brand, see the order list and much more.',
          alt: 'lasso online store',
        },
        hypeCamper: {
          name: 'Hype Camper',
          description:
            'Hype Camper is a full stack CRUD website where Node, Express and MongoDB have been integrated into the front-end. Users can create, review and manage campgrounds.',
          alt: 'hype camper camping locations website',
        },
      },
      contactSection: {
        sectionName: 'Contact',
        intro:
          'To contact me, fill out the form below, or if you prefer, contact me via LinkedIn or send an email. I am available for hire and open to any ideas of cooperation, also as a freelancer.',
        placeholders: {
          placeholderName: 'Name',
          placeholderMessage: 'Message',
        },
        button: 'Send',
      },
      toast: {
        contact: {
          success: 'Message sent successfully!',
          error: 'Error! Please try again later.',
        },
      },
      footer: 'source',
    },
  },
};

export { content };
