import React from "react";
import "./sidebar.css";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <>
      <div className="container">
        <ul>
          <li className="container-list">Bảng điều khiển</li>
          <li className="container-list">
            Tiếp đón khám chữa bệnh
            <KeyboardArrowDownOutlined className="icons" />
          </li>
          <li className="container-list">
            Thu chi
            <KeyboardArrowUpOutlined className="icons icons-2" />
            <option className="container-items" value="">
              Phiếu thu
            </option>
            <option className="container-items" value="">
              Phiếu chi
            </option>
          </li>
          <li className="container-list">Khám bệnh</li>
          <li className="container-list">Cận lâm sàng</li>
          <li className="container-list">Xuất - bán thuốc</li>
          <li className="container-list">Bệnh nhân</li>
          <li className="container-list">
            Quản lý kho
            <KeyboardArrowDownOutlined className="icons" />
          </li>
          <li className="container-list">
            Hệ thống
            <KeyboardArrowUpOutlined className="icons" />
            <br />
            <span className = "container-items">
              Danh mục thông tin
              <KeyboardArrowDownOutlined className="icons" />
              <ul>
                <li>Cơ sở khám chữa bệnh</li>
                <li>Khoa - Phòng điều trị</li>
                <li>Sản phẩm</li>
                <li>Lịch làm việc</li>
              </ul>
            </span>
            <span className = "container-items">Quản lý nhân sự</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
