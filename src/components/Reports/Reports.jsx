import React, { useState } from "react";
import "./reports.css";
import {
  ChevronRightOutlined,
  ReceiptOutlined,
  SearchOutlined,
  FilterListOutlined,
} from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Reports = () => {
  const [filter, setFilter] = useState(false);

  const showFilter = () => setFilter(!filter);

  const columns = [
    { field: "date", headerName: "Ngày đặt", width: 180 },
    { field: "username", headerName: "Tên bệnh nhân", width: 150 },
    { field: "birthday", headerName: "Ngày sinh", width: 150 },
    { field: "gender", headerName: "Giới tính", width: 150 },
    { field: "total", headerName: "Tổng tiền", width: 150 },
    { field: "action", headerName: "Thao tác", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nam",
      total: "2520 000 đ",
      action: "Thanh toán",
    },
    {
      id: 2,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nam",
      total: "2120 000 đ",
      action: "Thanh toán",
    },
    {
      id: 3,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nữ",
      total: "220 000 đ",
      action: "Thanh toán",
    },
    {
      id: 4,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nam",
      total: "220 000 đ",
      action: "Thanh toán",
    },
    {
      id: 5,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nữ",
      total: "1220 000 đ",
      action: "Thanh toán",
    },
    {
      id: 6,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nữ",
      total: "2220 000 đ",
      action: "Đã Thanh toán",
    },
    {
      id: 7,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nam",
      total: "220 000 đ",
      action: "Thanh toán",
    },
    {
      id: 8,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nam",
      total: "2240 000 đ",
      action: "Thanh toán",
    },
    {
      id: 9,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nữ",
      total: "5220 000 đ",
      action: "Đã Thanh toán",
    },
    {
      id: 10,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nữ",
      total: "220 000 đ",
      action: "Thanh toán",
    },
    {
      id: 11,
      date: "9-40 ngày 12/08/2021",
      username: "Cao Việt Bách",
      birthday: "31/12/2000",
      gender: "Nam",
      total: "220 000 đ",
      action: "Thanh toán",
    },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="navigation">
          <span>Trang chủ</span>
          <ChevronRightOutlined className="icons-items" />
          <span>Thu Chi</span>
          <ChevronRightOutlined className="icons-items" />
          <span style={{ color: "red" }}>Phiếu thu</span>
        </div>
        <div className="phieu-thu">
          <ReceiptOutlined className="ReceiptOutline" />
          <h2 className="title">PHIẾU THU</h2>
        </div>
        <div className="danh-sach-phieu-thu">
          <h2>Danh sách phiếu thu</h2>
        </div>
        <div className="toggle">
          <div className="payments">
            <div className="payments-item">Chưa thanh toán</div>
            <div className="payments-item">Đã thanh toán</div>
          </div>
          <div className="search-filter">
            <div className="search">
              <input
                type="text"
                placeholder="Tìm kiếm bệnh nhân/mã bệnh nhân"
              />
              <SearchOutlined className="icons-search" />
            </div>
            <div className="filter">
              <FilterListOutlined onClick={showFilter} />
            </div>
          </div>
        </div>
        <div style={{ height: 400, width: "94.5%", paddingLeft: "20px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div>
      </div>
    </>
  );
};

export default Reports;
