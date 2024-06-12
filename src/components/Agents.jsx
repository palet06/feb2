const Agents = () => {
  return (
    <section
      id="agents-section"
      className="w-full lg:py-10  flex flex-col items-center  bg-[#F0FAF6]  "
    >
      <div
        id="container-for-agents"
        className="container flex flex-col lg:flex-row  w-full lg:justify-between lg:p-0 p-5 lg:px-16  gap-7 "
      >
        <div className="flex flex-col items-center lg:w-[40%] lg:items-start  gap-5">
          <h3 className="flex flex-col items-center lg:text-left lg:items-start gap-5 text-3xl text-center  text-[#093624] font-semibold tracking-wide">
            Güvenebileceğiniz <br />
            Tecrübeli Temsilciler
            <div className="w-16 h-1 bg-slate-400 "></div>
          </h3>

          <p className="text-[#093624] text-justify tracking-wide leading-relaxed">
            Güvenebileceğiniz tecrübeli temsilcilerimiz, yılların verdiği bilgi
            birikimi ve müşteri odaklı hizmet anlayışı ile size en uygun sigorta
            çözümlerini sunmak için burada. Sigorta ihtiyaçlarınızı anlamak ve
            en doğru seçenekleri sunmak için daima yanınızdayız. Bizimle,
            güvende olduğunuzu hissedeceksiniz.
          </p>
        </div>
        <div
          id="grid"
          className="grid grid-cols-2 lg:relative lg:w-[40%] min-h-[325px]   bg-gradient-to-r from-[#1F8058] to-[#0D4A31] rounded-xl"
        >
          <div className="col-span-1 h-40 flex flex-col items-center justify-center text-white text-center border-b-[2px] border-b-[#ADB2FF] border-r-[2px] border-r-[#ADB2FF]">
            <h3 className="font-bold text-2xl">1.040 +</h3>
            <p className="text-sm">OLUŞTURULMUŞ POLİÇE</p>
          </div>
          <div className="col-span-1 h-40  flex flex-col items-center justify-center text-white text-center border-b-[#ADB2FF] border-b-[2px]">
            <h3 className="font-bold text-2xl">27 +</h3>
            <p className="text-sm">SİGORTA ŞİRKETİ</p>
          </div>
          <div className="col-span-2 h-40 lg:col-span-1 flex flex-col items-center justify-center text-white text-center ">
            <h3 className="font-bold text-2xl">10 +</h3>
            <p className="text-sm">YILDIR SEKTÖRDE</p>
          </div>

          <div className="hidden p-1 h-40 text-xl lg:right-[-12px] lg:bottom-[-12px] lg:w-[57%] lg:min-h-[195px] lg:absolute lg:flex lg:shadow-2xl flex-col items-center rounded-xl drop-shadow-2xl bg-white ">
            <h3 className="font-bold  text-[#093624]">Yönlendirici Danışman</h3>
            <p className="text-sm text-center p-5 tracking-wide leading-relaxed">
              Aklınıza takılan sorular ile ilgili daha ayrıntılı bilgi almak
              için lütfen aramaktan çekinmeyin
            </p>
            <a
              className="px-10 flex flex-col  items-center justify-center text-xl font-bold text-[#2B2B31] tracking-wide  h-12 bg-[#F8C140] rounded-md hover:text-white/60 duration-300 transition-colors"
              href="#"
            >
              0312 231 31 69
            </a>
          </div>
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center rounded-md shadow-md p-5 bg-white ">
          <h3 className="font-bold text-2xl text-[#093624]">
            Yönlendirici Danışman
          </h3>
          <p className="text-sm text-center p-5 tracking-wide leading-relaxed">
            Aklınıza takılan sorular ile ilgili daha ayrıntılı bilgi almak için
            lütfen aramaktan çekinmeyin
          </p>
          <a
            className="px-10 flex flex-col  items-center justify-center text-xl font-bold text-[#2B2B31] tracking-wide  h-12 bg-[#F8C140] rounded-md hover:text-white/60 duration-300 transition-colors"
            href="#"
          >
            0312 231 31 69
          </a>
        </div>
      </div>
    </section>
  );
};

export default Agents;
