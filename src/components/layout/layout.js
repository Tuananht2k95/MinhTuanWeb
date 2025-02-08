import { Outlet } from "react-router-dom";
import { Button, Navbar, NavDropdown } from "react-bootstrap";


export function Layout() {
    const navbarCollaps = [
        {
            title: "Nội dung chính",
            href: "http://192.168.1.51:3000/"
        },
        {
            title: "Nhân vật chính",
            subItem: [
                {
                    title: "Serena van der Woodsen",
                    href: "http://192.168.1.51:3000/nhan-vat-chinh/serena-van-der-woodsen"
                },  
                {
                    title: "Blair Waldorf",
                    href: "http://192.168.1.51:3000/nhan-vat-chinh/blair-waldorf"
                },
                {
                    title: "Dan Humphrey",
                    href: "http://192.168.1.51:3000/nhan-vat-chinh/dan-humphrey"
                },
            ]
        },
        {
            title: "Nhân vật đáng chú ý",
            subItem: [
                {
                    title: "Chuck Bass",
                    href: "http://192.168.1.51:3000/nhan-vat-dang-chu-y/chuck-bass"
                },
                {
                    title: "Nate Archibald",
                    href: "http://192.168.1.51:3000/nhan-vat-dang-chu-y/nate-archibald"
                },
                {
                    title: "Jenny Humphrey",
                    href: "http://192.168.1.51:3000/nhan-vat-dang-chu-y/jenny-humphrey"
                },
            ]
        }
    ]

    return(
        <>
            <Navbar className="fixed-top bg-light" >
                <Navbar.Brand href="/" className="col-2">
                    Gossip Girl Fandom
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {
                        navbarCollaps.map(
                            (item) => {
                                if (item.subItem) {
                                    return(
                                        <NavDropdown title={item.title} className="btn btn-primary col-3">
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
                                    return <Button href={item.href} className="col-3">{item.title}</Button>
                                }
                            }
                        )                   
                    }
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </>
        
    );
};