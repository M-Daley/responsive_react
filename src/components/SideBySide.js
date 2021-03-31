const SideBySide = ({ src, alt, direction, title, bg }) => {
const imageLocation = direction == "left"

return (
    <section className={`${bg}`}>
            {imageLocation
                ? (
                    <div className="container">
                        <div className="split">
                            <div>
                                <h2>{title}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eos iure assumenda adipisci voluptatem eaque, quam nihil illo non, amet tenetur earum, incidunt sunt mollitia!</p>
                            </div>
                            <div>
                                <img src={src} alt={alt}/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="split">
                            <div>
                                <img src={src} alt={alt}/>
                            </div>
                            <div>
                                <h2>{title}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eos iure assumenda adipisci voluptatem eaque, quam nihil illo non, amet tenetur earum, incidunt sunt mollitia!</p>
                            </div>
                        </div>
                    </div>
                )
            }
    </section>
)}

export default SideBySide;