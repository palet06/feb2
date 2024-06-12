const Slogan = () => {
  return (
    <section
      id="slogan-section"
      className="w-full lg:py-10 items-center flex flex-col  bg-white mt-10"
    >
      <div
        id="container-for-slogan"
        className="container flex flex-col w-full lg:px-16 p-5 gap-7"
      >
        <div className="flex flex-col w-full lg:flex-row items-center lg:gap-1 lg:items-start gap-12">
          <div
            id="sol-taraf"
            className="flex flex-col lg:order-2 lg:w-[40%] lg:items-start items-center lg:gap-10 gap-20"
          >
            <h3 className="flex flex-col items-center  lg:items-start lg:text-left gap-5 text-3xl text-center text-[#093624] font-semibold tracking-wide  ">
              Hazırlıksız Yakalanmayın <br /> Sizi Korumaya Alıyoruz
              <div className="w-16 h-1 bg-slate-400 "></div>
            </h3>
            <p className="text-[#093624] text-justify tracking-wide leading-relaxed">
              Hayatın beklenmedik anlarına karşı hazırlıklı olmanızı sağlamak
              için buradayız. Tecrübeli ekibimiz ve kapsamlı sigorta
              çözümlerimizle, sizi ve sevdiklerinizi her türlü riske karşı
              koruma altına alıyoruz. Güvenilir ve hızlı hizmet anlayışımızla,
              her zaman yanınızdayız. Kendinizi güvende hissedin, çünkü biz
              sizin için buradayız.
            </p>
          </div>
          <div id="sag-taraf" className="lg:order-1 lg:w-[60%] ">
            <img
              className=" rounded-bl-2xl rounded-tr-2xl rounded-tl-[75px] rounded-br-[75px]"
              src="src/assets/slogan.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
