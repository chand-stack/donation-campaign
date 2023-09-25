import errorImg from '../../assets/404design.png'
const ErrorPage = () => {
    return (
        <div className='h-screen space-y-2'>
            <img className='h-[80vh] mx-auto' src={errorImg} alt="" />
            <h1 className='text-5xl md:text-7xl font-extrabold text-center'>Oooops!!!</h1>
            <p className='text-3xl md:text-5xl font-extrabold text-center'>The Page You Were Looking For Was Not Found</p>
        </div>
    );
};

export default ErrorPage;