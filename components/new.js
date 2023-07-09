import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import Link from 'next/link';
import data from '../pages/api/data.js';

const RecipesSlider = () => {
  const { Posts } = data;

  const handleSlideChange = (event) => {
    console.log('Slide changed:', event.item);
  };

  const renderRecipeSlide = (recipe) => (
    <div key={recipe.id} className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <div className="relative h-full">
          <Link href={`/recipes/${recipe.id}`}>
            <span>
              <Image
                src={recipe.img}
                alt={recipe.title}
                width={600}
                height={400}
                objectFit="cover"
                className="rounded"
              />
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 pl-0 md:pl-4">
        <div>
          <h2 className="text-xl font-bold mb-2">
            <Link href={`/recipes/${recipe.id}`}>
              <span className="font-bold text-5xl text-gray-800 hover:text-gray-600">
                {recipe.title}
              </span>
            </Link>
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="text-orange-600 hover:text-orange-700 pr-1 text-md">
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
  );

  return (
    <div className="container mx-auto px-4 md:px-8 py-4 pb-10">
      <div className="flex items-center justify-between mb-4 py-2 hidden md:flex">
        <div className="flex items-center">
          <div className="w-12 h-12 mr-2">
            <Image
              src="/images/simple-vegetarian-logo.png"
              alt="Logo"
              layout="responsive"
              width={48}
              height={48}
              className=""
            />
          </div>
        </div>
        <div>
          <Link href="/recipes">
            <span className="text-orange-500 hover:text-orange-700 ml-4">
              View All Recipes {'>'}
            </span>
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold my-2 flex justify-center hidden md:flex -mt-16">NEW RECIPES</h1><br></br>
      <div className="bg-gray-100 rounded shadow p-4">
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          buttonsDisabled
          dotsDisabled={false}
          infinite
          onSlideChanged={handleSlideChange}
          mouseTracking
          responsive={{
            0: { items: 1 },
            600: { items: 1 },
            1024: { items: 1 },
          }}
          className="mt-2"
        >
          {Posts.map(recipe => renderRecipeSlide(recipe))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default RecipesSlider;
