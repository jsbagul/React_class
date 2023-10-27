import './navbar.css'
function Navbar(){
    return(
        <div className='body'>
            {/* <img src="https://assets.website-files.com/63fc977c14aaea404dce4439/64b79e1528c7d7338ff846f9_BG.webp" alt="" width={'100%'} height={'100%'}/> */}
            <nav className="navtag">
            <hr />
                <article>
               
                <div id='logo'><img src="https://assets.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg" alt="" /></div>

                    <div className="navelement">SERVICES</div>
                    <div className="navelement">PROJECTS</div>
                    <div className="navelement">OPEN SOURCE</div>
                    <div className="navelement">OUR BLOG</div>
                    <div className="navelement" id='getIn' >GET IN TOUCH  <i id='pen' class="fa-regular fa-pen-to-square"></i></div>
                    <div  ><i id='bar' class="fa-solid fa-bars"></i></div>
                </article>
                <hr />
            </nav>
           
        </div>
    )
}
export default Navbar