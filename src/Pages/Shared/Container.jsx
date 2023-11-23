/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="mx-8 sm:mx-6 md:mx-14 lg:mx-20 xl:mx-24">
            {children}
        </div>
    );
};

export default Container;