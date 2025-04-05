import React from "react";

const Jumbotron = () => {
    return (

        <div className="jumbotron jumbotron-fluid p-5 mb-4 bg-body-tertiary rounded-3">
            <h1 className="display-4">Welcome!</h1>
            <p className="lead">Donec eu lectus finibus, accumsan justo eu, ultrices purus. In ante enim, egestas ut tortor ut, maximus fringilla massa. Suspendisse potenti. Maecenas elementum sem ac euismod sollicitudin. Mauris nec quam diam. Aliquam eget volutpat tellus. Aliquam in elit vel sapien porta ornare a in felis. Aenean ultrices ornare viverra. Vivamus dui dui, commodo nec sagittis sit amet, rhoncus sit amet est.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
            <hr className="my-4" />
        </div>
    );
};

export default Jumbotron;