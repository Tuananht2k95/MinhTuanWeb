export const Content = (data) => {
    return(
        <>
            <div className="content d-flex-column mx-5">
                <h3 className="p-2">{data.title}</h3>
                <img className="d-block mx-auto mb-3" src={data.img} alt={data.title} />
                {
                    data.p.map((element, index) => (
                        <p key={index}>{element}</p>
                    ))
                }
            </div>
        </>
    )
}