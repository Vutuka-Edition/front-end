import React from 'react';

import booksImg from '../../assets/images/books.jpg';
import readerImg from '../../assets/images/reader.jpg';

const About: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-32 px-4 lg:px-20">
      <div className="max-w-[80vw] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={booksImg}
            alt="Vutuka Edition Library"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <img
            src={readerImg}
            alt="Stack of books"
            className="absolute -bottom-6 -right-6 w-32 md:w-64 h-32 md:h-64 rounded-xl shadow-md object-cover border-4 border-white"
          />
        </div>

        <div className="">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-main-hover">Vutuka Edition</span>
          </h2>
          <p className="text-md lg:text-lg text-gray-600 leading-relaxed mb-2">
            We are a modern publishing house and digital library, dedicated to connecting people
            with stories that inspire, educate, and preserve cultural heritage. Our mission is to
            make literature accessible to all, whether through physical books or our expanding
            online catalog.
          </p>
          <p className="text-md lg:text-lg text-gray-600 leading-relaxed mb-8">
            We work with diverse authors, educators, and readers to curate works that spark
            imagination and build connections. From publishing services to community reading
            programs, Vutuka Edition is more than a publisher as we are a bridge between creators
            and audiences.
          </p>

          {/* Feature list */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">📚 Publishing</h3>
              <p className="text-gray-600 text-sm">
                Guiding manuscripts from concept to published masterpiece.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">🌐 Digital Library</h3>
              <p className="text-gray-600 text-sm">
                Access books anytime, anywhere on our online platform.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">🤝 Community</h3>
              <p className="text-gray-600 text-sm">
                Book clubs, reading drives, and literacy outreach programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
