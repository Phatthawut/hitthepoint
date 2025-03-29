import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    isMenuOpen: false,
    agency: {
      name: "Hit The Point",
      logo: "/hit-the-point-logo.webp",
      tagline: "Digital Agency That Thrives on Your Success",
      description:
        "If you are looking for an agency to help you create a professional website online, you've come to the right place. We can help your business to the next level.",
      address: "842/406 Rama 9 Rd, Bang Kapi, Huai Khwang, Bangkok 10310",
      email: "info@hitthepoint.co",
      phone: "083 475-5212",
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
