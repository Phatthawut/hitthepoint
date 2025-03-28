import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    isMenuOpen: false,
    agency: {
      name: "Hit The Point",
      tagline: "Digital Agency That Thrives on Your Success",
      description:
        "If you are looking for an agency to help you create a professional website online, you've come to the right place. We can help your business to the next level.",
      address: "1234 N Spting St, Los Angeles, CA 90012",
      email: "info@hitthepoint.com",
      phone: "+1 (123) 456-7890",
      facebook: "https://www.facebook.com/hitthepoint",
      instagram: "https://www.instagram.com/hitthepoint",
      twitter: "https://www.twitter.com/hitthepoint",
      linkedin: "https://www.linkedin.com/company/hitthepoint",
    },
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
