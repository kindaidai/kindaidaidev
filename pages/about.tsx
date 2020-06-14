import Link from 'next/link'

const About: React.FC = () => (
  <section>
    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="inline-flex">
              <img
                src="/profile.png"
                alt="profile"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-medium mt-4 text-lg">
                Kindaichi Dai (金田一 大)
              </h2>
              <div className="w-20 h-1 bg-indigo-500 rounded mt-2 mb-4" />
              <p>kindai.0911@gmail.com</p>
              <div className="flex flex-col text-base text-gray-600">
                <a
                  href="https://github.com/kindaidai/Curriculum-Vitae"
                  className="hover:text-gray-900"
                >
                  Curriculum Vitae
                </a>
                <Link href="/">
                  <a className="hover:text-gray-900">blog</a>
                </Link>
                <a
                  href="https://note.com/kindai0911"
                  className="hover:text-gray-900"
                >
                  note(new)
                </a>
                <a
                  href="http://kindai-dai.hatenablog.com/"
                  className="hover:text-gray-900"
                >
                  Hatena(old)
                </a>
              </div>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left flex justify-center items-center">
            <div className="leading-relaxed text-lg mb-4">
              {`I'm a software engineer. I learn a lot of things from a lot of
              people every day in my engineering career.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
