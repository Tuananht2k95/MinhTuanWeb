export const Jenny = () => {
    const content = {
        title: "3.Jenny Humphrey ",
        p1: "Jenny Humphrey (do Taylor Momsen thủ vai) là một trong những nhân vật đáng chú ý của Gossip Girl. Xuất thân từ Brooklyn, cô luôn khao khát được trở thành một phần của thế giới thượng lưu Upper East Side. Tuy nhiên, tham vọng và những quyết định sai lầm đã khiến cô đánh mất chính mình trong hành trình đó.",
        p2: "Jenny là một cô gái sáng tạo, tài năng nhưng cũng cực kỳ tham vọng. Cô có năng khiếu thiết kế thời trang và luôn muốn khẳng định bản thân. Tuy nhiên, khát vọng quá lớn khiến cô sẵn sàng làm mọi thứ để đạt được vị trí mà mình mong muốn, thậm chí cả những hành động mưu mô, lừa dối. Ban đầu, Jenny là một cô gái hồn nhiên, tốt bụng, nhưng khi tiếp xúc với thế giới thượng lưu, cô dần trở nên thủ đoạn hơn, thậm chí có lúc đánh mất hoàn toàn con người cũ của mình."
        ,img: '/jenny.jpg'
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