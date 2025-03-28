    import { useState } from 'react';

    //JSON data
    const data = [
    { id: 1, title: 'Test 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar hendrerit purus, at euismod diam pretium nec. Nunc gravida vulputate vulputate Nulla quis ante volutpat, condimentum ex et, congue urna.' },
    { id: 2, title: 'Test 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar hendrerit purus, at euismod diam pretium nec. Nunc gravida vulputate vulputate Nulla quis ante volutpat, condimentum ex et, congue urna.' },
    { id: 3, title: 'Test 3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar hendrerit purus, at euismod diam pretium nec. Nunc gravida vulputate vulputate Nulla quis ante volutpat, condimentum ex et, congue urna.' },
    { id: 4, title: 'Test 4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar hendrerit purus, at euismod diam pretium nec. Nunc gravida vulputate vulputate Nulla quis ante volutpat, condimentum ex et, congue urna.' },
    ];

    export default function Home() {
    const [isGridView, setIsGridView] = useState(true);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    return (
        <div className="font-sans py-10 px-[20%] text-black bg-white h-screen">

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">Нийтлэлүүд</h1>
                
                <button 

                    onClick={toggleView} 
                    className="bg-blue-600 py-2 px-4 rounded-md shadow-md text-white hover:bg-blue-700">
                    {isGridView ? 'Grid view-рүү шилжүүлжэх' : 'List view-рүү шилжүүлжэх'}

                </button>

            </div>

            <div className={`grid gap-4 ${isGridView ? 'grid-cols-2' : 'grid-cols-1'}`}>

                {data.map((item) => (
                    
                <div
                    key={item.id}
                    className="bg-gray-100 p-5 border-2 rounded-xl shadow-md text-left hover:bg-gray-200"
                >
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-md">{item.text}</p>
                </div>
                ))}

            </div>
        </div>
    );
}
