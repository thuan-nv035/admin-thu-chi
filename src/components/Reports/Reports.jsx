import React, { useState } from "react";
import "./reports.css";
import {
  ChevronRightOutlined,
  ReceiptOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";
import SetFilter from "../SetFilter/SetFilter";
import Payment from "../Payment/Payment";
import { rowstable } from "../../data";
import { rowstable2 } from "../../data";

const Reports = () => {
  const columns = [
    { field: "date", headerName: "Ngày đặt", width: 180 },
    { field: "username", headerName: "Tên bệnh nhân", width: 150 },
    { field: "birthday", headerName: "Ngày sinh", width: 150 },
    { field: "gender", headerName: "Giới tính", width: 150 },
    { field: "total", headerName: "Tổng tiền", width: 250 },
    {
      field: "action",
      headerName: "Thao tác",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Payment />
          </>
        );
      },
    },
  ];

  const columns2 = [
    { field: "date", headerName: "Ngày đặt", width: 180 },
    { field: "username", headerName: "Tên bệnh nhân", width: 150 },
    { field: "birthday", headerName: "Ngày sinh", width: 150 },
    { field: "gender", headerName: "Giới tính", width: 100 },
    { field: "total", headerName: "Thực thu", width: 130 },
    { field: "collector", headerName: "Người thu", width: 150 },
    {
      field: "action",
      headerName: "Thao tác",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="button-thu">Phiếu thu</button>
          </>
        );
      },
    },
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
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
            <div
              className={
                toggleState === 1 ? "payments-item active" : "payments-item"
              }
              onClick={() => toggleTab(1)}
            >
              Chưa thanh toán
            </div>
            <div
              className={
                toggleState === 2 ? "payments-item active" : "payments-item"
              }
              onClick={() => toggleTab(2)}
            >
              Đã thanh toán
            </div>
          </div>
          <div className="search-filter">
            <div className="search">
              <input
                type="text"
                placeholder="Tìm kiếm bệnh nhân/mã bệnh nhân"
              />
              <SearchOutlined className="icons-search" />
            </div>
            <SetFilter />
          </div>
        </div>
        <div
          className={toggleState === 1 ? "table  active" : "table"}
          style={{ height: 370, width: "94.5%", paddingLeft: "20px" }}
        >
          <DataGrid
            rows={rowstable}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
        <div
          className={toggleState === 2 ? "table  active" : "table"}
          style={{ height: 370, width: "94.5%", paddingLeft: "20px" }}
        >
          <DataGrid
            rows={rowstable2}
            columns={columns2}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </>
  );
};

export default Reports;
