import React, {Component} from "react";
import UserList from "./UserList";

export default class ListsMap extends Component {
    state = {
        users: [
            {id: 101, name: "Pooja", password: "565fff"},
            {id: 102, name: "Purnima", password: "345hjk"},
            {id: 103, name: "Atish", password: "347fgh"}
        ],
        isLoggesIn: false
    };

    render() {
        //const arr = [10,20,30,40,50];
        // const newArr = arr.map((num,index) => {
        //     console.log("Num = ", num);
        //     return <h3>{num}</h3>;
        // });
        // console.log("Old Array = ", arr);
        // console.log("New Array = ", newArr);
        const arr = this.props.numbers;
        // const newArr = this.state.users.map((user) => {
        //     console.log(user);
        //     return <h1 key={user.id}>Id: {user.id} Name: {user.name} Password: {user.password}</h1>
        // });
        // const newArr = arr.map((num) => {
        //     return <UserList key={num} value={num} />;
        // });
        const newArr = this.state.users.map((user) => {
            return <UserList key={user} value={user}/>
        });
        return(
            <React.Fragment>
                {/*<ul>
                    <li>{arr[0] * 2}</li>
                </ul>
                <div>
                    {newArr}
                </div>
                <div>
                    {
                        arr.map((num, index) => <h3>{num}</h3>)
                    }
                </div>*/}
                {/*<div>
                    <h1>Id: {this.state.users[0].id} <br></br> Name: {this.state.users[0].name} <br></br> Password: {this.state.users[0].password}</h1>
                </div>
                <div>
                    {newArr}
                </div>
                <div>
                    {
                        this.state.users.map((user) => { // user is an object => where through an object we can access a key.
                            console.log(user);
                            return <h1 key={user.id}>Id: {user.id} Name: {user.name} Password: {user.password}</h1>
                        })
                    }
                </div>*/}
                <ul>
                    {newArr}
                </ul>
            </React.Fragment>
        );
    }
}