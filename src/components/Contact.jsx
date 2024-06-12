export const Contact = () => {
  return (
    <section
      id="Contact"
      className="w-full lg:py-10 flex flex-col items-center  bg-[#0D4A31]  "
    >
      <div
        id="container-for-contact"
        className="container flex flex-col w-full lg:px-16 p-5 gap-12 text-white "
      >
        <div
          id="connection-channels"
          className="flex flex-col lg:flex-row   justify-between gap-10"
        >
          <div id="sol-taraf-connection" className="w-full flex flex-col gap-5">
            <div className="flex flex-col items-center lg:items-start gap-4 ">
              <h3 className="text-3xl w-full text-center lg:text-left  font-semibold tracking-wide">
                İletişim
              </h3>
              <div className="w-16 h-1 bg-white "></div>

              <p className="text-slate-300 text-center lg:text-left tracking-wide leading-relaxed">
                Her türlü soru ve sigorta ihtiyaçlarınız için bizimle iletişime
                geçmekten çekinmeyin. Uzman ekibimiz, size en iyi hizmeti sunmak
                ve en uygun sigorta çözümlerini sağlamak için her zaman hazır.
                Bize telefonla, e-posta ile veya formu doldurarak
                ulaşabilirsiniz. Sizin için buradayız!
              </p>
            </div>

            <div className="w-full flex flex-col gap-5 bg-white text-[#093624] p-2 rounded-md">
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="w-12 h-12 rounded-full flex flex-col items-center justify-center bg-gradient-to-r from-[#1F8058] to-[#0D4A31]">
                  <img src="src/assets/vector.svg" alt="" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <p className="font-bold">E-Posta</p>

                  <a href="to:murath31@gmail.com">info@febsigorta.com.tr</a>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="w-12 h-12 rounded-full flex flex-col items-center justify-center bg-gradient-to-r from-[#1F8058] to-[#0D4A31]">
                  <img src="src/assets/vector-1.svg" alt="" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <p className="font-bold">Telefon</p>

                  <a href="to:murath31@gmail.com">0312 231 31 69</a>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="w-12 h-12 rounded-full flex flex-col items-center justify-center bg-gradient-to-r from-[#1F8058] to-[#0D4A31]">
                  <img src="src/assets/vector-2.svg" alt="" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <p className="font-bold">Adres</p>

                  <a href="to:murath31@gmail.com">Yüksel Cad. Kızılay Ankara</a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="sag-taraf-connection"
            className="w-full flex flex-col  bg-white text-[#093624] p-2 rounded-md"
          >
            <form className="w-full h-full p-2 flex flex-col justify-between">
              <div className="flex flex-col mb-5 w-full gap-5 items-end">
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="İsminiz"
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="E-Posta Adresiniz"
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Telefon Numaranız"
                  required
                />
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Mesajınız"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex flex-col  items-center justify-center font-bold text-[#2B2B31] tracking-wide  h-12 bg-[#F8C140] rounded-md hover:text-white/60 duration-300 transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
