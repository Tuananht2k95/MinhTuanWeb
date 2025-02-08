export const Nate = () => {
    const content = {
        title: "2.Nate Archibald",
        p1: "Nate Archibald (do Chace Crawford thủ vai) là một trong những nhân vật trung tâm của Gossip Girl. Anh là hình mẫu của một chàng trai lý tưởng với ngoại hình điển trai, xuất thân danh giá và tính cách thân thiện. Tuy nhiên, đằng sau vẻ ngoài hoàn hảo ấy là một chàng trai luôn đấu tranh để tìm ra con đường riêng của mình."
        ,p2: "Nate là một chàng trai tử tế, tốt bụng và trung thành, nhưng cũng khá do dự và dễ bị cuốn vào hoàn cảnh xung quanh. Anh thường bị giằng xé giữa mong muốn làm điều đúng đắn và áp lực từ gia đình, bạn bè. Là người duy nhất trong nhóm bạn không bị cuốn vào những âm mưu hay thủ đoạn, Nate đóng vai trò như một “lương tâm” của Gossip Girl. Tuy nhiên, điều này cũng khiến anh trở thành nhân vật ít kịch tính hơn so với Blair, Chuck hay Serena"
        ,img: '/nate.jpg'
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