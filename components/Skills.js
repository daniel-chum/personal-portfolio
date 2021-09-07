const Skills = (props) => {

  const ICONS = [
        '/django.png',
        '/nextjs.png',
        '/nodejs.png',
        '/tailwind.png',
        '/github.png',
        '/docker.png',
        '/digitalocean.png',
        '/react.png',
        '/aws.png'
    ]

  return (
    <section className='w-9/12 xl:w-7/12 pt-28 pb-60 mx-auto'>
      <h1 className='pb-12 text-secondary-dark text-3xl text-center font-bold tracking-tight'>
        Technologies I&apos;ve used
      </h1>
      <div className="bg-word rounded-xl border border-gray-200 shadow-md">
        <div className='py-2 flex flex-wrap justify-center items-center'>
          {ICONS.map((icon, index) => (
              <div key={index} className='mx-24 my-6 '>
                  <img
                    src={icon}
                    className='w-32 h-20 object-contain'
                    alt={icon}
                  />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;