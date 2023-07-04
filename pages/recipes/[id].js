import { useRouter } from 'next/router';
import data from '../api/data';
import Format from '../../layout/format';
import Image from 'next/image';
import Related from '../../components/related';

export default function Recipe() {
    const router = useRouter();
    const { id } = router.query;

    // Find the recipe based on the ID
    const recipe = data.Posts.find((recipe) => recipe.id === Number(id));

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    const ingredients = [];
    for (let i = 1; i <= 14; i++) {
        const ingredientKey = `ingredient${i}`;
        if (recipe[ingredientKey]) {
            ingredients.push(recipe[ingredientKey]);
        }
    }

    const directions = recipe.directions.split(';');

    return (
        <Format>
            <div>
                <section className="container mx-auto px-4 md:px-8 py-8 flex flex-wrap">
                    <div className="w-full md:w-3/4 md:pr-8">
                        <div className="post py-10">
                            <h1 className="font-bold text-4xl text-center pb-5 -mt-8">
                                {recipe.title}
                            </h1>
                            <p className="text-gray-500 text-lg text-center">
                                {recipe.subtitle}
                            </p>
                            <div className="py-10 justify-center">
                                <div className="flex justify-center"></div>
                                <Image src={recipe.img} width={900} height={600} alt="" />
                            </div>
                            <div className="content text-gray-600 text-lg flex-col gap-4 pb-10 border-b-2 border-gray-500">
                                <p>{recipe.description}</p>
                            </div>
                            <div className="content text-gray-600 text-lg flex-col gap-4 pt-4 pb-10 border-b-2 border-gray-500">
                                <h2 className="font-bold text-black text-xl pt-1 pb-2">Directions</h2>
                                <ol className="pl-6 text-md">
                                    {directions.map((step, index) => (
                                        <li key={index} className="py-2">
                                            <span className="step-number">{index + 1}</span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <div className="">
                                <Related />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mt-8 md:mt-0 px-2">
                        <div className="pb-5 py-12 bg-white rounded shadow p-4">
                            <h1 className="font-bold text-2xl pb-2 border-b-2 border-gray-500 -mt-8">
                                Ingredients
                            </h1>
                            <p className="pt-2 text-md">Servings: 2</p>
                            <ul className="mt-5 list-disc">
                                {ingredients.map((ingredient, index) => (
                                    <li key={index} className="ml-4">{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Format>
    );
}
