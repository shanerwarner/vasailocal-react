import logo from './logo.svg';
import './App.css';

function App() {

return(
<div className="flex flex-col h-screen">
<div className="p-4">
  <nav>
    <div className='md:mx-32 md:mt-4 md:rounded-2xl flex flex-wrap items-center justify-between md:justify-around p-3 bg-slate-200 rounded-xl px-4 shadow-lg ring-1 ring-gray-500'>
    <a href="./index.html" class="font-extrabold text-2xl">VasaiLocal.IT</a>
    <div class="flex md:hidden">
                    <button id="hamburger">
                        <img class="toggle block"
                            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40"
                            height="40" />
                        <img class="toggle hidden"
                            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40"
                            height="40" />
                    </button>
                </div>
                <div
                    class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-zinc-300 md:border-none">
                    <a href="#"
                        class="block md:inline-block text-zinc-900 hover:text-blue-500 px-3 py-3   md:border-none">Home
                    </a>
                    <a href="#"
                        class="block md:inline-block text-zinc-900 hover:text-blue-500 px-3 py-3   md:border-none">Products
                    </a>
                    <a href="./services.html"
                        class="block md:inline-block text-zinc-900 hover:text-blue-500 px-3 py-3  md:border-none">Pricing
                    </a>
                    <a href="./contact.html"
                        class="block md:inline-block text-zinc-900 hover:text-blue-500 px-3 py-3 border-b-2 border-zinc md:border-none">Contact

                    </a>
                </div>
    </div>
    
  </nav>
</div>
</div>
);
}

export default App;
