import '../App.css'

const Main = () => {
    const handleCanvasClick = () => {
        const rotateButton = document.getElementById('rotate');
        rotateButton.classList.toggle('bg-indigo-600');
        rotateButton.classList.toggle('bg-lime-500');
      };
    return(
        <div>
            <div className="absolute inset-0 z-0 group cursor-pointer bg-violet-50">
                <canvas id="canvas3d" className="block w-full h-full relative z-10"></canvas>
                
                <div class="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
                    <svg class="animate-spin h-10 w-10" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2">
                        <circle class="opacity-20" cx="12" cy="12" r="11" />
                        <path d="m23 12c0 6.1-4.9 11-11 11" />
                        </g>
                    </svg>
                </div>

                <button type="button" id="rotate" className="absolute left-1/2 bottom-10 -translate-x-1/2 z-20 bg-indigo-600 rounded-full pointer-events-none group-hover:scale-110 transition">
                    <svg viewBox="0 0 80 80" xmlns="https://www.w3.org/2000/svg" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
                    <path d="m23.7 23.7c4.3-4.3 10.2-6.8 16.3-6.8s12 2.4 16.3 6.8c3.2 3.2 5.4 7.3 6.3 11.7l3.8-5.1 2.8 2-7.4 10.1-10.1-7.4 2-2.8 5.6 4.1c-.7-3.4-2.2-6.6-4.5-9.3-3.1-3.6-7.5-5.9-12.2-6.5s-9.5.5-13.5 3.1-6.8 6.6-8.1 11.3c-1.2 4.6-.7 9.5 1.4 13.8s5.7 7.6 10.1 9.5c4.4 1.8 9.3 2 13.8.4s8.3-4.6 10.7-8.8l3 1.7c-2 3.5-5 6.5-8.5 8.5s-7.5 3.1-11.5 3.1c-6.1 0-12-2.4-16.3-6.8-4.3-4.3-6.8-10.2-6.8-16.3s2.5-12 6.8-16.3z" fill="#fff"/></svg>
                    
                    <span className="block absolute left-full top-1/2 -translate-y-1/2 whitespace-nowrap ml-4 opacity-0 group-hover:opacity-100 transition-opacity">Toggle view</span>
                </button>
            </div>

            <aside className="hidden lg:block fixed right-0 bottom-0 z-50 px-10 pb-[72px] w-[38%] max-w-[500px]">
                <div className="px-10 pt-10 rounded-md bg-white/70 backdrop-blur-sm">
                    <h1 className="text-3xl">Nike Pegasus 33</h1>
                    <h2>Men's Road Running Shoes</h2>
                    <p className="mt-3">$130</p>
                </div>
            </aside>
        </div>
        
    )
}
export default Main;