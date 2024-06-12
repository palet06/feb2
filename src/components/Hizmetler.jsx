export const Hizmetler = () => {
  return (
    <section
      id="insurances-list-section"
      className="w-full flex flex-col items-center  bg-white mt-10 "
    >
      <div
        id="container-for-insurances"
        className="container flex flex-col w-full p-5 lg:px-16 gap-7"
      >
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-3xl text-center  text-[#093624] font-semibold tracking-wide">
            Hizmetlerimizden Bazıları
          </h3>
          <div className="w-16 h-1 bg-slate-400 "></div>
        </div>
        <div
          id="card-list"
          className="flex flex-col w-full lg:flex-row   gap-7"
        >
          <div
            id="card-itself"
            className="flex flex-col  grow pb-3.5 w-full bg-white rounded-md shadow-2xl max-md:mt-7 gap-5 "
          >
            <div id="card-image">
              <img
                loading="lazy"
                src="src/assets/gss.png"
                className="w-full aspect-[1.11] "
              />
            </div>
            <div id="card-header">
              <h3 className="text-2xl font-semibold text-center text-[#093624]">
                Genel Sağlık Sigortası
              </h3>
            </div>
            <div id="card-desc">
              <p className="text-[#093624] text-center tracking-wide leading-relaxed">
                Temel sağlık ihtiyaçlarınızı karşılamak için tasarlanmış bir
                sigorta türüdür. Doktor ziyaretleri, ilaçlar, hastane masrafları
                gibi sağlık harcamalarını kapsar.
              </p>
            </div>
          </div>
          <div
            id="card-itself"
            className="flex flex-col grow pb-3.5 w-full bg-white rounded-md shadow-2xl max-md:mt-7 gap-5 "
          >
            <div id="card-image">
              <img
                loading="lazy"
                src="src/assets/dask.png"
                className="w-full aspect-[1.11]"
              />
            </div>
            <div id="card-header">
              <h3 className="text-2xl font-semibold text-center text-[#093624]">
                DASK
              </h3>
            </div>
            <div id="card-desc">
              <p className="text-[#093624] text-center tracking-wide leading-relaxed">
                Ev veya işyerinizin deprem gibi doğal afetlerden kaynaklanan
                zararlarını karşılayan bir sigorta türüdür. Yapılarınızı güvence
                altına alır.
              </p>
            </div>
          </div>
          <div
            id="card-itself"
            className="flex flex-col grow pb-3.5 w-full bg-white rounded-md shadow-2xl max-md:mt-7 gap-5 "
          >
            <div id="card-image">
              <img
                loading="lazy"
                src="src/assets/kasko.png"
                className="w-full aspect-[1.11]"
              />
            </div>
            <div id="card-header">
              <h3 className="text-2xl font-semibold text-center text-[#093624]">
                KASKO
              </h3>
            </div>
            <div id="card-desc">
              <p className="text-[#093624] text-center tracking-wide leading-relaxed">
                Aracınızı olası kazalara, hırsızlığa ve doğal afetlere karşı
                koruyan bir araç sigortası türüdür. Aracınızın değerini ve sizin
                güvenliğinizi garanti altına alır.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row  items-center justify-center ">
          <a
            className="w-full lg:w-[30%] flex flex-col items-center justify-center text-xl font-bold text-[#2B2B31] tracking-wide  h-12 bg-[#F8C140] rounded-md hover:text-white/60 duration-300 transition-colors"
            href="#"
          >
            Diğer Hizmetlerimiz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hizmetler;
