import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import WorkCards from '../components/WorkCards';
import ExperienceCard from '../components/ExperienceCard';
import CarouselHero from '../components/CarouselHero';

function Home() {
  return (
    <div className="Home">
      <CarouselHero />
      <section id="about" style={{ paddingBottom: '15px' }}>
        <h1>Hello!</h1>
        <p>
          My name is Jordan Pagkalinawan, an aspiring journalist with experience
          in both print and digital media. Check out my work and experience
          below!
        </p>
      </section>
      <section id="work-cards" style={{ paddingBottom: '15px' }}>
        <h2>My Work</h2>
        <WorkCards />
      </section>
      <section id="experience" style={{ paddingBottom: '15px' }}>
        <h2>Experience</h2>
        <ExperienceCard />
      </section>
    </div>
  );
}

export default Home;
