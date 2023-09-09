import {logo} from '../assets'
const Hero = () => {
  return (
      <header className="w-full flex justify-center items-center flex-col">
          <nav className="flex justify-between items-center w-full mb-10 pt-3">
              <img src={logo} alt="sumz-logo" className="w-60 object-contain" />
              <button type="button" onClick={()=>window.open('https://github.com/ehteshamul51haque')} className='black_btn'>GitHub</button>
          </nav>
          <h1 className='head_text'>
              Summarize Articles with <br className='max-md:hidden'/>
              <span className='purple_gradient'>SummaWise</span>
          </h1>
          <h2 className='desc'>
              Elevate your reading with SummaWise,
              an open-source article summarizer that simplifies lengthy articles into concise, time-saving summaries.
          </h2>
    </header>
  )
}

export default Hero
