import React from 'react'
import { useSelector } from 'react-redux'
import TimeSheet from './TimeSheet';

export default function Timesheets() {
    const contacts=useSelector((state) => state.contacts);
    return (
      <div>
        <table className="table table-striped table-hover shadow">
          <thead>
            <tr>
              <th scope="col">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label" />
                </div>
              </th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => 
                <TimeSheet contact={contact}/>
            )}
          </tbody>
        </table>
      </div>
    )
}
