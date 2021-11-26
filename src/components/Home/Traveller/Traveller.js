import React from 'react';

const Traveller = ({traveller}) => {
    const { name, img} = traveller;
    return (
        <div className="col-lg-3 col-sm-6 col-12 mb-5">
            <div className="team-member mx-1 rounded text-center shadow p-3 my-5 bg-white rounded">
                <img className="img-fluid rounded-circle m-3" src={img} alt="{name}" />
                <h3 className="text-center">{name}</h3>
                <h5 className="text-center text-warning">Traveller</h5>
                <p>{name} is one of the most common heart tests which monitors your heart rate, rhythm and electrical activity.</p>
            </div>
        </div>
    );
};

export default Traveller;