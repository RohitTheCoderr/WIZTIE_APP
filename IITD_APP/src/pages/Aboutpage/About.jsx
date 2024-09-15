// import TeamSection from '../../components/cards/aboutcusTrustcards/Ourteam'
// import Abouttrustcard from '../../components/cards/aboutcusTrustcards/Abouttrustcard'
// import Trustcard from '@/components/cards/customerTrustcard/Trustcard'
function About() {
    const aboutmainImg = "https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwHd84ktT1n-BhjX8HhzVtrvsH6RLRdS983M3Tz8eQDcvNZOXmZD6Sa0bce0TYwb5GM3AW0O2~US5TSCrk4a8CGjJ-KiYRhf2FWBgUe24gXwcKP47YflX6Bz8PkuaWVcx9praTqi0eNyh58eQ9LC4iof~BkwoOTqCSsOFTZbrfuqvcAhsEljcwJnSa7Mm5~ezNAMyJTz3qILzsGYaAIivQgdi0SXidNqFekMgW35SHocppaq2N9MC-OARmPB56oiiLLxcWRTLc7C~W1y1UHX3nSsEE5to~r2-BrD2TNw4I1VOc6moZDceyH2QPwQK3OFos407zHlseSMYICunmPMxg__"
    return (
        <div className=''>
            <div className='w-[100vw] ml-auto md:w-[100vw] md:justify-around lg:w-[90vw] my-4 sm:my-6 md:my-[3rem] h-auto flex flex-wrap-reverse items-center justify-center sm:justify-center lg:justify-between'>
                <div className=' w-[90vw] mt-6 md:mt-0 sm:w-[90vw] md:w-[17rem] lg:w-[35vw] xl:w-[35vw] 2xl:w-[40vw] h-auto'>
                    <h2 className='font-inter text-[1.4rem] text-center sm:text-start sm:text-[1.7rem] md:text-[2rem] 2xl:text-[4rem] font-Five my-1 tracking-wider capitalize'>our Story</h2>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[1.7rem] text-center sm:text-start font-inter tracking-wider my-4'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[1.7rem] text-center sm:text-start font-inter tracking-wider my-2'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>

                <div className='w-[95vw] sm:w-[90vw] md:w-[45vw]  lg:w-[48vw] xl:w-[48vw] h-auto'>
                    <img className="rounded-[0.25rem] " src={aboutmainImg} alt="Login" />
                </div>
            </div>
            {/* <div className='my-[5rem]'><Abouttrustcard /> </div> */}
            <div className=''>
                {/* <TeamSection /> */}
            </div>
            <div className='my-[5rem]'>
                {/* <Trustcard /> */}
            </div>
        </div>
    )
}

export default About