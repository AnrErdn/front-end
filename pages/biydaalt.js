import { useState } from 'react';

// JSON data with additional funny details
const data = [
    { "name": "Amartuvshin", "email": "amartuvshin@gmail.com", "details": "Amartuvshin is that weird dude who somehow got forced into making IoT projects by his teacher Batmunkh. Still doesn’t know what IoT is." },
    { "name": "G.Anar", "email": "g.anar@gmail.com", "details": "G.Anar is a chill guy who sometimes doesn’t even bother to show up to school. Also, he’s tall, like a giraffe, but not quite as graceful." },
    { "name": "Anar-Erdene", "email": "anar-erdene@gmail.com", "details": "Anar-Erdene is the pizza king. He can make the best pizza, but don’t ask him for a coffee, you’ll regret it." },
    { "name": "Batmend", "email": "batmend@gmail.com", "details": "Batmend is the basketball legend who has a knack for making people think he’s the best at everything, especially basketball" },
    { "name": "Temuulen", "email": "temuulen@gmail.com", "details": "Temuulen’s life revolves around his collection of 50+ pens, and he calls it 'The Pen Empire'. His dream is to open a pen museum." },
    { "name": "B.Temuujin", "email": "b.temuujin@gmail.com", "details": "B.Temuujin is big, he plays mobile games like a pro, but the only thing that’s a bit more pro is his collection of snacks. Don’t ask him to run a marathon though, he’ll walk to the nearest KFC." },
    { "name": "Sh.Temuujin", "email": "sh.temuujin@gmail.com", "details": "Sh.Temuujin is the guy who is too busy to trying to get his girlfriend, Gunsan, to notice him—good luck with that, buddy." },
    { "name": "E.Temuujin", "email": "e.temuujin@gmail.com", "details": "E.Temuujin is basically the little Chingis Khaan of the class. He loves playing Valorant, and if he ever lose, he just blame it on the lag." },
    { "name": "Khanbileg", "email": "khanbileg@gmail.com", "details": "Khanbileg is the shy guy who plays Elden Ring for 8 hours straight, but doesn’t really talk much. When he does talk, it’s about Elden Ring. He also plays Valorant." },
    { "name": "Tselmeg", "email": "tselmeg@gmail.com", "details": "Tselmeg has a girlfriend studying at another school. It’s a long-distance relationship, but he insists it’s real, just like the way he talks about her 24/7." },
    { "name": "Tugs-Asralt", "email": "tugs-asralt@gmail.com", "details": "Tugs-Asralt is the short guy who loves playing games like Mobile Legends and PUBG with B.Temuujin and Enkhjav. Don’t underestimate his gaming skills, though." },
    { "name": "Shine-Erdene", "email": "shine-erdene@gmail.com", "details": "Shine-Erdene is tall and proud of it. He’s also the guy who once tried to high-five a tree. It didn’t go well. But he talks Elden Ring with Khanbileg like it's their second language." },
    { "name": "Ochir-Erdene", "email": "ochir-erdene@gmail.com", "details": "Ochir-Erdene is the self-proclaimed 'World’s Best Cereal Eater,' a title he gave himself, but no one’s really challenging him for it. He’s also very tall, and awkward." },
    { "name": "Enkhtugs", "email": "enkhtugs@gmail.com", "details": "Enkhtugs is a girl, who has black skin, but at least her skin brighter than Choi's future. " },
    { "name": "Enkhjav", "email": "enkhjav@gmail.com", "details": "Enkhjav is the chill guy who’s always ready to make gaming videos on YouTube. But don’t expect him to win any tournaments; his content is more about vibing." },
    { "name": "Emily", "email": "emily@gmail.com", "details": "Emily can do 100 push-ups in a row, but give her more than one slice of pizza, and she’s done. Also, she’s really good at English. Like, really good." },
    { "name": "Dalaisuren", "email": "dalaisuren@gmail.com", "details": "Dalaisuren once tried to teach a rock how to swim. The rock didn’t learn, but Dalaisuren’s still trying to figure out how to swim himself." },
    { "name": "Choi-Odser", "email": "choiodser@gmail.com", "details": "Choi-Odser rarely comes to school... But wait who is Choi?" },
    { "name": "Enkhuchral", "email": "enkhuchralnpc@gmail.com", "details": "Enkhuchral is the 'self-proclaimed' coach of Mongolz, but his Valorant skills are... let’s just say he is not good. Also, he’s a bit fake sometimes, but hey, we still love him. I'm lying" },
    { "name": "Tergel", "email": "tergel2345@gmail.com", "details": "Tergel is the smartest and the whitest in the class. His skin is brighter than sun" },
];



export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isGridView, setIsGridView] = useState(true);

    // Filter data based on the search query
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    return (
        <div className="font-sans py-10 px-[20%] text-black bg-white h-full">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Хэрэглэгчийн Жагсаалт</h1>
                <button 
                    onClick={toggleView} 
                    className="bg-blue-600 py-2 px-4 rounded-md shadow-md text-white hover:bg-blue-700">
                    {isGridView ? 'List view-рүү шилжүүлжэх ' : 'Grid view-рүү шилжүүлжэх'}
                </button>
            </header>

            <main>
                <div className="relative block mb-6">
                    <span className="sr-only">Search</span>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Хэрэглэгчийг нэрээр нь хайна уу..."
                        type="text"
                        name="search"
                        value={searchQuery}
                        onChange={(p) => setSearchQuery(p.target.value)}
                    />
                </div>

                <div className={`grid gap-4 ${isGridView ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {filteredData.length > 0 ? (
                        filteredData.map(({ name, email, details }) => (
                            <div
                                key={email}
                                className="bg-gray-100 p-5 border-2 rounded-xl shadow-md text-left hover:bg-gray-200"
                            >
                                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                                <p className="text-md">{email}</p>
                                <p className="text-sm text-gray-500 mt-2">{details}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-lg text-gray-500">Хэрэглэгчийн нэр олдсонгүй</p>
                    )}
                </div>
            </main>
        </div>
    );
}
