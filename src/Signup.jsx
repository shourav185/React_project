import "./Signup.css"

function Signup(){
    return(
        <div className="Register">
            <h3 className="heading">Register</h3>

            <form>
                <label><h5>First Name</h5></label>
                <input type="text" className="Name"/>
                <label><h5>Last Name</h5></label>
                <input type="text" className="Name"/>

                <div>
                    <h5>Email Adress</h5>
                    <input type="text"/>
                </div>
                <div>
                    <h5>Password</h5>
                    <input type="password" />
                </div>
                <button className="Register">Register</button>
            </form>
        </div>
    );
}

export default Signup;
