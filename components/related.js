import React from 'react';
import Image from 'next/image';
import data from '../pages/api/data.js';

const RecipePage = () => {
  const { Posts } = data;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Trending Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Posts.map(recipe => (
          <div key={recipe.id} className="bg-white rounded shadow p-4">
            <div className="relative h-48">
              <Image src={recipe.img} alt={recipe.title} layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">
                <a className="font-bold text-xl text-gray-800 hover:text-gray-600" href={`/recipes/${recipe.id}`}>
                  {recipe.title}
                </a>
              </h2>
              <p className="text-gray-600">
                <a className="text-orange-600 hover:text-orange-700 pr-1 text-sm" href="#">
                  {recipe.category || "Unknown"}
                </a>
                —
                <a className="text-gray-800 hover:text-gray-600 pl-1 text-sm" href="#">
                  {recipe.published || "Unknown"}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
