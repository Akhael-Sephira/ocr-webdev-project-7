import bannerImg from '../../assets/images/banner.jpg'
import './Banner.scss'

export default function Banner() {
    return (
        <div className='banner large-block'>
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
            <img className='banner__img' src={bannerImg} alt="banner" />
        </div>
    )
}