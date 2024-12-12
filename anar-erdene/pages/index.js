import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <div className="bg-black h-screen">
            <h1 className="text-4xl font-bold text-center text-white mb-5 pt-5 cursor-pointer">ALL MY FRONT-END TASKS</h1>
            <div className="grid grid-cols-3 gap-4 px-5">
                <button
                    className="bg-gray-300 hover:bg-gray-400 rounded-lg overflow-hidden border-4 border-gray-300 hover:border-cyan-500 w-full h-full cursor-pointer"
                    onClick={() => router.push("/cv")}
                >
                    <div className="h-80 w-full relative">
                        <Image src="/task1.png" alt="task1" layout="fill" objectFit="cover" />
                    </div>
                    <p className="text-center text-black font-semibold mt-3">CV</p>
                </button>

                <button
                    className="bg-gray-300 hover:bg-gray-400 rounded-lg overflow-hidden border-4 border-gray-300 hover:border-cyan-500 w-full h-full cursor-pointer"
                    onClick={() => router.push("/task-2")}
                >
                    <div className="h-80 w-full relative">
                        <Image src="/colorchange.png" alt="colorchange" layout="fill" objectFit="cover" />
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Task-2</p>
                </button>

                <button
                    className="bg-gray-300 hover:bg-gray-400 rounded-lg overflow-hidden border-4 border-gray-300 hover:border-cyan-500 w-full h-full cursor-pointer"
                    onClick={() => router.push("/task-3")}
                >
                    <div className="h-80 w-full relative">
                        <Image src="/search.png" alt="search" layout="fill" objectFit="cover" />
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Task-3</p>
                </button>

                <button
                    className="bg-gray-300 hover:bg-gray-400 rounded-lg overflow-hidden border-4 border-gray-300 hover:border-cyan-500 w-full h-full cursor-pointer"
                    onClick={() => router.push("/task-4")}
                >
                    <div className="h-80 w-full relative">
                        <Image src="/grid.png" alt="grid" layout="fill" objectFit="cover" />
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Task-4</p>
                </button>

                <button
                    className="bg-gray-300 hover:bg-gray-400 rounded-lg overflow-hidden border-4 border-gray-300 hover:border-cyan-500 w-full h-full cursor-pointer"
                    onClick={() => router.push("/task-5")}
                >
                    <div className="h-80 w-full relative">
                        <Image src="/usersearch.png" alt="usersearch" layout="fill" objectFit="cover" />
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Task-5</p>
                </button>

                <button
                    className="bg-gray-300 hover:bg-gray-400 rounded-lg overflow-hidden border-4 border-gray-300 hover:border-cyan-500 w-full h-full cursor-pointer"
                    onClick={() => router.push("/weather")}
                >
                    <div className="h-80 w-full relative">
                        <Image src="/weather.png" alt="weather" layout="fill" objectFit="cover" />
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Weather</p>
                </button>

                <button
                    className="bg-gray-300 hover:bg-gray-400 rounded-lg overflow-hidden border-4 border-gray-300 hover:border-cyan-500 w-full h-full cursor-pointer"
                    onClick={() => router.push("/weather")}
                >
                    <div className="h-80 w-full relative">
                        <Image src="/biydaalt.png" alt="weather" layout="fill" objectFit="cover" />
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Biy Daalt</p>
                </button>   
            </div>
        </div>
    );
}
