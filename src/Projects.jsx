import React from "react";
import "./CSS/Projects.css";
import CustomCard from "./Components/CustomCard";

const Projects = (props) => {
	return (
		<div className="ProjectContainers">
			<CustomCard
				imgUrl="Movie-app.png"
				title="MovieList App"
				btnLink="https://movie-app-gm4lrizsw-midorasolos.vercel.app"
				text="Search for movies and shows to save to your favorites to keep track of what you want to watch"
			/>
			<CustomCard
				imgUrl="CalculatorSite.png"
				title="React Calculator"
				btnLink="https://calculator-w9ployymh-midorasolos.vercel.app/"
				text="A calculator that uses the reducer hook and React components to make accurate mathmatical calculations"
			/>
			<CustomCard
				imgUrl="LandingPage.png"
				title="Landing Page"
				btnLink="https://sdsu-di-lab-landing-page.vercel.app/"
				text="Built a landing page for the sdsu di lab internship"
			/>
		</div>
	);
};
export default Projects;
