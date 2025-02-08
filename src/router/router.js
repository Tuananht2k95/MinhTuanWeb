import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/layout.js";
import { Menu } from "../modules/menu/index.js";
import { Serena } from "../modules/nhan-vat-chinh/serena.js";
import { Blair } from "../modules/nhan-vat-chinh/blair.js";
import { NhanVatChinh } from "../modules/nhan-vat-chinh/index.js";
import { Dan } from "../modules/nhan-vat-chinh/dan.js";
import { NhanVatDangChuY } from "../modules/nhan-vat-dang-chu-y/index.js";
import { Chuck } from "../modules/nhan-vat-dang-chu-y/chuck.js";
import { Jenny } from "../modules/nhan-vat-dang-chu-y/jenny.js";
import { Nate } from "../modules/nhan-vat-dang-chu-y/nate.js";

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
                path: '/nhan-vat-chinh',
                children: [
                    {
                        index: true, 
                        element: <NhanVatChinh></NhanVatChinh>
                    },
                    {
                        path: 'blair-waldorf',
                        element: <Blair></Blair>
                    },
                    {
                        path: 'serena-van-der-woodsen',
                        element: <Serena></Serena>
                    },
                    {
                        path: 'dan-humphrey',
                        element: <Dan></Dan>
                    }
                ]
            },
            {
                path: '/nhan-vat-dang-chu-y',
                children: [
                    {
                        index: true,
                        element: <NhanVatDangChuY></NhanVatDangChuY>
                    },
                    {
                        path: 'chuck-bass',
                        element: <Chuck></Chuck>
                    },
                    {
                        path: 'nate-archibald',
                        element: <Nate></Nate>
                    },
                    {
                        path: 'jenny-humphrey',
                        element: <Jenny></Jenny>
                    }
                ]
            },
        ]
    }
])