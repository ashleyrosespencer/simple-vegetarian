import React from 'react';
import Image from 'next/image';
import data from '../pages/api/data.js';

const AllRecipesPage = () => {
  const { Posts } = data;

  return (
    <div className="container mx-auto px-4 pb-5">
      <h1 className="text-2xl font-bold my-4 flex justify-center py-4">ALL RECIPES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Posts.map(recipe => (
          <div key={recipe.id} className="bg-gray-100 rounded p-4">
            <div className="relative h-48">
              <Image src={recipe.img} alt={recipe.title} layout="fill" objectFit="cover" className="rounded" />
            </div>
            <div className="mt-4">
              <div className="bg-white rounded p-2 min-h-[8rem] flex flex-col justify-between"> {/* Apply min-height, white background */}
                <div>
                  <h2 className="text-xl font-bold">
                    <a className="font-bold text-xl text-gray-800 hover:text-gray-600" href={`/recipes/${recipe.id}`}>
                      {recipe.title}
                    </a>
                  </h2>
                  <p className="text-gray-600">
                    <a className="text-orange-600 hover:text-orange-700 pr-1 text-sm font-bold" href="#">
                      {recipe.category || "Unknown"}
                    </a>
                    {' — '}
                    <a className="text-gray-800 hover:text-gray-600 pl-1 text-sm" href="#">
                      {recipe.published || "Unknown"}
                    </a>
                  </p>
                </div>
                <p className="text-gray-800 mt-2">{recipe.description || "No description available."}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipesPage;
