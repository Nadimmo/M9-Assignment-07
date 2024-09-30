/* eslint-disable react/no-unknown-property */
import logo from '../../components/img/Vector.png'  
import search from '../../components/img/Vector (1).png'  
import banner from '../../components/img/Rectangle 1.png'
import './Header.css'
const Header = () => {
    return (
        <div className='mx-10 mt-4'>
            {/* nave bar section */}
            <div className='flex justify-between'>
                <h1 className="text-3xl font-bold">Recipe Calories</h1>
                <div>
                    <ul className='ul'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipe</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                    </ul>
                </div>
                <div className='flex'>
                    <div className='mr-10'> 
                        <input className='rounded-xl absolute text-xl text-center' type="text"  placeholder="Search"/>
                        <img className='relative p-2 w-[30px]' src= {search} alt="" />
                    </div>
                    
                </div>
                <div className='ml-2'>
                    <img className='bg-[#0BE58A]' src={logo} alt="" />
                </div>
            </div>
            {/* banner section */}
            <div className='mt-[40px]'>
                <img className='absolute w-[94%]' src={banner} alt="" />
                <div className='relative text-white text-center'>
                    <h1 className='text-5xl text-white font-bold pt-[100px]'>Discover an exceptional cooking <br /> class tailored for you! </h1>
                    <p className='mt-6 '>Our iconic restaurant, located on the Seventh Floor, is open for lunch, tea, cocktails and dinner. <br />

                    Visit this picturesque setting, designed by Kelly Wrastle, with sweeping views of Central Park, <br /> and enjoy irresistible dishes including our famous Gotham Salad.</p>
                    <div className='mt-4'>
                        <button className='btn bg-[#0BE58A] rounded-xl font-bold text-black border-none'>Explore Now</button>
                        <button className='btn  bg-opacity-[0.2] rounded-xl ml-2 font-bold text-white border-none'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;