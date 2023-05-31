import './ScrollDirection.css'
import * as Scroll from 'react-scroll'

const ScrollDirection =(props)=>{

    const LinkScroll = Scroll.Link
    
    return(
        <LinkScroll 
        className='LinkScroll'
        activeClass="active"
        to={props.direction} 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500}>
            {props.name}
        </LinkScroll>
    )
}

export default ScrollDirection