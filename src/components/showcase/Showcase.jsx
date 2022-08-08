import './showcase.css'
import avatar from '../../assets/img/avatar young-man-standing-with-laptop.png'
function Showcase() {
    
    return (
        <header className='showcase section active s1'>
            <div className="wrapper flex">
                <div className="intro-text flex">
                    <div className="text flex">
                        <div className="flex">
                        <h1 >Desig</h1>
                        <h1 id='desig-ner'>ner</h1>

                        </div>
                        <h1 style={{ margin: '0 30px', color: 'white'}}>&</h1>
                        {/* <h1 className='developer'>D </h1> */}
                        {/* <h1 ><span className='e-letter'>e</span>veloper <span className='dot'>.</span></h1> */}
                        {/* <h1 className='developer' >Developer <span className='dot'>.</span></h1> */}
                        {/* <h1 className='developer'><span className='des-D-letter'>D</span>eveloper <span className='dot'>.</span></h1> */}
                        <div className='flex'>
                        <h1 className='des-D-letter'>D</h1>
                        <h1 className='developer'>eveloper <span className='dot'>.</span></h1>
                        </div>
                    </div>
                <div className="intro-words flex">
                    <span></span>
                    <span>Skilled at building AI projects that help make life easier and effective. 
                        <span className='view-Ai'> View AI Projects</span> 
                    </span>
                </div>
                <img className='avatar' src={avatar} alt="avatar" />
                </div>
                {/* <div className='scrolldown' style={{color: 'var(--soft-black-color)'}}>
                    <div className="chevrons">
                        <div className='chevrondown'></div>
                        <div className='chevrondown'></div>
                    </div>
                </div> */}
            </div>
        </header>
    );
}

export default Showcase;