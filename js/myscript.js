const { createApp } = Vue

createApp({
  data() {
    return {
      // NAVBAR
      attivita: {
        nome: "Cinemato",
        logo: "./img/header/logo.svg"
      },

      // dati link centrali navbar
      navbarLists: [
        {
          titolo: "HOME",
          dropdownMenu: false
        },
        {
          titolo: "BLOG",
          dropdownMenu: false
        },
        {
          titolo: "PAGES",
          dropdownMenu: true,
          // showDropdown
          showDropDownMenu: false,
          // dato solo in caso di lista dropdown
          dropdownItems: [
            {
              nome: "SERVICES",
              // dato legato al passaggio del mouse per l'hover
              hovered: false
            },
            {
              nome: "OUR WORK FLOW",
              // dato legato al passaggio del mouse per l'hover
              hovered: false
            },
            {
              nome: "VIDEO THUMBNAIL TYPE",
              // dato legato al passaggio del mouse per l'hover
              hovered: false
            }
          ]
        },
        {
          titolo: "ABOUT",
          dropdownMenu: false
        },
        {
          titolo: "CONTACTS",
          dropdownMenu: false
        },
        {
          titolo: "GALLERY",
          dropdownMenu: false
        },
        {
          titolo: "SHOP",
          dropdownMenu: true,
          // showDropdown
          showDropDownMenu: false,
          // dato solo in caso di lista dropdown
          dropdownItems: [
            {
              nome: "SERVICES",
              // dato legato al passaggio del mouse per l'hover
              hovered: false
            },
            {
              nome: "OUR WORK FLOW",
              // dato legato al passaggio del mouse per l'hover
              hovered: false
            },
            {
              nome: "VIDEO THUMBNAIL TYPE",
              // dato legato al passaggio del mouse per l'hover
              hovered: false
            }
          ]
        }
      ],

      // dati per le icone social nella navbar
      socialUtilities: [
        {
          nome: "facebook",
          logo: "./img/header/logo-facebook.svg"
        },
        {
          nome: "twitter",
          logo: "./img/header/logo-twitter.svg"
        },
        {
          nome: "youtube",
          logo: "./img/header/logo-youtube.svg"
        },
        {
          nome: "instagram",
          logo: "./img/header/logo-instagram.svg"
        }
      ],

      // PELICULA STUDIO
      abilities: [
        {
          image: "./img/pelicula-studio/01-cinepresa.svg",
          type: "cinepresa",
          title: "ARRAY OF EQUIPMENT",
          text: "Lorem ipsum dolor amet, consectetur adipiscing. Pellenter ultricies justo tellus."
        },
        {
          image: "./img/pelicula-studio/02-3D-glasses.svg",
          type: "3D-glasses",
          title: "NEW TECHNOLOGIES",
          text: "Lorem ipsum dolor amet, consectetur adipiscing. Pellenter ultricies justo tellus."
        },
        {
          image: "./img/pelicula-studio/03-masks.svg",
          type: "masks",
          title: "VERSATILE ACTORS",
          text: "Lorem ipsum dolor amet, consectetur adipiscing. Pellenter ultricies justo tellus."
        },
        {
          image: "./img/pelicula-studio/04-sedia-director.svg",
          type: "sedia-director",
          title: "TOP DIRECTORS",
          text: "Lorem ipsum dolor amet, consectetur adipiscing. Pellenter ultricies justo tellus."
        },
        {
          image: "./img/pelicula-studio/05-ciak.svg",
          type: "ciak",
          title: "MINUTE EDITING",
          text: "Lorem ipsum dolor amet, consectetur adipiscing. Pellenter ultricies justo tellus."
        },
        {
          image: "./img/pelicula-studio/06-pellicola.svg",
          type: "pellicola",
          title: "VERSATILE ACTORS",
          text: "Lorem ipsum dolor amet, consectetur adipiscing. Pellenter ultricies justo tellus."
        }
      ],

      // YOUR WATCHLIST
      movies: [
        {
          image: "./img/your-watchlist/01-your-watchlist.jpg",
          title: "SEVENTEENTH SUMMER",
          type: "Commercial, Music Video"
        },
        {
          image: "./img/your-watchlist/02-your-watchlist.jpg",
          title: "A MESSAGE TO SPACE",
          type: "Short Film"
        },
        {
          image: "./img/your-watchlist/03-your-watchlist.jpg",
          title: "THE MOST BEAUTIFUL THING",
          type: "Music Video"
        },
        {
          image: "./img/your-watchlist/04-your-watchlist.jpg",
          title: "PERMISSION TO SPEAK",
          type: "Documentary"
        },
        {
          image: "./img/your-watchlist/05-your-watchlist.jpg",
          title: "EXPLORE OUR SPACE",
          type: "Film Noir"
        },
        {
          image: "./img/your-watchlist/06-your-watchlist.jpg",
          title: "FILM PRODUCTION",
          type: "Blaxploitation"
        }
      ],

      // THE PERICUROS
      team: [
        {
          image: "./img/the-pericuros/Team-01.jpg",
          manName: "FABRICIO GUERRA",
          role: "Main Director"
        },
        {
          image: "./img/the-pericuros/Team-02.jpg",
          manName: "UMBERTO PAGODA",
          role: "Main Writer"
        },
        {
          image: "./img/the-pericuros/Team-03.jpg",
          manName: "GLORIA RICCASSO",
          role: "Main Producer"
        },
        {
          image: "./img/the-pericuros/Team-04.jpg",
          manName: "LIO NAPOIN",
          role: "Cameraman"
        },
      ],

      // LATEST NEWS
      newsList: [
        {
          image: "./img/latest-news/01-latest-news.jpg",
          date: "November 06, 2021",
          creator: "Admin",
          title: "RECAP YOUR LATEST COMPANY EVENT",
          text: "Suspendisse dictum dictum tempor. Ut non faucibus arcu, id elementum est. Suspendisse sed"
        },
        {
          image: "./img/latest-news/02-latest-news.jpg",
          date: "May 27, 2022",
          creator: "Admin",
          title: "HOW TO EDIT A FILM SCORE TO SERVE",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"
        },
        {
          image: "./img/latest-news/03-latest-news.jpg",
          date: "May 07, 2022",
          creator: "Admin",
          title: "ARE YOU READY TO MAKE IT AWESOME",
          text: "Design is our playground. While we create an awesome experience, we like having fun. No animals"
        }
      ],

      // BANNER LOGHI SPONSOR
      sponsors: [
        {
          name: "photo-love",
          logo: "./img/area-loghi/01-photo-love.png"
        },
        {
          name: "square-lens",
          logo: "./img/area-loghi/02-square-lens.png"
        },
        {
          name: "visual-films-photo",
          logo: "./img/area-loghi/03-visual-films-photo.png"
        },
        {
          name: "photo-studio",
          logo: "./img/area-loghi/04-photo-studio.png"
        },
        {
          name: "visual-films",
          logo: "./img/area-loghi/05-visual-films.png"
        }
      ],

      // FOOTER
      utilitiesLists: [
        {
          title: "INFORMATION",
          links: [
            "Product Support",
            "Checkout",
            "Report Abuse",
            "Redeem Voucher",
            "Order Status"
          ]
        },
        {
          title: "USEFUL LINKS",
          links: [
            "Policies & Rules",
            "Privacy Policy",
            "License Policy",
            "My Account",
            "Locality"
          ]
        },
      ]
    }
  },

  methods: {
    // funzione per mostrare o meno il menu scelto nella navbar
    showDropDown(index) {
      this.navbarLists[index].showDropDownMenu = !this.navbarLists[index].showDropDownMenu
    },

    // 1. funzione per evidenziare il link scelto nella navbar
    timeToGrow(itemHover) {
      itemHover.hovered = true;
    },

    // 2. funzione per rimuovere l'evidenza del link scelto nella navbar
    timeToReduce(itemHover) {
      itemHover.hovered = false;
    }
  }
}).mount('#app')

