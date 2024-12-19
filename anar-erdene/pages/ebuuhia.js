


import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-white h-full">
            <header className="bg-white h-20">
                <div className="bg-white w-full h-20 flex justify-center items-center space-x-96">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center cursor-pointer">
                            <Image src="/logo.svg" height={50} width={50} alt="Logo" />
                            <p className="pl-4 text-[100%] font-extrabold text-[#4334B4]">Буухиа элч</p>
                        </div>
                        <nav className='ml-14 space-x-6'>
                            <button className="text-sm text-[#6a5adf] font-semibold cursor-pointer">Нүүр</button>
                            <button className="text-sm text-[#6a5adf] font-semibold cursor-pointer">Үйлчилгээ</button>
                            <button className="text-sm text-[#6a5adf] font-semibold cursor-pointer">Бидний тухай</button>
                            <button className="text-sm text-[#6a5adf] font-semibold cursor-pointer">Үйл ажилгаа</button>
                            <button className="text-sm text-[#6a5adf] font-semibold cursor-pointer">Аппликэйшн</button>
                            <button className="text-sm text-[#6a5adf] font-semibold cursor-pointer">Бүсчлэл</button>
                            <button className="text-sm text-[#6a5adf] font-semibold cursor-pointer">Коммик</button>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-6 ml-48">
                        <button className="text-sm text-[#6a5adf] font-semibold cursor-pointer">Бүртгүүлэх</button>
                        <button className="bg-[#6a5adf] rounded-full px-6 py-3 text-sm text-white font-semibold cursor-pointer">Нэвтрэх</button>
                    </div>
                </div>
            </header>

            <div className="relative w-full h-[797px]">
                <Image className="object-cover" src="/home-bg.webp" layout="fill" alt="Background" />
                <div className="bg-gradient-to-l from-gray-200 from-50% via-gray-200 via-10% w-full h-full absolute top-0">
                    <div className="text-center flex absolute top-[33.5%] left-[8%] mx-auto">
                        <div className="mb-16 space-y-6 text-left">
                            <h1 className="text-4xl text-black font-extrabold">
                                ХYРГЭЛТИЙН
                                <br />
                                <span className="text-[#6A5ADF]">АСУУДЛАА</span> БИДЭНД
                                <span className="text-[#6A5ADF]"> ДААТГА</span>
                            </h1>

                            <p className="text-black text-lg">
                                Та дараах товч дээр дарж хүргэлтээ хаана
                                <br />
                                байгааг шалгах боломжтой.
                            </p>

                            <button className="flex items-center font-md text-sm text-white bg-[#6a6adf] rounded-full py-3 px-5 absolute top-[90%]">
                                Хүргэлт шалгах
                                <img className="ml-6" src="/vector.svg" alt="Vector icon" />
                            </button>
                        </div>

                        <div className="w-[700px] absolute left-[142%] top-[-75%]">
                            <Image src="/frame.png" width={700} height={400} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Information Section */}
            <div className="flex items-center justify-center text-black">
                <div className="bg-white absolute bottom-[-35px] rounded-xl shadow-xl flex justify-center items-center text-black w-[38%] h-[14%] space-x-16 my-[-0.1%]">
                    <div className="space-x-3 flex mr-4 items-center">
                        <img className="w-[49%]" src="/user.png"></img>
                        <div className="text-sm">
                            <p className="font-extrabold">10 000+</p>
                            <p>Харилцагч</p>
                        </div>
                    </div>
                    <div className="space-x-3 flex mr-4 items-center">
                        <img className="w-[49%]" src="/map.png"></img>
                        <div className="text-sm">
                            <p className="font-extrabold">30+</p>
                            <p>Бүсчлэл</p>
                        </div>
                    </div>
                    <div className="space-x-3 flex mr-4 items-center">
                        <img className="w-[49%]" src="/send.png"></img>
                        <div className="text-sm">
                            <p className="font-extrabold">1000+</p>
                            <p>Хүргэлт</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-40">
                <div className="flex flex-col items-center space-y-8 w-[706px]">
                    <div className="flex space-x-4 w-full">
                        <span className="text-5xl font-semibold text-black">1</span>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#6a6adf]">Хүргэлтийн үйлчилгээ</h2>
                            <p className="w-auto text-black">Бид харилцагч үйлчлүүлэгчдийн бараа бүтээгдэхүүн илгээмжүүдийг очиж аван оффистоо авчирч Улаанбаатар хотыг 35 хүртэлх бүсчлэлд хуваан ялган ангилж хэрэглэгчдэд гараас гарт найдвартай хүргэлтийн үйлчилгээг үзүүлж байна.</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 w-full">
                        <span className="text-5xl font-semibold text-black">2</span>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#6a6adf]">Агуулах үйлчилгээ</h2>
                            <p className="w-auto text-black">Агуулах үйлчилгээ нь манай харилцагч бүр өөрсдийн бараа бүтээгдэхүүнийг манай агуулахад үнэ төлбөргүй байршуулан өөрөө хүргэлтээ бэлдэх шаардлагагүйгээр шууд хүргэлтийн захиалгаа үүсгэж цаг заваа хэмнэхэд чиглэсэн үйлчилгээ юм.</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 w-full">
                        <span className="text-5xl font-semibold text-black">3</span>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#6a6adf]">Операторын үйлчилгээ</h2>
                            <p className="w-auto text-black">Операторын үйлчилгээ нь хүргэлтээ бэлдэж амжихгүй байгаа харилцагч нартаа зориулсан үйлчилгээ юм. Ажил ихтэй завгүй үед хүргэлт бэлдэхэд хамгийн их ачаалал үүсгэдэг зүйл нь утсаар холбогдож хаяг тодруулах үйл явц юм. Манай операторын үйлчилгээг сонгосноор таны ажлыг бид хийж хаягийн байршлыг авах болно.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
