import Format from '../layout/format'
import Image from 'next/image';
import Link from 'next/link';
import { ImArrowRight2 } from "react-icons/im";

export default function Home() {
    return (
        <Format>
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-2">
                        <Image
                            src="/images/cooking.jpg"
                            alt="Eggs, a whisk, a cup of cream on a cutting board"
                            width={500}
                            height={400}
                            className="mx-auto rounded"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:ml-2 md:mr-14">
                        <h1 className="text-3xl font-bold mb-4">About</h1>
                        <p className="text-md">
                            Simple Vegetarian was born from the idea that vegetarian food
                            does not need to be complicated or use a ton of ingredients.
                            With a mission to make vegetarian cooking accessible and enjoyable
                            for everyone, Simple Vegetarian offers a wide range of delicious and
                            easy-to-follow recipes and tips. Whether you`&quot;`re a seasoned
                            vegetarian or simply looking to incorporate more plant-based meals into
                            your diet, Simple Vegetarian provides a platform where simplicity meets
                            flavor, helping you discover the joy of cooking wholesome vegetarian dishes
                            without the fuss.
                        </p>
                        <br></br>
                        <Link href="/recipes">
                            <span className="text-orange-600 hover:text-orange-700 font-bold pr-1 text-md flex items-center" href="#">
                                Browse Recipes <ImArrowRight2 className="ml-2" />
                            </span>
                        </Link>
                        <Image
                            src="/images/about.jpg"
                            alt="Meal prep"
                            width={680}
                            height={400}
                            className="mx-auto rounded pt-10"
                        />
                    </div>
                </div>
            </div>
        </Format>
    )
}