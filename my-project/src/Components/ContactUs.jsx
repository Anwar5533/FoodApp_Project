export default function ContactUs(){
    return (
        <>
            <h1 className="text-2xl p-2 m-2">This is contact us page</h1>
            <form action="">
                <input type="text" placeholder="First-Name" className="border border-black px-2 py-2 m-4 rounded-lg" />
                <input type="text" placeholder="Last-Name" className="border border-black px-2 py-2 m-4 rounded-lg" />
                <input type="number" placeholder="Phone-Number" className="border border-black px-2 py-2 m-4 rounded-lg" />
                <button className="border border-black px-2 py-2 m-4 rounded-lg">Submit</button>
            </form>
        </>
    );
}