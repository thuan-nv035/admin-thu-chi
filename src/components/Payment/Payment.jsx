import React, { useRef } from "react";
import "./payment.css";
import {
  ChevronRightOutlined,
  LocalPrintshopOutlined,
} from "@material-ui/icons";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};
const Payment = () => {
  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);

  clickOutsideRef(menu_ref, menu_toggle_ref);
  const setActiveMenu = () => menu_ref.current.classList.add("active");
  const closeeMenu = () => menu_ref.current.classList.remove("active");

  return (
    <>
      <button
        ref={menu_toggle_ref}
        className="action"
        onClick={() => setActiveMenu()}
      >
        Thanh toán
      </button>
      <div ref={menu_ref} className="menu-payments">
        <ChevronRightOutlined className="closed" onClick={() => closeeMenu()} />
        <h2 className="pay">Thanh toán</h2>
        <div className="basic-information">
          <h2>Thông tin cơ bản</h2>
          <div className="date">
            <div className="date-start">
              <h3>Ngày đặt:</h3>
              <span className="time">09:00</span>
              <span>Thứ 2-22/9/2021</span>
            </div>
            <div className="date-end">
              <h3>Ngày thanh toán:</h3>
              <span className="time">11:24</span>
              <span>Thứ 3-23/9/2021</span>
            </div>
          </div>
          <div className="patient">
            <div className="patient-name">
              <h3>Tên bệnh nhân:</h3>
              <span className="name">Cao Việt Bách</span>
            </div>
            <div className="patient-name">
              <h3>Giới tính:</h3>
              <span className="name">Nam</span>
            </div>
            <div className="patient-name">
              <h3>Độ tuổi:</h3>
              <span className="name">21</span>
            </div>
          </div>
          <div className="collector">
            <h3>Người thu:</h3>
            <span>Nguyễn Văn Đức</span>
          </div>
        </div>
        <div className="service-list">
          <h3>Danh sách dịch vụ</h3>
          <div className="service-table">
            <div className="rows-l">
              <span className="name-1">Tên dịch vụ</span>
              <span className="cost">Giá bán</span>
              <span className="discount">Chiết khấu</span>
              <span className="money">Thành tiền</span>
            </div>
            <div className="column">
              <div className="column-items">
                <span className="name-1">Khám tư vấn</span>
                <span className="cost-1">410.000</span>
                <span className="discount-1">
                  <input type="text" />%
                </span>
                <span className="money-1">369.000</span>
              </div>
              <div className="column-items">
                <span className="name-1">Xét nghiệm mẫu</span>
                <span className="cost-2">410.000</span>
                <span className="discount-1">
                  <input type="text" />%
                </span>
                <span className="money-1">410.000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-pay">
          <div className="print">
            <LocalPrintshopOutlined />
            <span>In phiếu</span>
          </div>
          <div className="button">
            <button className = "button-1" onClick={() => closeeMenu()}>Hủy</button>
            <button className = "button-1">Hoàn thành</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
