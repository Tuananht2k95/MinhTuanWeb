import { Content } from "../../components/content/content"

export const Menu = () => {
    const data = {
        title: "Tiểu sử và nội dung chính ",
        p: [
           "Gossip Girl là một series phim truyền hình đình đám của Mỹ, được phát sóng lần đầu vào năm 2007 trên kênh The CW. Bộ phim dựa trên loạt tiểu thuyết cùng tên của Cecily von Ziegesar và nhanh chóng trở thành hiện tượng trong giới trẻ nhờ nội dung hấp dẫn, thời trang đẳng cấp và những mối quan hệ đầy kịch tính.",
           "Bối cảnh của Gossip Girl diễn ra tại Upper East Side, khu vực giàu có bậc nhất New York, nơi tập trung giới thượng lưu và những thiếu niên con nhà giàu. Câu chuyện xoay quanh nhóm học sinh trung học danh giá và cuộc sống xa hoa, đầy những bí mật, âm mưu và các mối quan hệ rắc rối của họ.",
           "Điểm đặc biệt của series là sự xuất hiện của 'Gossip Girl' – một blogger ẩn danh chuyên đăng tải tin đồn và bí mật của những người thuộc giới thượng lưu, gây ra hàng loạt mâu thuẫn và kịch tính.",
           "Bộ phim kết hợp yếu tố drama, tình yêu, phản bội và âm mưu, phản ánh một thế giới xa hoa nhưng đầy áp lực của giới trẻ trong xã hội thượng lưu.",
        ]
        ,img: '/gossip.jpg'
    }
    return(
        Content(data)
    )
}