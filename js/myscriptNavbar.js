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
      ]
    }
  }
}).mount('.navbar')