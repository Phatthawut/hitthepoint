import { createRouter, createWebHistory } from "vue-router";
import { updateMetaTags } from "../utils/meta";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Hit The Point - Professional Digital Agency",
      description:
        "Hit The Point - Professional Digital Agency specializing in web design, development, and digital marketing solutions. Transform your online presence with our expert team.",
      keywords:
        "digital agency, web design, web development, digital marketing, SEO, Bangkok, Thailand",
      url: "https://hitthepoint.com",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      title: "About Us - Hit The Point Digital Agency",
      description:
        "Learn about Hit The Point, a leading digital agency in Bangkok. Our team of experts is committed to delivering exceptional digital solutions for your business.",
      keywords:
        "about us, digital agency Bangkok, web development team, digital marketing experts",
      url: "https://hitthepoint.com/about",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services.vue"),
    meta: {
      title: "Our Services - Hit The Point Digital Agency",
      description:
        "Comprehensive digital services including web design, development, and digital marketing. Transform your online presence with Hit The Point's professional solutions.",
      keywords:
        "web design services, web development, digital marketing, SEO services, Bangkok digital agency",
      url: "https://hitthepoint.com/services",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      title: "Contact Us - Hit The Point Digital Agency",
      description:
        "Get in touch with Hit The Point digital agency. Contact us for web design, development, and digital marketing services in Bangkok, Thailand.",
      keywords:
        "contact digital agency, web design contact, digital marketing services contact, Bangkok agency contact",
      url: "https://hitthepoint.com/contact",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Update meta tags on route change
router.beforeEach((to, from, next) => {
  updateMetaTags(to.meta);
  next();
});

export default router;
