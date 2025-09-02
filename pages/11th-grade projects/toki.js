import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
                setFadeOut(false);
            }, 500);
        }, 2000);
    }, []);

    const handleLogoClick = () => {
        setFadeOut(true);
        setTimeout(() => {
            setLoading(true);
            setFadeOut(false);
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
            setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => {
                    setLoading(false);
                    setFadeOut(false);
                }, 500);
            }, 1000);
        }, 500);
    };

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                <div className="w-16 h-16 rounded-full border-4 border-t-amber-400 border-r-amber-200 border-b-amber-100 border-l-amber-50 animate-spin"></div>
                <div className={`fixed inset-0 z-[51] bg-white transition-opacity duration-500 ${fadeOut ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className={`fixed inset-0 z-40 bg-white transition-opacity duration-500 ${fadeOut ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
            <div className={`relative z-30`}>
                <header className='fixed top-0 left-0 w-full z-50 bg-white shadow h-24'>
                    <nav className='flex justify-between items-center py-5 px-[18%]'>
                        <div className='flex items-center cursor-pointer' onClick={handleLogoClick}>
                            <Image 
                                src="/tokilogo.png" 
                                alt="toki logo"
                                width={135} 
                                height={30}
                            />
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <a className="text-black">Үйлчилгээ</a>
                            <a className="text-black">Давуу тал</a>
                            <a className="text-black">Мэдээ</a>
                            <a className="text-black">Хамтран ажиллах</a>
                        </div>
                    </nav>
                </header>
                
                <main> 
                    <div id="top" className='bg-[#fff2d7] h-[100vh] flex flex-col items-center justify-center'>
                        <h1 className='text-3xl text-center text-black pt-36 mb-[-6%]'>
                            ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...
                        </h1>
                        <div>
                            <Image 
                                src="/zurag.png" 
                                alt="app image"
                                width={1200} 
                                height={160}  
                            />
                        </div>
                        <div className='flex space-x-4 mt-[-4%]'>
                            <Image 
                                src="/apple.png" 
                                alt="app store"
                                width={145} 
                                height={160}  
                            />
                            <Image 
                                src="/android.png" 
                                alt="play store"
                                width={145} 
                                height={160}  
                            />
                        </div>
                    </div>
                    
                    <div className='bg-[#fafafa] h-[95vh] relative flex justify-center items-center'>
                        <div className='relative w-full max-w-6xl'>
                            <div className='flex justify-center'>
                                <Image 
                                    src="/phone.png" 
                                    alt="phone mockup"
                                    width={1050} 
                                    height={900}
                                    className="z-10"
                                />
                            </div>
                            <div className='absolute top-1/2 right-24 transform -translate-y-1/2 space-y-4 max-w-md'>
                                <h2 className='text-amber-400 text-3xl font-bold'>Toki Service</h2>
                                <p className='text-gray-800 text-base leading-relaxed w-[115%]'>
                                    Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#fff2d7] h-[95vh] relative flex justify-center items-center'>
                        <div className='relative w-full max-w-6xl'>
                            <div className='absolute top-1/2 left-24 transform -translate-y-1/2 max-w-md flex flex-col items-end space-y-2'>
                                <h2 className='text-amber-400 text-3xl font-bold'>Toki Pay</h2>
                                <p className='text-gray-800 text-base leading-relaxed w-[125%] text-right'>
                                    Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.
                                </p>
                            </div>
                            <div className='flex justify-end'>
                                <Image 
                                    src="/phone2.png" 
                                    alt="phone mockup 2"
                                    width={950} 
                                    height={900}
                                    className="z-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#fafafa] h-[95vh] relative flex justify-center items-center'>
                        <div className='relative w-full max-w-6xl'>
                            <div className='flex justify-center'>
                                <Image 
                                    src="/phone3.png" 
                                    alt="phone mockup"
                                    width={1050} 
                                    height={900}
                                    className="z-10"
                                />
                            </div>
                            <div className='absolute top-1/2 right-24 transform -translate-y-1/2 space-y-4 max-w-md'>
                                <h2 className='text-amber-400 text-3xl font-bold'>Toki Shop</h2>
                                <p className='text-gray-800 text-base leading-relaxed w-[115%]'>
                                    Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white h-[48vh] flex flex-col items-center pt-24'>
                        <h2 className='text-amber-400 text-3xl font-bold'>
                            Toki апп өдөр бүр танд тусална
                        </h2>
                        <p className='text-gray-800 text-base leading-relaxed w-[40%] text-center mt-4'>
                            Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
                        </p>
                    </div>

                    <div className='bg-[#fff2d7] h-[18vh] flex flex-col items-center'>
                        <button className='bg-amber-400 text-white px-14 py-3 rounded-full mt-6 font-bold text-sm'>
                            ДАВУУ ТАЛ
                        </button>
                    </div>
        
                    <footer className='bg-black h-[28vh] flex justify-between px-[19%] text-white pt-[3.5%]'>
                        <div>
                            <Image 
                                src="/tokilogo.png" 
                                alt="app store"
                                width={100} 
                                height={160}  
                            />
                        </div>
                        <div>
                            <button className='text-neutral-300 text-xs hover:text-amber-400'>Түгээмэл асуулт</button>
                            <p className='text-neutral-300 text-xs mt-4 flex items-center'>
                                <span className='mr-2'>
                                    <i className="fas fa-map-marker-alt text-neutral-300"></i>
                                </span>
                                Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар
                            </p>
                            <div className='flex space-x-4 text-xs mb-4 mt-2'>
                                <p className='text-neutral-300 flex items-center'>
                                    <span className='mr-2'>
                                        <i className="fas fa-phone-alt text-neutral-300"></i>
                                    </span>
                                    77074477, 4477
                                </p>
                                <p className='text-neutral-300 flex items-center'>
                                    <span className='mr-2'>
                                        <i className="fas fa-envelope text-neutral-300"></i>
                                    </span>
                                    info@toki.mn
                                </p>
                            </div>
                            <p className='text-neutral-300 text-xs'>Copyright © 2022 | Toki.mn</p>
                        </div>
                        <div className='flex flex-col items-end'>
                            <button className='text-neutral-300 text-xs hover:text-amber-400'>Нууцлал</button>
                            <div className='flex space-x-4 mt-4'>
                                <button className='flex items-center justify-center'>
                                    <i className="fab fa-facebook-f text-neutral-300 hover:text-blue-400" style={{ fontWeight: '300' }}></i>
                                </button>
                                <button className='flex items-center justify-center'>
                                    <i className="fab fa-instagram text-neutral-300 hover:text-pink-500"></i>
                                </button>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}