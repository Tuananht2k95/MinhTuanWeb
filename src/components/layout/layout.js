import { Outlet } from "react-router-dom";
import { Button, Navbar, NavDropdown } from "react-bootstrap";


export function Layout() {
    const domain = "https://minh-tuan-web.vercel.app";
    const navbarCollaps = [
        {
            title: "Nội dung chính",
            href: domain
        },
        {
            title: "Nhân vật chính",
            subItem: [
                {
                    title: "Serena van der Woodsen",
                    href: domain + "/nhan-vat-chinh/serena-van-der-woodsen"
                },  
                {
                    title: "Blair Waldorf",
                    href: domain + "/nhan-vat-chinh/blair-waldorf"
                },
                {
                    title: "Dan Humphrey",
                    href: domain + "/nhan-vat-chinh/dan-humphrey"
                },
            ]
        },
        {
            title: "Nhân vật đáng chú ý",
            subItem: [
                {
                    title: "Chuck Bass",
                    href: domain + "/nhan-vat-dang-chu-y/chuck-bass"
                },
                {
                    title: "Nate Archibald",
                    href: domain + "/nhan-vat-dang-chu-y/nate-archibald"
                },
                {
                    title: "Jenny Humphrey",
                    href: domain + "/nhan-vat-dang-chu-y/jenny-humphrey"
                },
            ]
        }
    ]

    return(
        <>
            <Navbar className="fixed-top bg-dark col-12" style={{left: '50%', transform: 'translateX(-50%)'}}>
                <Navbar.Brand href="/" className="col-3 ms-4 link-light">
                    Gossip Girl Fandom
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {
                        navbarCollaps.map(
                            (item) => {
                                if (item.subItem) {
                                    return(
                                        <NavDropdown title={item.title} className="btn btn-primary col-3 m-2">
                                            {
                                                item.subItem.map(
                                                    (subItem) => {
                                                        return <NavDropdown.Item href={subItem.href}>{subItem.title}</NavDropdown.Item>
                                                    }
                                                )
                                            }
                                        </NavDropdown>           
                                    )
                                } else {
                                    return <Button href={item.href} className="col-3 m-2">{item.title}</Button>
                                }
                            }
                        )                   
                    }
                </Navbar.Collapse>
            </Navbar>
            <Outlet/>
        </>
        
    );
};