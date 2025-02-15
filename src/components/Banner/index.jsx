import Image from "next/image";
import banner from "../../../public/banner.jpg";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            প্রশ্নের সহজ সমাধান, <br className="hidden md:inline" /> এক ক্লিকে!
          </h1>
          <p className="mt-6 text-lg opacity-90 leading-relaxed">
            আপনার প্রয়োজনীয় প্রশ্ন খুঁজুন, দ্রুত উত্তর পান এবং সহজেই শিখুন।<br /> 
            আমাদের প্ল্যাটফর্মে পাবেন সকল বিষয় ও শ্রেণীর প্রশ্নের নির্ভরযোগ্য সমাধান।
          </p>
          <ul className="mt-6 text-base opacity-90 list-disc list-inside space-y-2">
            <li>সহজ ও দ্রুত প্রশ্ন অনুসন্ধান</li>
            <li>বিশ্বাসযোগ্য ও সঠিক উত্তর</li>
            <li>নতুন প্রশ্ন জিজ্ঞাসার সুযোগ</li>
            <li>ছাত্র ও শিক্ষকদের জন্য সহায়ক</li>
          </ul>
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <a href="/explore" className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition">
              প্রশ্ন অনুসন্ধান করুন
            </a>
            <a href="/ask" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition">
              প্রশ্ন জিজ্ঞাসা করুন
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <Image
              src={banner}
              alt="Bangla Question Management"
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
