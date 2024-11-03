/* eslint-disable react/prop-types */


const Header = ({title,subtitle}) => {
    return (
        <div className="flex justify-center flex-col items-center p-8">
            <h1 className="font-bold">{title}</h1>
            <p>{subtitle}</p>

        </div>
    );
};

export default Header;