import baby from "../../assets/Logo/crying.jpg"

const Error = () => {
    return (
        <div className="m-20  justify-center flex items-center text-center">
            <img className="relative rounded-3xl" src={baby} alt="" />
            <div className="absolute text-orange-700 font-bold">
                <h1 className="text-8xl">404</h1>
                <h2 className="text-3xl">Ooo!!! Hooo!!!</h2>
                <h2 className="text-3xl">You Visit The Wrong Route</h2>
            </div>
        </div>
    );
};

export default Error;