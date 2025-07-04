import Button from "./Button";

const Main = () => {
    return(
        <>
            <div className="container">
                <div className="p-5 text-center bg-light-drark rounded">
                    <h1 className="text-light">Stock Predicition Portal </h1>
                    <p className="text-light lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit explicabo, obcaecati illum omnis assumenda.</p>
                    <Button class="btn btn-primary" text="Login" />
                </div>
            </div>
        </>
    )
}

export default Main;