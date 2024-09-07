function Header(){


    return <div className="bg-purple-700 px-20 py-5 flex  justify-between text-white">
        <h1 className="text-4xl sm:text-3xl">SomiLink</h1>

        <ul className="text-2xl sm:flex gap-10 hidden ">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
        </ul>

    </div>
}

export default Header