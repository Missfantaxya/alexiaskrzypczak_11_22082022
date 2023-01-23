// imports : styles
import "./Home.css"

// imports : data
import advertisements from "../data/advertisements"

// imports : components
import Mask from "./Mask.js"
import Thumb from "./Thumb"

/**
 * Renders a home page component
 * @returns {JSX.Element} A JSX element that represents the home page.
 */
function Home ()
{
  return (
    <>
      <Mask />
      <section className="thumbs">
        {advertisements.map((advertisement) =>(
          <Thumb
            key={ advertisement.id }
            {...advertisement}
          />
        ))}
      </section>
    </>
  )
}

export default Home
