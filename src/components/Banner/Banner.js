import bannerImg from '../../assets/images/banner.jpg'
import './Banner.css'

export default function Banner() {
    return (
        <div id="banner" className='large-block'>
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={bannerImg} />
        </div>
    )
}