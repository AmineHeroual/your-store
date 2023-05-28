import { Inter } from 'next/font/google';

import Collection from '@/components/Collection';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import axios from 'axios';
const inter = Inter({ subsets: ['latin'] });

export default function Index({ products }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
            <div className="w-full">
                <div className="flex flex-row justify-between mb-8">
                    <h2>Men's Collection</h2>
                    <a href="#" className="text-xl flex">
                        View All
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-7 ml-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </a>
                </div>
                <div className="grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 md:gap-10 ">
                    <Collection item={0} products={products} />
                    <Collection item={1} products={products} />
                    <Collection item={2} products={products} />
                    <Collection item={3} products={products} />
                </div>

                <div className="grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 md:gap-10">
                    <Collection item={0} products={products} />
                    <Collection item={1} products={products} />
                    <Collection item={2} products={products} />
                    <Collection item={3} products={products} />
                </div>
            </div>

            <Footer />
        </main>
    );
}

export async function getStaticProps() {
    try {
        const res = await axios.get(
            'https://your-store-4ly8.onrender.com/products/'
        );
        // console.log(res.data);

        return {
            props: { products: res.data },
        };
    } catch (error) {
        console.log(error);
        return {
            props: { products: null },
        };
    }
}
