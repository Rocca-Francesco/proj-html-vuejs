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
          dropdownMenu: true,
          // showDropdown
          showDropDownMenu: false
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
          showDropDownMenu: false
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
    showDropDown(index) {
      this.navbarLists[index].showDropDownMenu = !this.navbarLists[index].showDropDownMenu
    }
  }
}).mount('#app')

