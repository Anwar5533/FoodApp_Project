export default function Header(){
    return (
        <div className = " flex justify-between border-solid border-2 border-slate-900 mx-[10px]">
            <div className = "" >
                <img className="w-[50%]" src="./src/assets/Logo.png" alt="" />
            </div>
            <div>
                <ul className="flex ">
                    <li className="px-2">Home</li>
                    <li className="px-2">About Us</li>
                    <li className="px-2">Contact Us</li>
                    <li className="px-2">Cart</li>
                </ul>
            </div>
        </div>
    );
}