export default function Cards({link, headline,cardimg,cardtext,cardimgalt}) {
    const https = "https://";
    return(
        <a href={https + link}>
            <div className='card'>
                <div className="flex">
                    <img src={cardimg} className='card-img' alt={cardimgalt}></img>
                    <span className='card-title'>{headline}</span>
                </div>
                <p className='card-desc'>
                    {cardtext}
                </p>
                <p className='card-url'>
                    {link}
                </p>
            </div>
        </a>
    )
}