import { Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Layout() {
    return(
        <>
            <div>
                <ul className="bg-light d-flex justify-content-center list-group list-group-horizontal">
                    <li className="list-group-item">
                        <Button variant="outline-primary">
                            <a href="/">Trang chủ</a>
                        </Button>
                    </li>
                    <li className="list-group-item">
                        <Button variant="outline-primary">
                            <a href="/introduction">Giới thiệu</a>
                        </Button>
                    </li>
                    <li className="list-group-item">
                        <Button variant="outline-primary">
                            <a href="/information">Thông tin hữu ích</a>
                        </Button>
                    </li>
                    <li className="list-group-item">
                        <Button variant="outline-primary">
                            <a href="/exam">Cuộc thi KHKT</a>
                        </Button>
                    </li>
                </ul>
                <Outlet></Outlet>
            </div>
        </>
    );
};