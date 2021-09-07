
const Introduction = (props) => {
  return (
    <div className="md:h-1/2 xl:h-4/6 3xl:h-1/2 bg-secondary pb-48 text-white font-lora flex flex-col items-center " style={{ clipPath: 'ellipse(80% 70% at 50% 30%)' }}>
      <div className="pt-20">
        <img className='mx-auto h-16 w-16' src='dan.png' alt='Daniel' />
        <h3 className='pt-6 text-center font-semibold text-4xl'>About me</h3>
        <p className='w-10/12 lg:w-8/12 mx-auto text-center tracking-tight pt-6 text-md sm:text-lg font-lora'>
          Over the years, my fascination with structured thinking has led me to a background in data & engineering.
          After my short coding experience in the mechanical engineering field, I&apos;ve found satisfaction from learning the fundamentals of computer science
          and software construction to exploring the emerging trends in the tech world (machine learning, web development, DevOps, etc.).
          In short, I am a problem solver who talks to computers. When not coding, I lift weights, watch the NBA, and leetcode (highly recommend).
        </p>
      </div>
    </div>
  );
}

export default Introduction;