export const Content = (data) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="content d-flex-column mx-5 col-11 col-sm-10 col-md-8 col-lg-6">
                <h3 className="p-2">{data.title}</h3>
                <img className="d-block mx-auto mb-3" src={data.img} alt={data.title} />
                {
                    data.p.map((element, index) => (
                        <p key={index}>{element}</p>
                    ))
                }
            </div>
        </div>
    )
}