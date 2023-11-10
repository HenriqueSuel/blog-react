const NavBar = () => {


    return (
        <div className="bg-sky-500 p-5 shadow-lg flex justify-between">
            <h1>Blog Henrique</h1>

            <ul className="flex gap-5">
                <li>home</li>
                <li>Noticias</li>
                <li>login</li>
            </ul>
        </div>
    )
}


export default NavBar;