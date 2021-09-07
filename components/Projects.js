import Link from 'next/link'

const LinkButton = ({title, href}) => {
  return (
    <a
      className='w-32 px-10 py-3 bg-word rounded-xl text-secondary text-xl font-bold focus:outline-none'
      href= {href}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  )
}

const Post = ({post}) => {
  const { title, description, image, live, repo } = post
  return (
    <div className={`flex flex-col lg:flex-row justify-evenly py-10`}>
      <img className='bg-secondary border lg:w-5/12 opacity-70' src={image} alt={image}/>
      <div className='lg:w-1/2 pl-4 pt-4 lg:pt-0 flex flex-col justify-center'>
        <h1 className='text-primary-dark text-center lg:text-left text-3xl font-bold tracking-tighter'>{title}</h1>
        <p className='text-primary pt-4'>
          {description}
        </p>
        <div className='flex justify-center lg:justify-start flex-row pt-6 lg:pt-2 gap-x-2 gap-y-2'>
          {live && <LinkButton href={live} title='LIVE' />}
          {repo && <LinkButton href={repo} title='REPO' />}
        </div>
      </div>
    </div>
  )
}

const Projects = (props) => {

  const POST = [
    {
      title: 'Chum',
      description:
      'The biggest e-commerce platform in the world. A 7 page project with JWT authentication.\
      Membership allows users to act as sellers and list products or shop as buyers by adding to cart. \
      Made with NextJs, Django, PostgreSQL, and Nginx. Containerized with Docker and hosted on AWS.',
      image: 'demo.jpg',
      live: 'http://demo.danielchum.com/',
      repo: 'https://github.com/daniel-chum/demo-ecommerce'
    },
    {
      title: 'Web Scrapers',
      description:
      'Multiple web scraping projects capable of extracting at least 50,000 dynamic pages per day.\
      Capable of solving Geetest Captcha and Google ReCaptcha v2 without an online solving service. \
      Created with Puppeteer and Google Sheets as the database via Google API, with a custom rotating proxy service using Scrapoxy.',
      image: 'scraping.jpg',
    }

  ]

  return (
    <section className='w-11/12 xl:w-7/12 pt-32 mx-auto font-open-sans text-work-dark'>
      <h1 className='pb-10 text-secondary-dark text-3xl text-center font-bold tracking-tight'>
        Projects I Worked On
      </h1>
      {POST.map((post, index) => (
        <>
         <Post key={index} post={post} />
        </>
      ))}
    </section>
  );

}

export default Projects;