export const Clients = () => {
  return (
    <section
      id="clients"
      className="w-full lg:py-10 flex flex-col items-center bg-[#F0FAF6]"
    >
      <div
        id="container-for-clients"
        className="container flex flex-col w-full h-full lg:px-16 p-5  gap-7 text-[#093624]"
      >
        <div className="hidden lg:flex flex-col items-center lg:w-full lg:items-start gap-5">
          <h3 className="flex flex-col items-center w-full gap-5 text-3xl text-center  text-[#093624] font-semibold tracking-wide">
            Müşterilerimiz
            <div className="w-16 h-1 bg-slate-400 "></div>
          </h3>
        </div>
        <div className="relative flex flex-col lg:flex-row items-center sm:gap-14 lg:gap-10 gap-5">
          <h3 className="lg:hidden flex flex-col items-center gap-5 text-3xl text-center text-[#093624] font-semibold tracking-wide">
            Müşterilerimiz
            <div className="w-16 h-1 bg-slate-400 "></div>
          </h3>
          <img
            className="hidden absolute !m-[0] top-[-30px] left-0 z-[-1] "
            alt=""
            src="src/assets/quote.svg"
          />
          <img
            className="hidden absolute !m-[0] top-[150px] right-[50px] z-[1]"
            alt=""
            src="src/assets/tirnak.svg"
          />
          <p className="mt-4 tracking-wide leading-loose">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            Bu sigorta şirketi ile tanışmadan önce standart poliçelerle yüksek
            primler ödüyordum. Ancak burada tamamen bana özel hazırlanan
            poliçeler sayesinde, gerçekten ihtiyacım olan kapsamda sigortalandım
            ve büyük ölçüde tasarruf ettim. Hem bütçeme uygun hem de güven
            verici bir hizmet almak harika!
          </p>
          <p className="mt-4 tracking-wide leading-loose">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            Sigorta ihtiyaçlarımın tam olarak karşılandığı ve bana özel çözümler
            sunan bu şirketle çalışmak büyük bir rahatlık. Poliçem tamamen benim
            ihtiyaçlarıma göre tasarlandığı için gereksiz ödemelerden kurtuldum
            ve kendimi her zaman güvende hissediyorum. Bu kadar
            kişiselleştirilmiş bir hizmet bulmak zor!
          </p>
          <p className="mt-4 tracking-wide leading-loose">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            Tamamlayıcı sağlık sigortası konusunda bana özel çözümler sunan bu
            sigorta şirketiyle çalışmak, sağlık masraflarım konusunda büyük bir
            rahatlık sağladı. Poliçem tamamen benim ve ailemin ihtiyaçlarına
            göre tasarlandığı için, kendimi her zaman güvende
            hissediyorum.İlgileri için şirkete teşekkür ederim
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
