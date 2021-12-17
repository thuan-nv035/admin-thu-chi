import React from 'react'

const SetFilter = () => {
    return (
        <div>
            <div >
              <div className="menu-filter-items">
                <div>
                  <h2>Bộ lọc</h2>
                </div>
                <div className="time">
                  <div className="time-start">
                    <h3>Ngày bắt đầu</h3>
                    <input type="date" />
                  </div>
                  <div className="time-end">
                    <h3>Ngày kết thúc</h3>
                    <input type="date" />
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default SetFilter
