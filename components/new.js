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
    <div key={recipe.id} className="flex">
      <div className="w-1/2">
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
      <div className="w-1/2 pl-4 flex items-center">
        <div>
          <h2 className="text-xl font-bold">
            <Link href={`/recipes/${recipe.id}`}>
                <span className="font-bold text-5xl text-gray-800 hover:text-gray-600">
                  {recipe.title}
                </span>
            </Link>
          </h2>
          <p className="text-gray-600">
            <span className="text-orange-600 hover:text-orange-700 pr-1 text-md">
              {recipe.category || 'Unknown'}
            </span>
            {' — '}
            <span className="text-gray-800 hover:text-gray-600 pl-1 text-md">
              {recipe.published || 'Unknown'}
            </span>
          </p>
          <br></br>
          <p className="text-gray-800 mt-2 text-lg">{recipe.description || 'No description available.'}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-7 py-4 pb-10">
      <div className="flex items-center justify-between mb-4 py-2">
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
      <h1 className="text-2xl font-bold my-4 flex justify-center -mt-16">NEW RECIPES</h1>
      <span className='p-1'></span>
      <div className="bg-white rounded shadow p-4">
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
