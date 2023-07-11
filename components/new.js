import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import Link from 'next/link';
import data from '../pages/api/data.js';
import { ImArrowRight2 } from "react-icons/im";

const RecipesSlider = () => {
  const { Trending } = data;

  const handleSlideChange = (event) => {
    console.log('Slide changed:', event.item);
  };

  const renderRecipeSlide = (recipe) => (
    <div key={recipe.id} className="w-full mb-4 md:mb-0">
      <div className="bg-gray-100 rounded p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="relative h-64 md:h-full">
              <Link href={`/recipes/${recipe.id}`}>
                <span className="absolute inset-0">
                  <Image
                    src={recipe.img}
                    alt={recipe.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-4">
            <div className="bg-white rounded p-4">
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/recipes/${recipe.id}`}>
                  <span className="font-bold text-4xl text-gray-800 hover:text-gray-600">
                    {recipe.title}
                  </span>
                </Link>
              </h2>
              <p className="text-gray-600 mb-2">
                <span className="text-orange-600 hover:text-orange-700 font-bold pr-1 text-md">
                  {recipe.category || 'Unknown'}
                </span>
                {' — '}
                <span className="text-gray-800 hover:text-gray-600 pl-1 text-md">
                  {recipe.published || 'Unknown'}
                </span>
              </p>
              <p className="text-gray-800 mt-2 text-lg py-5">
                {recipe.description || 'No description available.'}
              </p>
              <div className="flex items-center mt-2 text-center md:text-left">
                <span className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full mr-2">
                  VG
                </span>
                <span className="flex items-center justify-center w-8 h-8 bg-red-900 text-white rounded-full mr-2">
                  GF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const carouselOptions = {
    autoPlay: true,
    autoPlayInterval: 3000,
    buttonsDisabled: true,
    dotsDisabled: false,
    infinite: true,
    mouseTracking: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1024: { items: 1 },
    },
    renderPrevButton: () => null, // Hide previous button
    renderNextButton: () => null, // Hide next button
  };

  return (
    <div className="container mx-auto px-0 md:px-4 pt-4">
      <div className="flex items-center justify-between mb-4 py-2 hidden md:flex">
        <div className="w-12 h-12 mr-2">
          <Image
            src="/images/simple-vegetarian-logo.png"
            alt="Logo"
            layout="responsive"
            width={48}
            height={48}
          />
        </div>
        <div>
          <Link href="/recipes">
            <span className="text-orange-500 hover:text-orange-700 font-bold ml-4 flex items-center">
              View All Recipes <ImArrowRight2 className="ml-2" />
            </span>
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold my-2 flex justify-center hidden md:flex -mt-16">
        NEW RECIPES
      </h1>
      <div className="mt-2 mx-1 pt-6 carousel-container">
        <AliceCarousel
          {...carouselOptions}
          onSlideChanged={handleSlideChange}
        >
          {Trending.map((recipe) => renderRecipeSlide(recipe))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default RecipesSlider;
