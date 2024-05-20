import { Link } from 'react-router-dom'

export function Home () {
    return (

        <>
        <h1>Home</h1>
        <Link to="/">Home</Link>
        <Link to="Weddings"> Weddings</Link>
        <Link to="Maternity"> Maternity</Link>
        <Link to="Events"> Events</Link>
        <Link to="Quinces"> Quinces</Link>
        <Link to="Family"> Family</Link>
        <Link to="Portraits"> Portraits</Link>
        <Link to="Video"> Video</Link>
        
        </>
        
    )
}

// export default Home;