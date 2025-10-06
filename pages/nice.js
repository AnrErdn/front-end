import React, { useState, useEffect } from 'react';
import { Heart, ArrowLeft, Send, Calendar, Clock, MapPin } from 'lucide-react';

const DatingApp = () => {
    const [currentPage, setCurrentPage] = useState('language');
    const [language, setLanguage] = useState('en');
    const [responses, setResponses] = useState({});
    const [noClickCount, setNoClickCount] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedAmPm, setSelectedAmPm] = useState('AM');

    // Translations
    const translations = {
        mn: {
            // Language selection
            selectLanguage: 'Хэл сонгох',
            mongolian: 'Монгол',
            german: 'Герман',

            // Pages
            welcome: 'Та үргэлжлүүлэхийг хүсэж байна уу?',
            continue: 'Үргэлжлүүлэх',
            freeTime: 'Чамд зав байгаа юу?',
            yes: 'Тийм',
            no: 'Үгүй',
            dateQuestion: 'Чи надтай гадуур гарч, болзох уу?',
            dontSayNo: 'Why 🥺',
            pleaseDontRush: 'Үгүй бол зүгээрээ, дахиад нэг бодоод үзээрэй...',
            thinkAgain: 'Боломж олгох',
            whenFree: 'Чи хэзээ завтай байгаа вэ?',
            selectDate: 'Огноо сонгох',
            timePlaceholder: 'Жишээ: 7:30, 8:00, 5:45',
            activities: 'Бидний хийж болох зүйлүүд:',
            coffee: '☕ Кофе уух',
            park: '🌳 Цэцэрлэгт хүрээлэнд алхах',
            movie: '🎬 Кино үзэх',
            restaurant: '🍽️ Хоол идэх',
            museum: '🎨 Музей эсвэл галлерейд очих',
            shopping: '🛍️ Хамтдаа дэлгүүр хэсэх',
            picnic: '🧺 Пикник хийх',
            games: '🎯 Тоглоом тоглох',
            finalMessage: 'Чамайг шийдвэрээ гаргасан гэж найдаж байна.',
            noPresure: 'Ямар ч хариулт байсан ч болноо.',
            sendResponse: 'Хариулт илгээх'
        },  
        de: {
            // Language selection  
            selectLanguage: 'Sprache wählen',
            mongolian: 'Mongolisch',
            german: 'Deutsch',

            // Pages
            welcome: 'Hey, möchtest du weitermachen?',
            continue: 'Weiter',
            freeTime: 'Hast du Zeit?',
            yes: 'Ja',
            no: 'Nein',
            dateQuestion: 'Möchtest du mit mir ausgehen?',
            dontSayNo: '🥺',
            pleaseDontRush: 'Bitte nicht so schnell, denk nochmal darüber nach...',
            thinkAgain: 'Nochmal denken',
            whenFree: 'Wann hast du Zeit?',
            selectDate: 'Datum wählen',
            timePlaceholder: 'Beispiel: 7:30, 8:00, 5:45',
            activities: 'Was wir machen können:',
            coffee: '☕ Kaffee trinken',
            park: '🌳 Im Park spazieren',
            movie: '🎬 Filme schauen',
            restaurant: '🍽️ Neues Restaurant ausprobieren',
            museum: '🎨 Museum oder Galerie besuchen',
            shopping: '🛍️ Zusammen einkaufen',
            picnic: '🧺 Picknick machen',
            games: '🎯 Spiele spielen',
            finalMessage: 'Ich warte gespannt auf deine Antwort!',
            noPresure: 'Kein Druck - was auch immer du entscheidest ist okay',
            sendResponse: 'Antwort senden'
        }
    };

    const t = translations[language] || translations.mn;

    // Floating sparkles animation (instead of hearts)
    const FloatingSparkles = () => {
        const [sparkles, setSparkles] = useState([]);

        useEffect(() => {
            const interval = setInterval(() => {
                const sparkleEmojis = ['✨', '⭐', '🌟', '💫'];
                const newSparkle = {
                    id: Math.random(),
                    left: Math.random() * 100,
                    emoji: sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)],
                    animationDuration: 4 + Math.random() * 2,
                    delay: Math.random() * 2
                };
                setSparkles(prev => [...prev.slice(-4), newSparkle]);
            }, 3000);

            return () => clearInterval(interval);
        }, []);

        return (
            <div className="fixed inset-0 pointer-events-none z-0">
                {sparkles.map(sparkle => (
                    <div
                        key={sparkle.id}
                        className="absolute text-yellow-300 opacity-60 animate-pulse"
                        style={{
                            left: `${sparkle.left}%`,
                            animation: `float ${sparkle.animationDuration}s ease-in-out infinite`,
                            animationDelay: `${sparkle.delay}s`,
                            fontSize: '1.2rem'
                        }}
                    >
                        {sparkle.emoji}
                    </div>
                ))}
            </div>
        );
    };

    // Cute bear component
    const BearMascot = ({ emotion = 'happy', size = 'text-6xl' }) => {
        const bearStates = {
            happy: '🐻',
            excited: '🐻',
            thinking: '🤔',
            pleading: '🥺',
            celebrating: '🎉',
            waving: '👋'
        };

        return (
            <div className={`${size} animate-bounce`}>
                {bearStates[emotion]}
            </div>
        );
    };

    const handleResponse = (key, value) => {
        setResponses(prev => ({ ...prev, [key]: value }));
    };

    const handleNoClick = () => {
        setNoClickCount(prev => prev + 1);
        setCurrentPage('dontSayNo');
    };

    const goBack = () => {
        const pages = ['language', 'welcome', 'freeTime', 'dateQuestion', 'whyHer', 'whenFree', 'activities', 'final'];
        const currentIndex = pages.indexOf(currentPage);
        if (currentIndex > 0) {
            setCurrentPage(pages[currentIndex - 1]);
        }
    };

    const goNext = (nextPage) => {
        setCurrentPage(nextPage);
    };

    const sendFinalResponse = () => {
        // In a real app, you'd send this to your backend
        const responseData = {
            language,
            responses,
            timestamp: new Date().toISOString()
        };

        // For demo purposes, show alert
        alert(`Response data: ${JSON.stringify(responseData, null, 2)}`);

        // You could also copy to clipboard or send to an API
        navigator.clipboard?.writeText(JSON.stringify(responseData, null, 2));
    };

    const PageContainer = ({ children, showBack = false }) => (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 flex items-center justify-center p-4 relative">
            <FloatingSparkles />
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg p-8 max-w-md w-full relative z-10 transform transition-all duration-300 hover:scale-[1.02]">
                {showBack && (
                    <button
                        onClick={goBack}
                        className="absolute top-4 left-4 p-2 text-gray-500 hover:text-blue-500 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                )}
                {children}
            </div>
        </div>
    );

    // Language Selection Page
    if (currentPage === 'language') {
        return (
            <PageContainer>
                <div className="text-center space-y-6">
                    <BearMascot emotion="waving" size="text-5xl" />
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">
                        Select Language / Хэл сонгох
                    </h1>
                    <div className="space-y-4">
                        <button
                            onClick={() => { setLanguage('mn'); goNext('welcome'); }}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            🇲🇳 Монгол
                        </button>
                        <button
                            onClick={() => { setLanguage('de'); goNext('welcome'); }}
                            className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-4 px-6 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            🇩🇪 Deutsch
                        </button>
                    </div>
                </div>
            </PageContainer>
        );
    }

    // Welcome Page
    if (currentPage === 'welcome') {
        return (
            <PageContainer showBack={true}>
                <div className="text-center space-y-6">
                    <BearMascot emotion="happy" />
                    <h1 className="text-2xl font-bold text-gray-800">{t.welcome}</h1>
                    <button
                        onClick={() => goNext('freeTime')}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        {t.continue} ✨
                    </button>
                </div>
            </PageContainer>
        );
    }

    // Free Time Page
    if (currentPage === 'freeTime') {
        return (
            <PageContainer showBack={true}>
                <div className="text-center space-y-6">
                    <div className="text-5xl animate-pulse">⏰</div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.freeTime}</h1>
                    <div className="space-y-4">
                        <button
                            onClick={() => { handleResponse('freeTime', 'yes'); goNext('dateQuestion'); }}
                            className="w-full bg-green-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {t.yes} ✅
                        </button>
                        <button
                            onClick={handleNoClick}
                            className="w-full bg-orange-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {t.no} ❌
                        </button>
                    </div>
                </div>
            </PageContainer>
        );
    }

    // Date Question Page
    if (currentPage === 'dateQuestion') {
        return (
            <PageContainer showBack={true}>
                <div className="text-center space-y-6">
                    <BearMascot emotion="thinking" />
                    <h1 className="text-2xl font-bold text-gray-800">{t.dateQuestion}</h1>
                    <div className="space-y-4">
                        <button
                            onClick={() => { handleResponse('dateAccepted', 'yes'); goNext('whyHer'); }}
                            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {t.yes} 💖
                        </button>

                        <button
                            onClick={handleNoClick}
                            className="w-full bg-gray-400 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {t.no} 😔
                        </button>
                    </div>
                </div>
            </PageContainer>
        );
    }



    // Don't Say No Page
    if (currentPage === 'dontSayNo') {
        return (
            <PageContainer>
                <div className="text-center space-y-6">
                    <BearMascot emotion="pleading" />
                    <h1 className="text-2xl font-bold text-gray-800">{t.dontSayNo}</h1>
                    <p className="text-gray-600">{t.pleaseDontRush}</p>
                    <button
                        onClick={() => goNext('dateQuestion')}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        {t.thinkAgain} 💭
                    </button>
                </div>
            </PageContainer>
        );
    }

    // When Free Page
    if (currentPage === 'whenFree') {
        return (
            <PageContainer showBack={true}>
                <div className="text-center space-y-6">
                    <div className="text-5xl animate-pulse">📅</div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.whenFree}</h1>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Calendar size={20} className="text-blue-500" />
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="flex-1 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-black"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock size={20} className="text-blue-500" />
                            <input
                                type="text"
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                placeholder={t.timePlaceholder}
                                className="flex-1 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-black"
                            />
                            <select
                                value={selectedAmPm}
                                onChange={(e) => setSelectedAmPm(e.target.value)}
                                className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-black bg-white"
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                        <button
                            onClick={() => {
                                handleResponse('dateTime', {
                                    date: selectedDate,
                                    time: selectedTime,
                                    ampm: selectedAmPm
                                });
                                goNext('activities');
                            }}
                            disabled={!selectedDate || !selectedTime}
                            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {t.continue} ➡️
                        </button>
                    </div>
                </div>
            </PageContainer>
        );
    }

    // Activities Page
    if (currentPage === 'activities') {
        const activities = [
            t.coffee,
            t.park,
            t.movie,
            t.restaurant,
            t.museum,
            t.shopping,
            t.picnic,
            t.games
        ];

        return (
            <PageContainer showBack={true}>
                <div className="text-center space-y-6">
                    <BearMascot emotion="excited" />
                    <h1 className="text-xl font-bold text-gray-800">{t.activities}</h1>
                    <div className="grid grid-cols-1 gap-3 text-left">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="p-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg transform transition-all duration-300 hover:scale-105"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="text-gray-700 font-medium">{activity}</span>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => goNext('final')}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        {t.continue} 🌟
                    </button>
                </div>
            </PageContainer>
        );
    }

    // Why I Like Her Page
    if (currentPage === 'whyHer') {
        return (
            <PageContainer showBack={true}>
                <div className="text-center space-y-6">
                    <BearMascot emotion="excited" />
                    <h1 className="text-2xl font-bold text-gray-800">Why I Want to Date You 💌</h1>
                    <p className="text-gray-700 leading-relaxed text-md">
                        Чамайг анх хараад л ямар хөөрхөн охин бэ гэж бодсон.
                        <br /><br />
                        Чи надад ухаантай, хөөрхөн, өөрийнхөөрөө юм шиг санагдсан. Магадгүй чамтай хамт цагийг өнгөрөөх гэсэн нь үүнээс л болсон байх.
                        <br /><br />
                        Тхх 
                    </p>
                    <button
                        onClick={() => goNext('whenFree')}
                        className="w-full bg-pink-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Next 💖
                    </button>
                </div>
            </PageContainer>
        );
    }

    // Final Page
    if (currentPage === 'final') {
        return (
            <PageContainer showBack={true}>
                <div className="text-center space-y-6">
                    <BearMascot emotion="celebrating" />
                    <h1 className="text-xl font-bold text-gray-800">{t.finalMessage}</h1>
                    <p className="text-gray-600">{t.noPresure}</p>
                    <button
                        onClick={sendFinalResponse}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                        <Send size={20} />
                        <span>{t.sendResponse}</span>
                    </button>
                </div>
            </PageContainer>
        );
    }

    return null;
};

// Add CSS animations
const styles = `
  @keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default DatingApp;