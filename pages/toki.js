import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <header className='fixed top-0 left-0 w-full z-50 bg-white shadow h-24'>
                <nav className='flex justify-between items-center py-5 px-[18%]'>
                    <div className='flex items-center'>
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
                <div className='bg-[#fff2d7] h-[95vh] flex flex-col items-center justify-center'>
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

                <div className='bg-[#fafafa] h-[95vh] flex items-center justify-center absolute'>
                    <div>
                        <Image 
                            src="/phone.png" 
                            alt="app image"
                            width={1050}
                            height={160}  
                        />
                    </div>
                    
                    <div className='space-y-8'>
                        <h2 className='text-yellow text-3xl font-bold'>
                            Toki Service
                        </h2>
                        <h3 className='text-black'>
                            Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
                        </h3>
                    </div>
                </div>
            </main>
        </div>
    );
}
