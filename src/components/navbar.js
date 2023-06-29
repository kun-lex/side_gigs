const NavBar = () => {
    return (
        <header class="block fixed inset-x-0 z-50 p-5 md:p-10 flex items-start justify-between gap-10">
            <div class="pl-5 md:pr-10 flex items-center">
            <svg width="60" height="60" viewBox="0 0 60 20.9" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m60 0-43.9 18.6c-3.7 1.5-6.7 2.3-9.2 2.3-2.8 0-4.8-1-6.1-2.9-1.6-2.5-.9-6.6 1.9-10.9 1.6-2.5 3.7-4.8 5.8-7-.5.7-4.7 7.8-.1 11.1.9.7 2.2 1 3.8 1 1.3 0 2.8-.2 4.4-.6z"/></svg>
            </div>
            
            <div class="px-6 md:px-10 py-4 md:py-6 flex items-center justify-between gap-10 bg-white/70 backdrop-blur-sm rounded-md sm:w-full lg:w-2/3 leading-none">
            <ul class="hidden sm:flex items-center gap-6 md:gap-8">
                <li>
                <a href="/" class="block relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left">Shop</a>
                </li>
                <li>
                <a href="/" class="block relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left">Outlet</a>
                </li>
                <li>
                <a href="/" class="block relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left">Explore</a>
                </li>
            </ul>
            <ul class="flex items-center gap-6 md:gap-8">
                <li>
                <button type="button" aria-label="Search" class="p-3 -m-3 rounded-full transition-colors hover:bg-violet-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM4 11.5a7.5 7.5 0 1 1 13.145 4.938l4.209 4.208-.708.708-4.208-4.209A7.5 7.5 0 0 1 4 11.5Z"/></svg>
                </button>
                </li>
                <li>
                <button type="button" aria-label="Cart" class="p-3 -m-3 rounded-full transition-colors hover:bg-violet-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.525 3.525A3.5 3.5 0 0 1 15.5 6v1.5H21V17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5h5.5V6a3.5 3.5 0 0 1 1.025-2.475ZM8.5 8.5v3h1v-3h5v3h1v-3H20V17a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8.5h4.5Zm6-1h-5V6a2.5 2.5 0 0 1 5 0v1.5Z"/></svg>
                </button>
                </li>
                <li>
                <button type="button" aria-label="Account" class="p-3 -m-3 rounded-full transition-colors hover:bg-violet-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm0 7.5A3.5 3.5 0 0 0 4 18.5V21H3v-2.5A4.5 4.5 0 0 1 7.5 14h9a4.5 4.5 0 0 1 4.5 4.5V21h-1v-2.5a3.5 3.5 0 0 0-3.5-3.5h-9Z"/></svg>
                </button>
                </li>
            </ul>
            </div>
        </header>
    )
}
export default NavBar;