export const Chuck = () => {
    const content = {
        title: "1.Chuck Bass",
        p1: "Chuck Bass (do Ed Westwick thủ vai) là một trong những nhân vật quan trọng và phức tạp nhất trong Gossip Girl. Anh là công tử giàu có, quyến rũ, đầy mưu mô và có sự phát triển đáng kinh ngạc qua các mùa phim.",
        p2: "Chuck Bass là hình mẫu điển hình của một bad boy với vẻ ngoài lịch lãm, phong thái tự tin và lối sống xa hoa. Anh thường xuyên tiệc tùng, uống rượu và có lối sống phóng túng. Tuy nhiên, đằng sau vẻ ngoài bất cần, Chuck là một người cực kỳ thông minh, có tham vọng và rất trung thành với những người anh thực sự quan tâm. Anh sở hữu một tầm nhìn chiến lược, giúp anh xây dựng đế chế kinh doanh riêng và trở thành một ông trùm khách sạn khi còn rất trẻ.",
        img: '/chuck.jpg'
    }
    return(
        <>
            <div className="content">
                <h4>{content.title}</h4>
                <p>{content.p1}</p>
                <img src={content.img} alt={content.title} />
                <p>{content.p2}</p>
            </div>
        </>
    )
}