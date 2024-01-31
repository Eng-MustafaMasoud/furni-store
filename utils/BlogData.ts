import post1 from "@/public/images/post-1.jpg";
import post2 from "@/public/images/post-2.jpg";
import post3 from "@/public/images/post-3.jpg";

export const BlogData = [
  {
    id: 1,
    image: post1,
    title: "First Time Home Owner Ideas",
    name: "Kristin Watson",
    date:
      new Date().toLocaleDateString("en-US", { day: "numeric" }) +
      "-" +
      new Date().toLocaleDateString("en-US", { month: "short" }) +
      "-" +
      new Date().toLocaleDateString("en-US", { year: "numeric" }),
  },
  {
    id: 2,
    image: post2,
    title: "How To Keep Your Furniture Clean",
    name: "Robert Fox",
    date:
      new Date().toLocaleDateString("en-US", { day: "numeric" }) +
      "-" +
      new Date().toLocaleDateString("en-US", { month: "short" }) +
      "-" +
      new Date().toLocaleDateString("en-US", { year: "numeric" }),
  },
  {
    id: 3,
    image: post3,
    title: "Small Space Furniture Apartment Ideas",
    name: "Kristin Watson",
    date:
      new Date().toLocaleDateString("en-US", { day: "numeric" }) +
      "-" +
      new Date().toLocaleDateString("en-US", { month: "short" }) +
      "-" +
      new Date().toLocaleDateString("en-US", { year: "numeric" }),
  },
];
