import React, { Fragment } from "react";

  function RenderTableHeader() {
      return (
     <div className="table__header">
                <div className="row">
                <div className="col-1 col-sm-1 table__cell table__actions" />
                    <div className="col-2 col-sm-2 table__cell">
                        Names{" "}
                        
                    </div>
                    <div className="col-2 col-sm-2 table__cell">
                        Employee Id{" "}
                       
                    </div>
                    <div className="col-2 col-sm-2 table__cell">
                        Department{" "}
                        
                    </div>
                    <div className="col-2 col-sm-2 table__cell">
                        DOJ{" "}
                       
                    </div>
                    <div className="col-2 col-sm-2 table__cell">
                        Email{" "}
                    </div>
                </div>
            </div>
    )
}

class DataTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {employeedata} = this.props;
        console.log("data",employeedata)
        return (
            <Fragment>
            <div className="flex-column table-container">
            <h2 className="p-4">New Hiring Details</h2>
            <RenderTableHeader/>
            <div>
                {employeedata.map((items , index) => {
                    console.log("gdsfgkfdghj",items , index)
                    return(
                <div className="row">
                    <a href= "#"  className="col-1 col-sm-1 table__cell table__actions" onClick={this.props.handleDelete(index)}> Del. </a>

                    <div className="col-2 col-sm-2 table__cell">
                        {items.name}
                    </div>
                    <div className="col-2 col-sm-2 table__cell">
                        {items.employee_id}
                    </div>
                    <div className="col-2 col-sm-2 table__cell">
                        {items.department}
                        
                    </div>
                    <div className="col-2 col-sm-2 table__cell">
                        {items.date_of_joining}
                    </div>
                    <div className="col-2 col-sm-2 table__cell">
                        {items.email}
                    </div>
                </div>
                )})}
            </div>
            </div>
        </Fragment>
        );
    }
}

export default DataTable;
