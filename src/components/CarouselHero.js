import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselHero.css';

export default function CarouselHero() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kaylabreese.files.wordpress.com/2018/11/pr-journalism.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="bg-secondary height-100 bg-opacity-30 text-white">
          <h1>Jordan Pagkalinawan</h1>
          <h3>Student journalist</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
