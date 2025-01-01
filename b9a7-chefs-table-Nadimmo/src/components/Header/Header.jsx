/* eslint-disable react/no-unknown-property */
import logo from '../../components/img/Vector.png';
import search from '../../components/img/Vector (1).png';
import banner from '../../components/img/Rectangle 1.png';
import './Header.css';

const Header = () => {
    return (
        <div className='mx-4 sm:mx-10 mt-4'>
            {/* Navbar section */}
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <h1 className="text-2xl sm:text-3xl font-bold">Recipe Calories</h1>
                <div className='hidden sm:flex'>
                    <ul className='ul'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipe</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
                <div className='flex items-center mt-4 sm:mt-0'>
                    <div className='relative mr-4'>
                        <input
                            className='rounded-xl pl-4 pr-10 py-2 text-sm sm:text-xl border border-gray-300'
                            type="text"
                            placeholder="Search"
                        />
                        <img className='absolute top-2 right-2 w-[20px] sm:w-[30px]' src={search} alt="Search" />
                    </div>
                    <div className='ml-2'>
                        <img className='w-[30px] sm:w-[40px] p-2 bg-[#0BE58A] rounded-full' src={logo} alt="Logo" />
                    </div>
                </div>
            </div>
            {/* Banner section */}
            <div className='mt-10 relative'>
                <img className='w-full lg:h-full h-[520px]' src={banner} alt="Banner" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center  text-white'>
                    <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold text-white'>
                        Discover an exceptional cooking <br /> class tailored for you!
                    </h1>
                    <p className='mt-4 text-sm sm:text-base lg:text-lg'>
                        Our iconic restaurant, located on the Seventh Floor, is open for lunch, tea, cocktails and dinner. <br />
                        Visit this picturesque setting, designed by Kelly Wrastle, with sweeping views of Central Park, <br />
                        and enjoy irresistible dishes including our famous Gotham Salad.
                    </p>
                    <div className='mt-6 flex flex-wrap gap-4 justify-center'>
                        <button className='btn bg-[#0BE58A] rounded-xl font-bold text-black px-6 py-2'>
                            Explore Now
                        </button>
                        <button className='btn bg-white bg-opacity-20 rounded-xl font-bold text-white px-6 py-2 border border-white'>
                            Our Feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
