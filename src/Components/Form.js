import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DataTable from "./DataTable";


// const div = ({ className, children }) => (
//     <div className={className}>{children}</div>
// );

let alphaNumericRegex = /^[a-z0-9]+$/i;
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Email is required'),
    employee_id: Yup.number().required('Employee Id is required'),
    name: Yup.string()
        .min(2)
        .max(15)
        .matches(alphaNumericRegex, 'White Space is not allowed')
        .required('Please enter name'),
    department:Yup.string().required('Department is required'),
    date_of_joining:Yup.string().required('Date of joining is required'),
});

export default class Signup extends Component {
    state = {
        data: [],
        isFormOpen: false,
        showTable : false

    };
    handleButtonClick = () => {
        this.setState({
            isFormOpen : true
        })
    }

handleSignup = (values) => {
    // e.preventDefault();
    let data = [...this.state.data];
    data.push({
      ...values
    });
    this.setState({
      data,
        showTable : true
    });
  };
      
handleDelete = index => {
    this.state.data.splice(index,1)
}
    renderSignupForm = ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        isSubmitting
        /* and other goodies */
    }) => (
        <form onSubmit={handleSubmit} className="pt-2">
            <div className="form-group mt-3">
                <div className='d-flex form-label'>
                    Name
                </div>
                <input
                    type="name"
                    name="name"
                    className={`form-control ${errors.name &&
                        touched.name &&
                        'is-invalid'}`}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   
                    placeholder="Name"
                />
                <div className="invalid-feedback">
                    {errors.name && touched.name && errors.name}
                </div>
            </div>
            <div className="form-group mt-3">
                <div className="d-flex form-label">
                    Employee Id
                </div>
                <input
                    type="employee_id"
                    name="employee_id"
                    className={`form-control ${errors.employee_id &&
                        touched.employee_id &&
                        'is-invalid'}`}
                    value={values.employee_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   
                    placeholder="Employee Id"
                />
                <div className="invalid-feedback">
                    {errors.employee_id && touched.employee_id && errors.employee_id}
                </div>
            </div>
            <div className="form-group mt-3">
                <div className="d-flex form-label">
                    Department
                </div>
                <select name="department"  
                        className={`form-control ${errors.department &&
                        touched.department &&
                        'is-invalid'}`}
                    value={values.department}
                    onChange={handleChange}
                    onBlur={handleBlur}>
                    <option value="Department">Developer</option>
                    <option value="Finance">Finance</option>
                    <option value="Management">Management</option>
                    <option value="HR">HR</option>
                    <option value="Legal">Legal</option>
                </select>
                <div className="invalid-feedback">
                    {errors.name && touched.name && errors.name}
                </div>
            </div>
            <div className="form-group mt-3">
                <div className="d-flex form-label">
                    E-mail
                </div>
                <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email &&
                        touched.email &&
                        'is-invalid'}`}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   
                    placeholder="Email"
                />
                <div className="invalid-feedback">
                    {errors.email && touched.email && errors.email}
                </div>
            </div>
            <div className="form-group ">
                <div className="d-flex form-label">
                    Date of Joining
                </div>
                <input
                    name="date_of_joining"
                    type="date_of_joining"
                    className={`form-control ${errors.date_of_joining &&
                        touched.date_of_joining &&
                        'is-invalid'}`}
                    value={values.date_of_joining}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Date Of Joining"
                />
                <div className="invalid-feedback">
                    {errors.date_of_joining && touched.date_of_joining && errors.date_of_joining}
                </div>
            </div>
            <button
                type="submit"
                className=" cta-btn col-12 mt-4"
                disabled={this.state.customDisable}
            >
                <p className="mb-0" size="22px" weight="500">
                    Sign Up
                </p>
            </button>
            <button
                type="reset"
                className=" cta-btn col-12 mt-4"
                disabled={this.state.customDisable}
                 onClick={() => resetForm()} 
            >
                <p className="mb-0" size="22px" weight="500">
                    Clear
                </p>
            </button>
        </form>
    );
    render() {
        return (
            <Fragment>
                <div className="container-fluid main-container d-flex justify-content-center align-items-center">
                {this.state.showTable === false ? (
                    <Fragment>
                {this.state.isFormOpen === true && this.state.showTable === false ? (
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="mt-4">
                            <h2
                                className="mt-5"
                            >
                                Form
                            </h2>
                            <Formik
                                initialValues={{
                                    name: "",
                                    employee_id:"",
                                    department:"",
                                    date_of_joining:"",
                                    email: '',
                                   
                                }}
                                validationSchema={validationSchema}
                                onSubmit={this.handleSignup}
                                render={this.renderSignupForm}
                            />
                            </div>
                       
                    </div>
           
            ) : (
                <div> 
                    <button
                        type="submit"
                        className="cta"
                        onClick= {this.handleButtonClick}
                        /* disabled={this.state.customDisable} */
                    >
                        <p className="cta-text m-0">
                            New Employee
                        </p>
                    </button>
                </div>
                )}
                </Fragment>
                ) : 
              <DataTable 
                    employeedata = {this.state.data}
                    handleDelete = {this.handleDelete}/>}
            </div>
            
            </Fragment>
        );
    }
}
