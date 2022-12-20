import './Banner.scss'

export default function Banner({ children, image }) {

    let bannerStyle = {
        backgroundImage: `url(${image})`
    }

    return (
        <div className='banner large-block' style={bannerStyle}>
            <h1 className='banner__title'>{children}</h1>
        </div>
    )
}