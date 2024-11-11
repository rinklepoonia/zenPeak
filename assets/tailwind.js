tailwind.config = {
  theme: {
    extend: {
      colors: {
            "desert-sand": "#DFBCA6",
            "dusty-brown": "#A68272",
            "light-white": "#E4D9D5",
            "charcoal-gray": "#5A5656",
        "deep-navy": "#0C0F26",
        "grey": "#5A5656",
        "dark-grey": "#333333",
        "dark-gray": "#323232",
            "light-beige": "#F7F3F0"
      },
          fontSize: { 
        "custom-7xl": "75px",
              "custom-6xl": "64px",
            "custom-5xl": "55px",
            "custom-4xl": "43px",
              "custom-xs": "8.37px",
         
      },
    //   borderRadius: {
    //     "custom-xs": "10px",
    //   },
          lineHeight: {
          112:"112%",
          114: "114%",
          130: "130%",
          150:"150%",
      },
      container: {
        center: true,
        padding: "20px",
          },
          backgroundImage: {
            "hero": ` url('./assets/images/png/hero-bg.png')`,
            "small-hero": ` url('./assets/images/png/small-hero.png')`,
            "footer": ` url('./assets/images/png/footer-bg.png')`,
            "small-footer": ` url('./assets/images/png/small-footer.png')`,
          },
          backgroundSize: {
              "full": "100% 100%",
      },
      boxShadow: {
        "brown": "0px 4px 31.4px 0px #DAAF95",

    
      }
    },
  },
};
