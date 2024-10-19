import 'tailwindcss/tailwind.css';
const Landing = () => {
  return (
    <main> 
        <figure>
            <img className='hidden sm:block' src="http://localhost:3002/wow.png" alt="Wow" />
            <img className='md:hidden' src="http://localhost:3002/wow-mobile.png" alt="Wow" />
          </figure>
          <div className="mx-auto my-8 w-[90%] max-w-[1440px]">
            <div className="grid grid-cols-3 gap-6">
                <div>
                  <img src="http://localhost:3002/tile1.png" alt="Tile 1" />
                </div>
                <div>
                  <div><img src="http://localhost:3002/tile2.png" alt="Tile 2" /></div>
                  <div><img src="http://localhost:3002/tile3.png" alt="Tile 3" /></div>
                </div>
                <div>
                  <img src="http://localhost:3002/tile4.png" alt="Tile 4" />
                </div>
            </div>
          </div>
          <div className="mx-auto w-[90%] max-w-[1440px]">
            <h1 className="text-center text-4xl font-bold">So many ways to save this season.</h1>
            <h5 className="mt-2 text-center text-lg font-bold">Explore All Seasonal</h5>
            <div className="my-10 grid grid-cols-2 gap-8 transition-all md:grid-cols-6">
                <img src="http://localhost:3002/season1.png" alt="Season 1" />
                <img src="http://localhost:3002/season2.png" alt="Season 2" />
                <img src="http://localhost:3002/season3.png" alt="Season 3" />
                <img src="http://localhost:3002/season4.png" alt="Season 4" />
                <img src="http://localhost:3002/season5.png" alt="Season 5" />
                <img src="http://localhost:3002/season6.png" alt="Season 6" />
                <img src="http://localhost:3002/season1.png" alt="Season 1" />
                <img src="http://localhost:3002/season2.png" alt="Season 2" />
                <img src="http://localhost:3002/season3.png" alt="Season 3" />
                <img src="http://localhost:3002/season4.png" alt="Season 4" />
                <img src="http://localhost:3002/season5.png" alt="Season 5" />
                <img src="http://localhost:3002/season6.png" alt="Season 6" />
            </div>
          </div>
          <div className="mx-auto my-8 w-[90%] max-w-[1440px]">
            <section className="bx-carousel">Carousel goes here</section>
          </div> 
    </main>
  )
}

export default Landing