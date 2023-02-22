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

