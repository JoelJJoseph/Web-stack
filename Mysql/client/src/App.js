import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [department, setdepartment] = useState("");
    const [charge, setcharge] = useState(0);

    const [newcharge, setNewcharge] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    const addEmployee = () => {
        Axios.post("http://localhost:3001/create", {
            name: name,
            age: age,
            country: country,
            department: department,
            charge: charge,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    name: name,
                    age: age,
                    country: country,
                    department: department,
                    charge: charge,
                },
            ]);
        });
    };

    const getEmployees = () => {
        Axios.get("http://localhost:3001/employees").then((response) => {
            setEmployeeList(response.data);
        });
    };

    const updateEmployeecharge = (id) => {
        Axios.put("http://localhost:3001/update", { charge: newcharge, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id === id ? {
                                id: val.id,
                                name: val.name,
                                country: val.country,
                                age: val.age,
                                department: val.department,
                                charge: newcharge,
                            } :
                            val;
                    })
                );
            }
        );
    };

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setEmployeeList(
                employeeList.filter((val) => {
                    return val.id !== id;
                })
            );
        });
    };

    return ( < div className = "App" >
            <
            div className = "information" >
            <
            label > Name: < /label>   <
            input type = "text"
            onChange = {
                (event) => {
                    setName(event.target.value);
                }
            }
            /> <label> Age: </label > <
            input type = "number"
            onChange = {
                (event) => {
                    setAge(event.target.value);
                }
            }
            />  <
            label > Country: < /label>  <
            input type = "text"
            onChange = {
                (event) => {
                    setCountry(event.target.value);
                }
            }
            /> <label> department: </label > <
            input type = "text"
            onChange = {
                (event) => {
                    setdepartment(event.target.value);
                }
            }
            /> <label> charge(per visit): </label > <
            input type = "number"
            onChange = {
                (event) => {
                    setcharge(event.target.value);
                }
            }
            /> <button onClick = { addEmployee } > Add Employee </button > < /
            div > < div className = "employees" >
            <
            button onClick = { getEmployees } > Show Employees < /button>

            {
                employeeList.map((val, key) => {
                        return ( <
                            div className = "employee" >
                            <
                            div >
                            <
                            h3 > Name: { val.name } < /h3>  <
                            h3 > Age: { val.age } < /h3>  <
                            h3 > Country: { val.country } < /h3>  <
                            h3 > department: { val.department } < /h3>  <
                            h3 > charge: { val.charge } < /h3>  < /
                            div > <
                            div >
                            <
                            input type = "text"
                            placeholder = "2000..."
                            onChange = {
                                (event) => {
                                    setNewcharge(event.target.value);
                                }
                            }
                            /> <button onClick = {
                            () => {
                                updateEmployeecharge(val.id);
                            }
                        } > { " " }
                        Update < /button>

                        <
                        button onClick = {
                                () => {
                                    deleteEmployee(val.id);
                                }
                            } >
                            Delete < /button> </div >
                            <
                            /div>
                    );
                })
        } <
        /div>  < /
    div >
);
}

export default App;