import { connectDB } from "@/lib";
import { General } from "@/models";

const SeedGeneral = async () => {
  const generalUser = {
    name: "John Doe",
    title: "Software Developer",
    bio: "Passionate developer with 10 years of experience.",
    about: "I specialize in full-stack development.",
    profilePic: "https://example.com/profile.jpg",
    imageGallery: [
      {
        title: "Project 1",
        image: "https://example.com/project1.jpg",
        shortDesc: "Short description of project 1",
        longDesc: "Detailed description of project 1",
      },
    ],
    resume: "https://example.com/resume.pdf",
    contact: {
      email: "john.doe@example.com",
      whatsApp: "+1234567890",
      address: "123 Main St",
      city: "Anytown",
      state: "Anystate",
      zip: "12345",
      country: "USA",
    },
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com/in",
      instagram: "https://instagram.com",
    },
    skills: [
      {
        name: "JavaScript",
        percentage: 90,
        thumb:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
        level: "Expert",
      },
    ],
    toots: [
      {
        name: "VS Code",
        thumb:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      },
    ],
    siteData: {
      name: "John Doe Portfolio",
      logo: "https://example.com/logo.png",
      title: "Welcome to my portfolio",
      description: "This is the portfolio of John Doe.",
    },
    seoData: {
      description:
        "John Doe's personal portfolio showcasing his projects and skills.",
      keywords: [
        "John Doe",
        "portfolio",
        "software developer",
        "projects",
        "skills",
      ],
      openGraph: {
        description:
          "Explore the portfolio of John Doe, a passionate software developer.",
        imagesUrl: "https://example.com/og-image.jpg",
      },
      siteUrl: "https://example.com",
    },
  };

  try {
    await connectDB();
    const ifAlreadyExists = await General.find({});
    if (ifAlreadyExists.length > 0) {
      return;
    }
    await General.create(generalUser);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Failed to seed general", error);
  }
};

export default SeedGeneral;
