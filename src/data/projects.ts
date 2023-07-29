import fpltoolsIMG from "../assets/images/projects/fpltools.onrender.com.png";
import gymateIMG from "../assets/images/projects/gymate-demo.netlify.app.png";
import mammonousIMG from "../assets/images/projects/mammonous-furniture.netlify.app.png";
import songuessrIMG from "../assets/images/projects/songuessr.netlify.app.png";

export type IProject = {
  name: string;
  desc: string;
  img: string;
  github: string;
  live: string;
};

export const projects: IProject[] = [
  {
    name: "FPLTools",
    desc: "FPLTools is web app for Fantasy Premier League (FPL) geeks. It offers features to analyze users team and help them with FPL gameplay. The main feature is transfer planner, in which FPLTools user can simulate making his own transfers. In this project I'm using MERN stack with React + Typescript. I'm also using redux toolkit too cenralize app state. Project is currently in progress and that's what I'm working on now. I encourage you to visit GITHUB and LIVE demo.",
    img: fpltoolsIMG,
    github: "https://github.com/FPLTomeczek/FPLTools-TS",
    live: "https://fpltools.onrender.com",
  },
  {
    name: "Gymate Demo",
    desc: "The goal of application was to recreate another gym website without looking up the code, main app is hosted on https://gymate-iota.vercel.app. The only resources copied from main app are images and text.",
    img: gymateIMG,
    github: "https://github.com/FPLTomeczek/gogym",
    live: "https://gymate-demo.netlify.app",
  },
  {
    name: "Songuessr",
    desc: "Challenge yourself in Songuessr app and check if you really know your favourite artists. Whole project is based on Spotify Web API. Dummy account essential to login to website through spotify\n e-mail: dummyacc53215@gmail.com password: dummyspotifypassword4523",
    img: songuessrIMG,
    github: "https://github.com/FPLTomeczek/guess_the_song",
    live: "https://songuessr.netlify.app/login",
  },
  {
    name: "Mammonous furniture",
    desc: "In the Mammonous Furniture web store you can buy furniture to your house. User can pick between various types of the home furniture.",
    img: mammonousIMG,
    github: "https://github.com/FPLTomeczek/store-furniture",
    live: "https://mammonous-furniture.netlify.app",
  },
];
