const { createApp } = Vue

createApp({
  data() {
    return {
      attivita: {
        nome: "Cinemato",
        logo: "./img/header/logo.svg"
      },

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
          dropdownMenu: true
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
          dropdownMenu: true
        }
      ],

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
  }
}).mount('#app')

