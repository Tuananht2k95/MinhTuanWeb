import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/index.js";
import { Information } from "../modules/information/index.js";
import { Menu } from "../modules/menu/index.js";
import { Exam } from "../modules/exam/index.js";
import { Introduction } from "../modules/introduction/index.js";
import { CoCau } from "../modules/introduction/co-cau.js";
import { GioiThieuChung } from "../modules/introduction/gioi-thieu-chung.js";
import { PhongTruyenThong } from "../modules/introduction/phong-truyen-thong.js";
import { Lop10 } from "../modules/exam/lop10.js";
import { Lop11 } from "../modules/exam/lop11.js";
import { Lop12 } from "../modules/exam/lop12.js";
import { DanhChoGiaoVien } from "../modules/information/danh-cho-giao-vien.js";
import { DanhChoHocSinh } from "../modules/information/danh-cho-hoc-sinh.js";
import { DanhChoPhuHuynh } from "../modules/information/danh-cho-phu-huynh.js";

export const routers = createBrowserRouter([
    {
        path: '',
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <Menu></Menu>
            },
            {
                path: '/information',
                children: [
                    {
                        index: true,
                        element: <Information></Information>
                    },
                    {
                        path: 'danh-cho-hoc-sinh',
                        element: <DanhChoHocSinh></DanhChoHocSinh>
                    },
                    {
                        path: 'danh-cho-phu-huynh',
                        element: <DanhChoPhuHuynh></DanhChoPhuHuynh>
                    },
                    {
                        path: 'danh-cho-giao-vien',
                        element: <DanhChoGiaoVien></DanhChoGiaoVien>
                    }
                ]
            },
            {
                path: '/introduction',
                children: [
                    {
                        index: true,
                        element: <Introduction></Introduction>
                    },
                    {
                        path: 'co-cau',
                        element: <CoCau></CoCau>
                    },
                    {
                        path: 'gioi-thieu-chung',
                        element: <GioiThieuChung></GioiThieuChung>
                    },
                    {
                        path: 'phong-truyen-thong',
                        element: <PhongTruyenThong></PhongTruyenThong>
                    }
                ]
            },
            {
                path: '/exam',
                children: [
                    {
                        index: true,
                        element: <Exam />
                    },
                    {
                        path: 'lop10',
                        element: <Lop10></Lop10>
                    },
                    {
                        path: 'lop11',
                        element: <Lop11></Lop11>
                    },
                    {
                        path: 'lop12',
                        element: <Lop12></Lop12>
                    },
                ]
            }
        ]
    }
])