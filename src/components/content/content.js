export const Content = (data) => {
    return(
        <>
            <div className="content">
                <h4>{data.title}</h4>
                <img src={data.img} alt={data.title} />
                {
                    data.p.map(
                        (item) => {
                            return(
                                <p>{item}</p>
                            )
                        }
                    )
                }
            </div>
        </>
    )
}