import './sidenav.css'
function Sidenav() {
    return (
        <section className="s3 kfDSgG" aria-label="Main navigation." id="section-nav">
            <div className="wrapper">
            <ul className='flex'>
                <li><button type="button" aria-label="Go to first section. Pitch." className="nav-bullet current"></button></li>
                <li><button type="button" aria-label="Go to second section. Cornerstone." className="nav-bullet"></button></li>
                <li><button type="button" aria-label="Go to third section. Experience." className="nav-bullet"></button></li>
                <li><button type="button" aria-label="Go to fourth section. Carriageway." className="nav-bullet"></button></li>
                <li><button type="button" aria-label="Go to fifth section. Contact." className="nav-bullet"></button></li>
            </ul>
            </div>
        </section>
    );
}

export default Sidenav;