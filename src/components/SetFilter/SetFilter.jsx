import React, { useState, useRef } from "react";
import "./SetFilter.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FilterListOutlined, ChevronRightOutlined } from "@material-ui/icons";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
      // user click toggle
      if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
          content_ref.current.classList.toggle('active')
      } else {
          // user click outside toggle and content
          if (content_ref.current && !content_ref.current.contains(e.target)) {
              content_ref.current.classList.remove('active')
          }
      }
  })
}

const SetFilter = () => {

  const menu_ref = useRef(null)
  const menu_toggle_ref = useRef(null)

  clickOutsideRef(menu_ref, menu_toggle_ref) 
  const setActiveMenu = () =>   menu_ref.current.classList.add('active')
  const closeeMenu = () =>   menu_ref.current.classList.remove('active')
  
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      <div ref={menu_toggle_ref} className="button-filter" onClick = {() => setActiveMenu()}>
        <FilterListOutlined />
      </div>
      <div ref={menu_ref} className="menu-filter">
      <ChevronRightOutlined className="close" onClick = {() => closeeMenu()}/>
        <h3>Bộ lọc</h3>
        <div className="container-d">
          <div className="time">
            <h4>Thời gian</h4>
            <div className="time-start">
              <h5>Ngày bắt đầu</h5>
              <input type="date" />
            </div>
            <div className="time-end">
              <h5>Ngày kết thúc</h5>
              <input type="date" />
            </div>
          </div>
          <div className="calendar">
            <Calendar onChange={onChange} value={date} className="calendar" />
          </div>
        </div>
        <div className="button-submit">
          <div className="button-submit-items-1">Hủy</div>
          <div className="button-submit-items-2">Áp dụng</div>
        </div>
      </div>
    </div>
  );
};

export default SetFilter;
