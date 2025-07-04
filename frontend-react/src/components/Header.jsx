import Button from "./Button";

const Header = () => {
    return(
        <>
        <nav className="navbar container pt-3 pb-3 align-items-start">
         <a className="navbar-brand text-light" href="">Stock Prediction portal</a>
         <div>
            <Button class="btn btn-outline-primary" text="Login" />
            &nbsp;
            <Button class="btn btn-success" text="Register" />
         </div>
        </nav>
        </>
    )
}

export default Header;