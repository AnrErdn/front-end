import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-100">
            Hi niggers!
          </h1>
          <p className="text-xl mt-4">Би Nest Education IT сургуульд сурдаг.</p>
          <a
            href="#about"
            className="inline-block mt-6 px-8 py-3 text-lg font-medium text-gray-900 bg-indigo-400 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-indigo-500 duration-300"
          >
            Энд нэг дараад үздээ.
          </a>
        </div>
      </header>

      <section id="about" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-300 mb-8">Миний тухай</h2>
          <div className="flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-500">
              <Image
                src="/ca.png"
                alt="mniii zurg"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-400">
            Намайг Анар-Эрдэнэ гэдэг. Тхх, тэгээд өөр ямар мэдээлэл оруулах аа
            мэдэхгүй худлаа үнэн юм бичээл сууж байна.
          </p>
        </div>
      </section>

      <section id="projects" className="py-16 px-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">
            Өчигдөр хэдэн цаг оролдож байж хийсэн хэдэн юм.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-indigo-700 duration-300">
              <Image
                src="/photo1.jpg"
                alt=""
                width={400}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-semibold mt-4 text-indigo-400">
                WHAT
              </h3>
              <p className="mt-2 text-gray-400">Cool байна уу? </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-indigo-700 duration-300">
              <Image
                src="/photo1.jpg"
                alt=""
                width={400}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-semibold mt-4 text-indigo-400">
                THE
              </h3>
              <p className="mt-2 text-gray-400">
                Заримыг бол copy хийсоон, угаасаа цаг бага байсын тхх. Гэхдээ
                гоё хийсэн байгааздэ.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-indigo-700 duration-300">
              <Image
                src="/photo1.jpg"
                alt=""
                width={400}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-semibold mt-4 text-indigo-400">
                HELL
              </h3>
              <p className="mt-2 text-gray-400">
                Tailwind-н бараг ихэнхийг нь мартчиж. Бүр зураг яаж оруулдаг
                байснаа мартсан, дахиад сурсан.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">
            Надтай холбогдмоор байна уу?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Доор утас бас миний цахим шуудан байгаа. Холбогдоод надаас данс
            аваад мөнгө хийгээрэй хө.
          </p>
          <div className="mt-8">
            <p className="mt-4 text-lg text-gray-300">
              Утас: <span className="text-indigo-300">+976 95211987</span>
            </p>
            <p className="mt-2 text-lg text-gray-300">
              Цахим шуудан:{" "}
              <a href="mailto:anarerdene@gmail.com" className="text-indigo-300">
                anarerdenegantulga34@gmail.com
              </a>
            </p>
          </div>
          <a
            href="mailto:anarerdenegantulga34@gmail.com"
            className="inline-block mt-8 px-8 py-3 text-lg font-medium text-gray-900 bg-indigo-400 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-indigo-500 duration-300"
          >
            Send me MONEY!
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-4 text-center">
        <p>© 2024 АнарЭрдэнэ.</p>
      </footer>
    </div>
  );
}
