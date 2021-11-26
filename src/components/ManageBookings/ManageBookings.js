import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([])
    const [refreshKey, setRefreshKey] = useState(0);
    useEffect(() => {
        fetch('https://stormy-garden-76838.herokuapp.com/all-bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [refreshKey, bookings])

    const handleConfirm = id => {
        const url = `https://stormy-garden-76838.herokuapp.com/booking-confirm/${id}`
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "status" : "Approved"
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Booking Approved Successfully')
                    setRefreshKey(oldKey => oldKey +1)
                }
            })
    }
    const handleDelete = id => {
        const url = `https://stormy-garden-76838.herokuapp.com/booking-delete/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Booking Deleted Successfully')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
    }
    return (
        <div className="container my-5">
            <h1 className="text-center py-5" >Manage Booking</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Booked By</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Travel By</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Booking Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking =>
                            <tr>
                                <th scope="row">{bookings.indexOf(booking) + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.serviceName} (adult-{booking.adult}, children-{booking.children})</td>
                                <td>${booking.price}</td>
                                <td>{booking.ticketType}</td>
                                <td>{booking?.date}</td>
                                <td>{booking?.status}</td>
                                {booking.status !== 'Pending' && <td><button className="btn btn-success">Approved</button></td>}
                                {booking.status === 'Pending' && <td><button className="btn btn-info" onClick={() => handleConfirm(booking._id)}>Confirm</button></td>}
                                {(booking.status === 'Approved' || 'Pending') && <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this Booking?')) handleDelete(booking._id) } }>Delete</button></td>}
                            {}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageBookings;